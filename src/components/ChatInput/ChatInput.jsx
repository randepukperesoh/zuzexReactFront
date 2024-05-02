import { useDispatch, useSelector } from 'react-redux';
import { newMyMeassage, newMyImgMeassage } from '../store/Slice';
import { socket } from '../soket';
import styles from './ChatInput.module.scss'
import { useRef } from 'react';


export const ChatInput = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const { myUser} = useSelector( state => state.chat)

    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            socket.emit('sendMessage', {user: myUser, message: inputRef.current.value});
            dispatch(newMyMeassage(inputRef.current.value))
            inputRef.current.value='';
        }
        if(e._reactName = "onClick"){
            socket.emit('sendMessage', {user: myUser, message: inputRef.current.value});
            dispatch(newMyMeassage(inputRef.current.value))
            inputRef.current.value='';
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
            const base64Image = reader.result;
            socket.emit('sendMessage', {user: myUser, type: 'img', message: base64Image})
            dispatch(newMyImgMeassage(base64Image))
            event.target.value = null;
        };
    
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    

    return(
        <div className={styles.inputWrapper}>
            <div className={styles.userInfo}>
                <img width={24} height={24} src={`https://randomfox.ca/images/${myUser.idImg}.jpg`}/>
                <span className={styles.nameLabel}>{myUser.name}</span>
            </div>
            <div className={styles.fileInput}>
                <input type="file" onChange={handleFileChange} />
                <img width={24} src='/Fill.svg'/>
            </div>
            
            <input ref={inputRef} className={styles.textInput} type="textbox" placeholder="Введите сообщение"/>
            <button onClick={handleKeyPress} className={styles.sendBtn}> Send </button>
        </div>
    )
}