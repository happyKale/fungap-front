import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import apis from '../../shared/apis';

// action type
const GET_GAMES = 'GET_GAMES';
const GET_GAME = 'GET_GAME';
const ADD_GAME = 'ADD_GAME';
const EDIT_GAME = 'EDIT_GAME';
const DELETE_GAME = 'DELETE_GAME';
const ADD_QUEST = 'ADD_QUEST';
const PARTICIPATE_GAME = 'PARTICIPATE_GAME';
const LIKE = 'LIKE';

// action creator
const getGames = createAction(GET_GAMES, game => ({ game }));
const getGame = createAction(GET_GAME, (game, quest1, quest2, comments) => ({
  game,
  quest1,
  quest2,
  comments,
}));
const addGame = createAction(ADD_GAME, game => ({ game }));
const editGame = createAction(EDIT_GAME, (gameId, game) => ({ gameId, game }));
const deleteGame = createAction(DELETE_GAME, gameId => ({ gameId }));
const addQuest = createAction(ADD_QUEST, (quest1, quest2) => ({
  quest1,
  quest2,
}));
const participateGame = createAction(
  PARTICIPATE_GAME,
  (quest, mbti, state) => ({
    quest,
    mbti,
    state,
  }),
);
const like = createAction(LIKE, gameId => ({ gameId }));

// initial state
const initialState = {};

// middleware
const getGamesDB = () => {
  return (dispatch, getState, { history }) => {
    apis
      .getGames()
      .then(res => {
        dispatch(getGames(res.data.game_list));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const getGameDB = gameId => {
  return (dispatch, getState, { history }) => {
    apis
      .getGame(gameId)
      .then(res => {
        dispatch(
          getGame(
            res.data.game,
            res.data.game_quest1,
            res.data.game_quest2,
            res.data.comments,
          ),
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const addGameDB = game => {
  return (dispatch, getState, { history }) => {
    apis
      .addGame(game)
      .then(res => {
        dispatch(addGame(game));
        history.push('/games');
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const editGameDB = (gameId, game) => {
  return (dispatch, getState, { history }) => {
    apis
      .editGame(gameId, game)
      .then(res => {
        dispatch(editGame(gameId, game));
        history.push('/games');
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const deleteGameDB = gameId => {
  return (dispatch, getState, { history }) => {
    apis
      .deleteGame(gameId)
      .then(res => {
        dispatch(deleteGame(gameId));
        history.push('/games');
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const participateGameDB = (game_id, game_quest, user_mbti) => {
  return (dispatch, getState, { history }) => {
    const state = getState().game.game.game_state;
    apis
      .participateGame(game_id, game_quest)
      .then(res => {
        dispatch(participateGame(game_quest.game_quest, user_mbti, state));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
// 좋아요
const likeDB = game_id => {
  return (dispatch, getState, { history }) => {
    apis
      .participateGame(game_id)
      .then(res => {
        dispatch(like(game_id));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const getPopularGameDB = () => {
  return (dispatch, getState, { history }) => {
    apis
      .getOrderPopularGame()
      .then(res => {
        dispatch(getGames(res.data.game_list));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const getViewGameDB = () => {
  return (dispatch, getState, { history }) => {
    apis
      .getOrderViewGame()
      .then(res => {
        dispatch(getGames(res.data.game_list));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [GET_GAMES]: (state, action) =>
      produce(state, draft => {
        draft.gameList = action.payload.game;
      }),
    [GET_GAME]: (state, action) =>
      produce(state, draft => {
        draft.game = action.payload.game;
        draft.quest1 = action.payload.quest1;
        draft.quest2 = action.payload.quest2;
        draft.comments = action.payload.comments;
      }),
    [ADD_QUEST]: (state, action) =>
      produce(state, draft => {
        draft.quest1 = action.payload.quest1;
        draft.quest2 = action.payload.quest2;
      }),
    [ADD_GAME]: (state, action) =>
      produce(state, draft => {
        draft.gameList.push(action.payload.game);
      }),
    [EDIT_GAME]: (state, action) =>
      produce(state, draft => {
        const idx = draft.gameList.findIndex(
          vote => vote.id === action.payload.gameId,
        );
        draft.gameList[idx] = {
          ...draft.gameList[idx],
          ...action.payload.game,
        };
      }),
    [DELETE_GAME]: (state, action) =>
      produce(state, draft => {
        const idx = draft.gameList.findIndex(
          vote => vote.id === action.payload.gameId,
        );
        draft.gameList.splice(idx, 1);
      }),
    [PARTICIPATE_GAME]: (state, action) =>
      produce(state, draft => {
        const state = action.payload.state;
        const quest = action.payload.quest;
        if (state === 'false') {
          draft.game.game_state = quest;
        } else if (state === '1') {
          if (quest === '1') {
            draft.game.game_state = 'false';
          } else if (quest === '2') {
            draft.game.game_state = quest;
          }
        } else if (state === '2') {
          if (quest === '2') {
            draft.game.game_state = 'false';
          } else if (quest === '1') {
            draft.game.game_state = quest;
          }
        }
      }),
    [LIKE]: (state, action) =>
      produce(state, draft => {
        const idx = draft.gameList.findIndex(
          vote => vote.id === action.payload.gameId,
        );
        draft.gameList.splice(idx, 1);
      }),
  },
  initialState,
);

export const gameActions = {
  getGames,
  addGame,
  editGame,
  deleteGame,
  addQuest,
  participateGame,
  like,
  likeDB,
  participateGameDB,
  getGamesDB,
  getGameDB,
  addGameDB,
  editGameDB,
  deleteGameDB,
  getPopularGameDB,
  getViewGameDB,
};
