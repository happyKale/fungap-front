import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import style from './kakao.module.css';
import btn_kakao_share from '../../assets/btn_kakao_share.png';

const { Kakao } = window;

const KakaoShareButton = ({ postId }) => {
  const post = useSelector(state => state.post.board);

  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    if (Kakao) {
      const kakao = Kakao;

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: post.board_title, // 공유제목
          description: `#mbti #fungap #${post.board_title}`,
          imageUrl:
            'https://fungap-img.s3.ap-northeast-2.amazonaws.com/logo_share.png', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: post.like_count,
          commentCount: post.comment_count,
          sharedCount: 333,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <>
      {/* Kakao share button */}
      <button id='kakao-link-btn' className={style.btnKakaoShare}>
        <img src={btn_kakao_share} alt='카카카오 공유하기' />
      </button>
    </>
  );
};

export default KakaoShareButton;
