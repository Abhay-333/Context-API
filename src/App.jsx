import Home from './Components/Home'
import User from './Components/User'
import { Route, Routes } from 'react-router-dom'


const App = () => {
 
  return (


      <div className='w-[80%] mx-auto mt-[5%] bg-zinc-200 p-5 text-[3vw]'>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/user/:id' element={<User />}></Route>

        </Routes>

      </div>

  )
}

export default App