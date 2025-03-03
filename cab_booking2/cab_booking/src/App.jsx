import {BrowserRouter, createBrowserRouter,Route,RouterProvider, Routes} from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Otp from "./components/Otp";
import Name from "./components/Name";
import Search from "./components/Search";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/otp",
    element:<Otp/>
  },
  {
    path: "/name",
    element:<Name/>
  },
  {
    path: "/search",
    element:<Search/>
  },



]);

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
