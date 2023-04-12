import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';


 const App = () => {
   return (
     <div>
       <NavBar />  
       <ItemListContainer greeting = "Bienvenido a mi E-commerce"/> 
     </div>
   )
 }


export default App

