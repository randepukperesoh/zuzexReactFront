import { useState } from 'react'
import styles from './UsersPanel.module.scss'
import { UsersModal } from '../UsersModal/UsersModal';
import { useSelector } from 'react-redux';

export const UsersPanel = () => {
    const { users } = useSelector( state => state.chat)
    const [ modal, setModal ] = useState(false);

    if (!users[0]) {
        return <div className={styles.usersPanelWrapper}>Комната пуста</div>
    }

    return(
        <>
            {modal && <UsersModal users={users} setModal={setModal}/>}
            <div className={styles.usersPanelWrapper}>
                <div>В комнате {users.length} пользователя</div>
                <img onClick={ ()=> setModal(true) } src='/Vector.svg'/>
            </div>
        </>
    )
}