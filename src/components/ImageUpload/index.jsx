import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
// redux
import { useDispatch } from 'react-redux';
import { postActions } from '@redux/modules/post';
import { userActions } from '@redux/modules/user';
// images
import profilePlaceholer from '@assets/profileplaceholder.png';
import iconImgUpload from '@assets/icon/camera.webp';
// css
import style from './imageUpload.module.css';

const ImageUpload = ({ profile, url }) => {
  const dispatch = useDispatch();
  const isProfile = profile ? true : false;
  const [imgUrl, setImgUrl] = useState(
    'https://fungap-img.s3.ap-northeast-2.amazonaws.com/unnamed.png',
  );

  useEffect(() => {
    if (url) {
      setImgUrl(url);

      isProfile
        ? dispatch(userActions.setUploadImage(url))
        : dispatch(postActions.addImage(url));
    } else {
      isProfile && setImgUrl(profilePlaceholer);
    }
  }, []);

  // AWS 이미지 업로드
  const albumBucketName = 'fungap-img';
  const bucketRegion = 'ap-northeast-2';
  const IdentityPoolId = process.env.REACT_APP_AWS_POOL_ID;

  AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: IdentityPoolId,
    }),
  });

  // 사진 업로드
  function addPhoto() {
    const date = new Date();
    const files = document.getElementById('upload').files;
    const file = files[0];
    const fileName = file.name.split('.')[0];

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: fileName + date.getTime() + '.jpg', // 파일이름 중복 제거
        Body: file,
        ContentType: file.type,
      },
    });

    const promise = upload.promise();

    // 업로드 이후 프리뷰
    promise
      .then(function(data) {
        const url = data.Location;

        setImgUrl(url);
        isProfile
          ? dispatch(userActions.setUploadImage(url))
          : dispatch(postActions.addImage(url));
      })
      .catch(err => {
        return alert('There was an error uploading your photo: ', err.message);
      });
  }

  return (
    <>
      {isProfile ? (
        <div className={style.wrap}>
          <div className={style.edit}>
            <label htmlFor='upload'>
              <img src={iconImgUpload} alt='수정아이콘' />
            </label>
            <input type='file' id='upload' onChange={addPhoto} />
          </div>
          <img src={imgUrl} alt='유저이미지' className={style.userImage} />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.imgBox}>
            <img
              className={style.postImage}
              src={imgUrl}
              alt='게시글 이미지'
            ></img>
          </div>
          <input type='file' id='upload' onChange={addPhoto} />
        </div>
      )}
    </>
  );
};

export default ImageUpload;
