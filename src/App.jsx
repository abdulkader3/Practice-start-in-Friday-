
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Regester from './Pages/Regester'
import app from './firebase.config'

function App() {


  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Regester/>}/>
      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={shanto}/>
     
    </>
  )
}

export default App
