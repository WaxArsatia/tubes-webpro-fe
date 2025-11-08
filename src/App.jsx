import Navbar from './assets/components/Navbar';
import MiniCard from './assets/components/MiniCard';
import Card from './assets/components/Card';

function App() {
  const menu = [
    {
      key: 1,
      image: '/assets/menu_kopi-hitam.jpeg',
      header: 'Americano',
      description: 'Beli 2 Gratis 1',
      price: 20_000,
    },
    {
      key: 2,
      image: '/assets/menu_latte.jpeg',
      header: 'Latte',
      description: 'Beli 100 Gratis 1',
      price: 25_000,
    },
  ];

  return (
    <div className="w-md max-w-md mx-auto">
      <Navbar />
      {menu.map((item) => (
        <MiniCard
          key={item.key}
          images={item.image}
          header={item.header}
          desc={item.description}
          price={item.price}
        />
      ))}

      {menu.map((item) => (
        <Card
          key={item.key}
          image={item.image}
          header={item.header}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;
