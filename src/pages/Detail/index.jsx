import React from 'react';
// components
import { Comments, ContentFt, Goback, MbtiDescList } from '@components';
// customhook
import usePostList from '@hook/usePostList';
// css
import style from './detail.module.css';

const Detail = props => {
  const { postList } = usePostList();
  const postId = parseInt(props.match.params.id);
  const post = postList?.find(item => item.board_id === postId);

  if (post) {
    const {
      board_id: id,
      board_image: img,
      board_title: title,
      board_desc: desc,
      board_content: content,
    } = post;
    const mbtiList = content && Object.entries(content);

    return (
      <>
        <div className={style.detail}>
          <Goback>{title}</Goback>
          <div className={style.image}>
            <img src={img} alt={title} />
          </div>
          <h3 className={style.title}>{title}</h3>
          <div className={style.desc}>{desc}</div>
          <div className={style.contents}>
            <MbtiDescList list={mbtiList} />
          </div>
          <ContentFt post={post} />
          <Comments boardId={id} mode={'board'} />
        </div>
      </>
    );
  }
  return <></>;
};

export default Detail;
