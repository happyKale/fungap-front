import io from 'socket.io-client';
// http://54.180.157.153
// wss://stravinest.shop
const EndPoint = 'wss://stravinest.shop';
export const socket = io(EndPoint, { transports: ['websocket'] });
