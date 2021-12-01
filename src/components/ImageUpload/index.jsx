import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import imageCompression from 'browser-image-compression';
// redux
import { useDispatch } from 'react-redux';
import { postActions } from '@redux/modules/post';
import { userActions } from '@redux/modules/user';
// images
import defaultImg from '@assets/background/profile_default.webp';
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
      isProfile && setImgUrl(defaultImg);
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
  async function addPhoto(e) {
    const date = new Date();
    const imageFile = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      const compressedFileName = compressedFile.name.split('.')[0];
      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: albumBucketName,
          Key: compressedFileName + date.getTime() + '.jpg', // 파일이름 중복 제거
          Body: compressedFile,
          ContentType: compressedFile.type,
        },
      });
      const data = await upload.promise();
      const url = data.Location;

      setImgUrl(url);

      isProfile
        ? dispatch(userActions.setUploadImage(url))
        : dispatch(postActions.addImage(url));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isProfile ? (
        <div className={style.wrap}>
          <div className={style.edit}>
            <label htmlFor='upload'>
              <img src={iconImgUpload} alt='수정아이콘' />
            </label>
            <input
              type='file'
              accept='image/*'
              id='upload'
              onChange={addPhoto}
            />
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
          <input type='file' accept='image/*' id='upload' onChange={addPhoto} />
        </div>
      )}
    </>
  );
};

export default ImageUpload;
