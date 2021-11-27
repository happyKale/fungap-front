import React from 'react';
import style from './contentsRowItem.module.css';
import classNames from 'classnames';
import { history } from '../../redux/configureStore';

const ContentsRowItem = props => {
  const item = props?.item;
  const mode = props?.mode;

  if (mode === 'post') {
    return (
      <div
        className={classNames(
          style.content,
          style.columnContent,
          style.postContent,
        )}
      >
        <img
          onClick={() => {
            history.push(`detail/${item?.board_id}`);
          }}
          src={item?.board_image}
          className={style.contentImage}
        />
        <p
          onClick={() => {
            history.push(`detail/${item?.board_id}`);
          }}
          className={style.contentTitle}
        >
          {item?.board_title}
        </p>
      </div>
    );
  } else if (mode === 'game') {
    return (
      <div className={classNames(style.gameContent)}>
        {item?.map((i, idx) => {
          return (
            <div
              className={style.gameInnerContent}
              key={Math.random() + 'game' + idx}
            >
              <span className={style.gameContentTitle}>{i?.game_title}</span>
              <div className={style.gameContentItem}>
                <div
                  className={style.gameContentQuest}
                  onClick={() => {
                    history.push(`game/${i?.game_id}`);
                  }}
                >
                  <span>{i?.game_quest1}</span>
                </div>
                <div className={style.vs} />
                <div
                  className={style.gameContentQuest}
                  onClick={() => {
                    history.push(`game/${i?.game_id}`);
                  }}
                >
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
      <div className={classNames(style.content, style.columnContent)}>
        <img
          onClick={() => {
            history.push(`/chatting`);
          }}
          src={item?.chatting_img}
          className={style.contentImage}
        ></img>
        <p
          onClick={() => {
            history.push(`/chatting`);
          }}
          className={style.contentTitle}
        >
          {item?.chatting_title}
        </p>
        <p className={style.contentDesc}>{item?.chatting_desc}</p>
      </div>
    );
  }
};

export default ContentsRowItem;
