import React from 'react';
import style from './adminPostPreview.module.css';
import { Goback } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../../redux/modules/post';

const AdminPostPreview = props => {
  const dispatch = useDispatch();
  const postId = props.match.params.id;
  const post = useSelector(state => state.post.post);
  const mbtiList = Object.entries(post.mbti);
  return (
    <React.Fragment>
      <Goback page='/admin_write'>게시글 미리보기</Goback>
      <div className={style.container}>
        <div className={style.img}></div>
        <h3 className={style.title}>{post.title}</h3>
        <span className={style.like}>0</span>
        <p className={style.contents}>{post.desc}</p>
        {mbtiList.map((mbti, idx) => {
          return (
            <div key={idx} className={style.mbtiBox}>
              <div className={style.mbtiName}>{mbti[0].toUpperCase()}</div>
              <div className={style.mbtiDesc}>{mbti[1]}</div>
            </div>
          );
        })}
        <div className={style.buttonBox}>
          <button
            className={style.button}
            onClick={() => {
              if (postId) {
                dispatch(
                  postActions.editPostDB(
                    postId,
                    post.title,
                    post.img,
                    post.desc,
                    post.mbti,
                  ),
                );
              } else {
                dispatch(postActions.addPostDB());
              }
            }}
          >
            저장하기
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminPostPreview;
