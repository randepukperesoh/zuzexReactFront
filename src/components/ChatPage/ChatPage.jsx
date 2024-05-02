import styles from './ChatPage.module.scss'
import React, { useEffect } from 'react';
import { Message } from '../Message/Message';
import { UsersPanel } from '../UsersPanel/UsersPanel';
import { useSelector } from 'react-redux';
import { ChatInput } from '../ChatInput/ChatInput';
import { socket } from '../soket';
import { useRef } from 'react';
export const ChatPage = () => {
    const {messages, myUser} = useSelector( state => state.chat)

    const chatWrapperRef = useRef(null);

    useEffect(()=> {

        const handleBeforeUnload = () => {
            socket.emit('disc', myUser.id);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

    return () => { 
        window.removeEventListener('beforeunload', handleBeforeUnload);
    }
    },[])

    useEffect(() => {
        chatWrapperRef.current.scrollTo(0, chatWrapperRef.current.scrollHeight);
        
    }, [messages]);

    return(
        <div className={styles.chatPage}>
            <UsersPanel/>
            <div ref={chatWrapperRef} className={styles.chatWrapper}>
                {messages.map((el, i) => {
                    return <Message key={i} message={el}/>
                })}
            </div>
            <ChatInput/>
        </div>
    )
} 