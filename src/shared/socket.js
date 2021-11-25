import io from 'socket.io-client';

const EndPoint = 'http://54.180.157.153';
export const socket = io(EndPoint, { transports: ['websocket'] });
