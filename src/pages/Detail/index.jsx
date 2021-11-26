import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Comments, ContentFt, Goback, MbtiDescList } from '../../components';
import { postActions } from '../../redux/modules/post';
import style from './detail.module.css';

const Detail = props => {
  const dispatch = useDispatch();
  const postId = parseInt(props.match.params.id);
  const post = useSelector(state => state.post.board);

  useEffect(() => {
    dispatch(postActions.getDetailPostDB(postId));
  }, []);

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
          <Goback page='/contents'>{title}</Goback>
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
