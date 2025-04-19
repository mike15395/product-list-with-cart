import './App.css'
import Cart from './components/Cart'
import Dessert from './components/Dessert'

function App() {

  return (
    <main className='flex flex-row gap-8 m-[88px]'>
      <Dessert />
      <Cart />
    </main>
  )
}

export default App
