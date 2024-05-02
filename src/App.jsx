import { useEffect, useState } from 'react'
import './App.css'
import { LoginPage } from './components/LoginPage/LoginPage'
import { ChatPage } from './components/ChatPage/ChatPage';
import { useDispatch, useSelector } from 'react-redux';
import { getDefaultValues, newMeassage, allUsers } from './components/store/Slice';
import { socket } from './components/soket';

export const App = () => {
  const [ onLogin, setOnLogin ] = useState(false);
  // const id = useSelector(state => state.myUser.id)
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('allUsers', (data => dispatch(allUsers(data))))
    socket.on('getDefaultValues', (data => {
      dispatch(getDefaultValues(data))
    }))
    socket.on('concectNewUser', data => {
      dispatch(newMeassage(data))
    })
    socket.on('message', (data) => {
      dispatch(newMeassage(data))
    })
    
  },[])
  
  return (
    <>
    {onLogin ? 
      <ChatPage/> : 
      <LoginPage setOnLogin={setOnLogin}/>}
    </>
  )
}

export default App
