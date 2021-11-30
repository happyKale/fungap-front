import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { checkCodeStatus } from '@shared/checkCodeStatus';
import apis from '@shared/apis';

//action type
const GET_CHATLOG = 'GET_CHATLOG';
const GET_MYMESAGE = 'GET_MYMESAGE';

//action creator
const getChatLog = createAction(GET_CHATLOG, logs => ({ logs }));
const getMessage = createAction(GET_MYMESAGE, mymessage => ({ mymessage }));

//middleware
const getChatLogDB = roomname => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getChatLogDate(roomname);

      dispatch(getChatLog(response.data.chatlogs));
    } catch (error) {
      console.log(error);

      checkCodeStatus(error.response.status, 403);
    }
  };
};

//initial state
const initialState = {
  logfromDB: [],
  mymessage: [],
};

//reducer
export default handleActions(
  {
    [GET_CHATLOG]: (state, action) =>
      produce(state, draft => {
        draft.logfromDB = action.payload.logs;
      }),
    [GET_MYMESAGE]: (state, action) =>
      produce(state, draft => {
        draft.mymessage.push(action.payload.mymessage);
      }),
  },
  initialState,
);

export const ChatActions = {
  getMessage,
  getChatLog,
  getChatLogDB,
};
