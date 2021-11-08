import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostList, Goback } from '../../components';
import style from './admin.module.css';
import { history } from '../../redux/configureStore';
import { postActions } from '../../redux/modules/post';

const Admin = props => {
  const dispatch = useDispatch();
  let defaultPost = useSelector(state => state.post.post);
  let result = true;

  return (
    <React.Fragment>
      {/* 페이지 제목 */}
      <Goback page='/userpage'>관리자 페이지</Goback>
      <div className={style.container}>
        <div className={style.postListBox}>
          <div className={style.buttonBox}>
            <button
              className={style.button}
              onClick={() => {
                if (defaultPost.title !== '') {
                  result = window.confirm(
                    '작성중인 글이 있습니다. 불러오시겠습니까?',
                  );
                  if (!result) {
                    dispatch(postActions.resetPost());
                  }
                }
                history.push('/admin_write');
              }}
            >
              글작성
            </button>
          </div>
          <PostList isAdmin />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
