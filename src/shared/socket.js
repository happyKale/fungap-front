import io from 'socket.io-client';

const EndPoint = process.env.REACT_APP_SOKET_END_POINT;
export const socket = io(EndPoint, { transports: ['websocket'] });
