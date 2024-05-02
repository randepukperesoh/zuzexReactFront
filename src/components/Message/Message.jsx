import { useSelector } from 'react-redux'
import styles from './Message.module.scss'
import { useRef } from 'react'


export const Message = ({message}) => {
    const id = useSelector(state => state.chat.myUser.id)
    const imgRef = useRef(null)
    const isMyMeassage = id === message.user.id;

    const base64ToImage = (base64) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                resolve(image);
            };
            image.onerror = (error) => {
                reject(error);
            };
            image.src = base64;
        });
    };

    if(imgRef.current) {
        base64ToImage(message.message)
        .then(image => imgRef.current.src = image.src)
    }

    return(
            <div className={`${styles.messageWrapper} ${isMyMeassage ? styles.my: styles.another}`}>
                {!isMyMeassage && <img width={24} height={24} className={styles.avatar} alt='avatar' src={`https://randomfox.ca/images/${message.user.idImg}.jpg`}/>}
                {!isMyMeassage && <span className={styles.userLabel}>{message.user.name}</span>}
                {message.type === 'img' ? 
                <img style={{ width: '200px', height: 'auto' }} alt="User Image"  ref={imgRef} src=''/> : 
                <p className={styles.message}>{message.message}</p>}
                
            </div>
        
    )
}