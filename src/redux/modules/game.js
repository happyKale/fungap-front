import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { checkCodeStatus } from '@shared/checkCodeStatus';
import apis from '@shared/apis';

// action type
const GET_GAMES = 'GET_GAMES';
const GET_GAME = 'GET_GAME';
const ADD_GAME = 'ADD_GAME';
const EDIT_GAME = 'EDIT_GAME';
const DELETE_GAME = 'DELETE_GAME';
const ADD_QUEST = 'ADD_QUEST';
const PARTICIPATE_GAME = 'PARTICIPATE_GAME';

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

// initial state
const initialState = {};

// middleware
const getGamesDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getGames();
      const gameList = response.data.game_list;

      dispatch(getGames(gameList));
    } catch (error) {
      console.log(error);

      checkCodeStatus(error.response.status, 403);
    }
  };
};

const getGameDB = gameId => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getGame(gameId);
      const { game, game_quest1, game_quest2, comments } = response.data;

      dispatch(getGame(game, game_quest1, game_quest2, comments));
    } catch (error) {
      console.log(error);

      checkCodeStatus(error.response.status, 403);
    }
  };
};

const addGameDB = game => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.addGame(game);

      response && dispatch(addGame(game));
      history.push('/games');
    } catch (error) {
      console.log(error);
    }
  };
};
const editGameDB = (gameId, game) => {
  return async (dispatch, getState, { history }) => {
    try {
      const reponse = await apis.editGame(gameId, game);

      reponse && dispatch(editGame(gameId, game));
      history.push('/games');
    } catch (error) {
      console.log(error);
    }
  };
};
const deleteGameDB = gameId => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.deleteGame(gameId);

      response && dispatch(deleteGame(gameId));
      history.push('/games');
    } catch (error) {
      console.log(error);
    }
  };
};

const participateGameDB = (game_id, game_quest, user_mbti) => {
  return async (dispatch, getState, { history }) => {
    const state = getState().game.game.game_state;

    try {
      const response = await apis.participateGame(game_id, game_quest);

      response &&
        dispatch(participateGame(game_quest.game_quest, user_mbti, state));
    } catch (error) {
      console.log(error);
    }
  };
};

const getPopularGameDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getOrderPopularGame();
      const gameList = response.data.game_list;

      dispatch(getGames(gameList));
    } catch (error) {
      console.log(error);
    }
  };
};

const getViewGameDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getOrderViewGame();
      const gameList = response.data.game_list;

      dispatch(getGames(gameList));
    } catch (error) {
      console.log(error);
    }
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
          game => game.game_id === action.payload.gameId,
        );
        draft.gameList[idx] = {
          ...draft.gameList[idx],
          ...action.payload.game,
        };
      }),
    [DELETE_GAME]: (state, action) =>
      produce(state, draft => {
        draft.gameList = draft.gameList.filter(
          game => game.game_id !== action.payload.gameId,
        );
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
  participateGameDB,
  getGamesDB,
  getGameDB,
  addGameDB,
  editGameDB,
  deleteGameDB,
  getPopularGameDB,
  getViewGameDB,
};
