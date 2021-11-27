import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

//action type
const GET_CHATLOG = 'GET_CHATLOG';
const GET_MYMESAGE = 'GET_MYMESAGE';

//action creator
const getChatLog = createAction(GET_CHATLOG, logs => ({ logs }));
const getMessage = createAction(GET_MYMESAGE, mymessage => ({ mymessage }));

//middleware
const getChatLogDB = roomname => {
  return async (dispatch, getState, { history }) => {
    console.log('ChatLog 데이터 가져오기');
    try {
      const response = await apis.getChatLogDate(roomname);
      dispatch(getChatLog(response.data.chatlogs));
    } catch (error) {
      console.log(error);
    }
  };
};

//initial state
const initialState = {
  logfromDB: [],
  mymessage: [],
  // {
  //   chat_id: 1,
  //   room_name: 'N',
  //   user_id: 4,
  //   nickname: '임동건2',
  //   user_image: '',
  //   message: '서버로 부터 받아온 메시지를 리덕스 이용해서 저장',
  //   createAt: '',
  // },
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
