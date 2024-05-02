import io from 'socket.io-client';

export const socket = io('https://zuzexback.onrender.com',{
        transports: ['websocket'], 
        withCredentials: true,
        extraHeaders: {
            'Access-Control-Allow-Origin': 'https://zuzexback.onrender.com',
        }
});
