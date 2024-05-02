import styles from './UsersModal.module.scss';

export const UsersModal = ({users, setModal}) => {
    const closeModalHandler = () => {
        setModal(false)
    }
    return(
        <div onClick={closeModalHandler} className={styles.modalWrapper}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
                <div className={styles.usersList}>
                    <span>Все пользователи</span>
                    {users.map( user => {
                        return (
                            <div 
                                key={user.id}
                                className={styles.user}
                            >
                                <img width={24} height={24} src={`https://randomfox.ca/images/${user.idImg}.jpg`} alt="" />  
                                <span>{user.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}