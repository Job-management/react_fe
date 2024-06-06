/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import ENV_SOCKET_IO from './constants';

const BASE_SOCKET_URL = 'ws://localhost:8002';

const SocketContext = React.createContext({});

function SocketProvider({ children, ...props }: any) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!BASE_SOCKET_URL) return;
    const socket = io(BASE_SOCKET_URL, {
      transports: ['websocket'],
      path: '/socket.io',
    }) as any;
    setSocket(socket);

    socket.on('broadcast', (message: string) => {
      console.log('Received broadcast:', message);
    });

    socket.on('disconnect', () => {
      console.log('disconnected from socket server');
    });

    return () => {
      socket.disconnect();
    };
  }, [BASE_SOCKET_URL]);

  const value = { socket, ENV_SOCKET_IO };
  return (
    <SocketContext.Provider
      value={value}
      {...props}>
      {children}
    </SocketContext.Provider>
  );
}

function useSocket() {
  const context = useContext<any>(SocketContext);
  if (typeof context === 'undefined') {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
}

export { SocketProvider, useSocket };
