import React from 'react';
import classNames from 'classnames';
// route
import { history } from '@redux/configureStore';
// css
import style from './contentsRowItem.module.css';

const ContentsRowItem = ({ item, mode }) => {
  const handleClick = (e, gameId) => {
    const { id } = e.currentTarget;

    if (id === 'post') {
      history.push(`/detail/${item?.board_id}`);
    }
    if (id === 'game') {
      history.push(`/game/${gameId}`);
    }
    if (id === 'chatting') {
      history.push(`/${item.page}`);
    }
  };

  if (mode === 'post') {
    return (
      <div
        id='post'
        className={classNames(
          style.content,
          style.columnContent,
          style.postContent,
        )}
        onClick={handleClick}
      >
        <img
          src={item?.board_image}
          className={style.contentImage}
          alt='이미지'
        />
        <p className={style.contentTitle}>{item?.board_title}</p>
      </div>
    );
  } else if (mode === 'game') {
    return (
      <div className={classNames(style.gameContent)}>
        {item?.map((i, idx) => {
          return (
            <div
              id='game'
              className={style.gameInnerContent}
              key={Math.random() + 'game' + idx}
              onClick={e => handleClick(e, i?.game_id)}
            >
              <span className={style.gameContentTitle}>{i?.game_title}</span>
              <div className={style.gameContentItem}>
                <div className={style.gameContentQuest}>
                  <span>{i?.game_quest1}</span>
                </div>
                <div className={style.vs} />
                <div className={style.gameContentQuest}>
                  <span>{i?.game_quest2}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (mode === 'chatting') {
    return (
      <div
        id='chatting'
        className={classNames(style.content, style.columnContent)}
        onClick={handleClick}
      >
        <img
          src={item?.chatting_img}
          className={style.chattingImage}
          alt='이미지'
        ></img>
        <p className={style.contentTitle}>{item?.chatting_title}</p>
        <p className={style.contentDesc}>{item?.chatting_desc}</p>
      </div>
    );
  }
};

export default ContentsRowItem;
