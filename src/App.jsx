import { useEffect, useState } from 'react' 
import './App.css' 
import authService from "./appwrite/auth"
import {useDispatch} from 'react-redux'
import {login, logout} from './store/authSlice'
import {Footer, Header} from './components'
import { Outlet } from 'react-router-dom'


function App() {
//conditional  from rendering databases or network 

const [loading, setLoading] = useState(true)
const dispatch = useDispatch()
useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{

     if (userData){
      dispatch(login({userData}))
    }  
    else {
      dispatch(logout())
    }

  })
  .finally(()=> setLoading(false))
 }, [])

 return !loading ? (
  <div className='min-h-screen flex flex-wrap
  content-between bg-gray-800'>
    <div className='w-full-block'>
      <Header/ >
      <Footer/ >
      <main>
        
      </main>

    </div>
  </div>

 ):null 

}


export default App;
