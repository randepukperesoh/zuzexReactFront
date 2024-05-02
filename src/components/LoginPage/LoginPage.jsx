import { useDispatch } from "react-redux";
import { socket } from "../soket";
import { v4 as uuid } from 'uuid'
import { newUser } from "../store/Slice";
import styles from './LoginPage.module.scss'
export const LoginPage = ({setOnLogin}) => {

    const dispatch = useDispatch();

    const firstName = ['паук', 'лев', 'волк', 'мыш','червь','шмель','таракан','жук'];
    const secondName = ['радиоактивный','зеленый','маленький','веселый','большой','мертвый','живой','волосатый','новый','старый']

    const handlerLogin = () => {
        const user = {
            id: uuid(), 
            idImg: Math.floor(Math.random()*127), 
            name: secondName[Math.floor(Math.random()*secondName.length)] + ' ' 
                + firstName[Math.floor(Math.random()*firstName.length)]
        }
        socket.emit('join', user)
        dispatch(newUser(user))
        setOnLogin(true)
    }

    return(
        <button className={styles.loginBtn} onClick={handlerLogin}>Войти</button> 
    )
}