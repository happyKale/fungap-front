import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post } from '../../components';
import style from './postList.module.css';
import { postActions } from '../../redux/modules/post';
import { history } from '../../redux/configureStore';

const PostList = props => {
  const dispatch = useDispatch();
  const isEdit = props.isEdit ? true : false;
  console.log('수정이다: ', isEdit);
  // 게시글 목록을 리덕스에서 가져온다.
  const postList = useSelector(state => state.post.postList);
  console.log('포스트 리스트: ', postList);

  React.useEffect(() => {
    dispatch(postActions.getAdminPostDB());
  }, []);

  return (
    <div>
      {postList.map((post, index) => {
        return (
          <>
            <Post key={index} direction='row' {...post} />
            {/* props.isEdit이 true일때만 버튼이 보인다. */}
            {isEdit && (
              <div className={style.buttonBox}>
                <button
                  onClick={() => {
                    console.log('수정함');
                    history.push(`/admin_write/${post.board_id}`);
                  }}
                >
                  수정
                </button>
                <button
                  onClick={() => {
                    console.log('삭제함');
                    dispatch(postActions.deletePostDB(post.board_id));
                  }}
                >
                  삭제
                </button>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default PostList;
