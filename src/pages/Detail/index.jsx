import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import { Comments, Counter, Goback, MbtiDescList } from '../../components';
import { postActions } from '../../redux/modules/post';
import style from './detail.module.css';

const Detail = props => {
  const dispatch = useDispatch();
  const postId = parseInt(props.match.params.id);
  const postList = useSelector(state => state.post.postList);
  const post = postList?.find(item => {
    return item.board_id === postId;
  });

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  if (post) {
    const {
      board_id: id,
      board_image: img,
      board_title: title,
      board_desc: desc,
      board_content: content,
      comment_count,
      like_count,
      like_state,
      view_count,
    } = post;
    const mbtiList = Object.entries(content);

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
          <span
            className={classnames(
              style.heart,
              like_state === 'true' ? style.like : style.unlike,
            )}
          >
            {like_count}
          </span>
          <Counter //
            commentCount={comment_count}
            viewCount={view_count}
          />
          <Comments boardId={id} />
        </div>
      </>
    );
  }

  return <></>;
};

export default Detail;
