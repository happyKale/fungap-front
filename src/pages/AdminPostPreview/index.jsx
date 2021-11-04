import React from 'react';
import style from './adminPostPreview.module.css';
import { Goback } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { postActions } from '../../redux/modules/post';

const AdminPostPreview = props => {
  const dispatch = useDispatch();
  const postId = props.match.params.id;
  const post = useSelector(state => state.post.post);
  const editPost = useSelector(state => state.post.editPost);
  const image = useSelector(state => state.post.postImg);
  const mbtiList = Object.entries(post.mbti);
  const editMbtiList = Object.entries(editPost.board_content);
  return (
    <React.Fragment>
      {postId ? (
        <Goback page={`/admin_write/${postId}`}>게시글 미리보기</Goback>
      ) : (
        <Goback page='/admin_write'>게시글 미리보기</Goback>
      )}
      <div className={style.container}>
        <img src={image} alt='게시글 이미지'></img>
        <h3 className={style.title}>
          {postId ? editPost.board_title : post.title}
        </h3>
        <span className={style.like}>0</span>
        <p className={style.contents}>
          {postId ? editPost.board_desc : post.desc}
        </p>
        {postId
          ? editMbtiList.map((mbti, idx) => {
              return (
                <div key={idx} className={style.mbtiBox}>
                  <div className={style.mbtiName}>{mbti[0].toUpperCase()}</div>
                  <div className={style.mbtiDesc}>{mbti[1]}</div>
                </div>
              );
            })
          : mbtiList.map((mbti, idx) => {
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
                    editPost.board_title,
                    image,
                    editPost.board_desc,
                    editPost.board_content,
                  ),
                );
              } else {
                dispatch(postActions.addPostDB());
              }
            }}
          >
            {postId ? '수정하기' : '저장하기'}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminPostPreview;
