import React, { useState } from 'react';
import style from './imageUpload.module.css';
import { useDispatch, useSelector } from 'react-redux';
import AWS from 'aws-sdk';
import { postActions } from '../../redux/modules/post';
import { userActions } from '../../redux/modules/user';
import userPlaceholer from '../../assets/userplaceholder.png';

const ImageUpload = props => {
  const dispatch = useDispatch();
  const url = useSelector(state => state.post.postImg);
  const isProfile = props.profile ? true : false;
  const [imgUrl, setImgUrl] = useState(userPlaceholer);

  React.useEffect(() => {
    let url = props.url ? props.url : false;
    if (url) {
      console.log('url넘어오는걸: ', url);
      setImgUrl(url);
      if (isProfile) {
        dispatch(userActions.setUploadImage(url));
      } else {
        dispatch(postActions.addImage(url));
      }
    }
    console.log('수정 이미지: ', url);
  }, []);

  // AWS 업로드 부분 시작 ------------
  // 기본 설정
  const albumBucketName = 'fungap-img';
  const bucketRegion = 'ap-northeast-2';
  const IdentityPoolId = 'ap-northeast-2:42066bc2-5ae1-4961-bc97-cfa224c48843';

  AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId,
    }),
  });

  // 사진 업로드
  function addPhoto() {
    const files = document.getElementById('upload').files;
    if (!files.length) {
      return alert('Please choose a file to upload first.');
    }
    const file = files[0];
    const fileName = file.name;
    console.log(file);

    // Use S3 ManagedUpload class as it supports multipart uploads
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: fileName,
        Body: file,
        ContentType: file.type,
      },
    });

    const promise = upload.promise();

    // 사진이 업로드 된 후
    promise
      .then(function (data) {
        alert('사진이 성공적으로 업로드 되었습니다!');
        // 업로드한 이미지 url
        const url = data.Location;
        // 이미지 프리뷰로 보여주기
        setImgUrl(url);
        // 사용자 프로필 사진 변경일 때와 관리자 페이지 이미지 변경일 때로 나눔.
        if (isProfile) {
          // user모듈의 프로필이미지에 저장되도록
          dispatch(userActions.setUploadImage(url));
        } else {
          dispatch(postActions.addImage(url));
        }
      })
      .catch(err => {
        return alert('There was an error uploading your photo: ', err.message);
      });
    // AWS 업로드 부분 끝 ------------
  }

  return (
    <React.Fragment>
      {isProfile ? (
        <div>
          <div className={style.editImage}>
            <label htmlFor='upload'>
              <img
                src='https://cdn.iconscout.com/icon/free/png-256/edit-2653317-2202989.png'
                alt='수정아이콘'
              />
            </label>
            <input type='file' id='upload' onChange={addPhoto} />
          </div>
          <img src={imgUrl} alt='유저이미지' className={style.userImage} />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.imgBox}>
            <img className={style.img} src={imgUrl} alt='게시글 이미지'></img>
          </div>
          <input type='file' id='upload' onChange={addPhoto} />
        </div>
      )}
    </React.Fragment>
  );
};

export default ImageUpload;
