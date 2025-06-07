import './App.css'
import Cart from './components/Cart'
import Dessert from './components/Dessert'
import Confirm from './components/Confirm'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

function App() {

 const {isOpen} = useContext(CartContext)

  return (
    <main className='lg:flex flex-row m-[88px] md:flex flex-col sm:flex flex-col gap-8 mx-15 my-2'>
        <Dessert />
        <Cart />
       {isOpen && <Confirm />}
    </main>
  )
}

export default App
