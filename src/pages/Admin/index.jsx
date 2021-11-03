import React from 'react';
import { useSelector } from 'react-redux';
import { PostList, Goback } from '../../components';
import style from './admin.module.css';
import { history } from '../../redux/configureStore';

const Admin = props => {
  return (
    <React.Fragment>
      {/* 페이지 제목 */}
      <Goback>관리자 페이지</Goback>
      <div className={style.container}>
        <div className={style.postListBox}>
          <div className={style.buttonBox}>
            <button
              className={style.button}
              onClick={() => {
                history.push('/admin_write');
              }}
            >
              글작성
            </button>
          </div>
          <PostList isEdit />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
