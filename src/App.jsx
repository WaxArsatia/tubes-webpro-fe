import { useState } from 'react'
import Navbar from './assets/components/header/Navbar'
import MiniCard from './assets/components/mini_card/MiniCard'
import Card from './assets/components/card/Card'

function App() {
  const menu = [
    {
      key: 1,
      image : "../src/assets/images/Menu/menu_kopi-hitam.jpeg",
      header: "Americano",
      description: "Beli 2 Gratis 1",
      price: 20_000
    },
    {
      key: 2,
      image : "../src/assets/images/Menu/menu_latte.jpeg",
      header: "Latte",
      description: "Beli 100 Gratis 1",
      price: 25_000
    }
  ]
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-md mx-auto'>
      <Navbar/>
      {menu.map((item)=>(
        <MiniCard key={item.key} images={item.image} header={item.header} desc={item.description} price={item.price}/>
      ))}

      {menu.map((item)=>(
        <Card key={item.key} image={item.image} header={item.header} price={item.price}/>
      ))}
    </div>
  )
}

export default App
