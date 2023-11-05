import { useState } from 'react';
import './App.css';
import Product from './components/Product';

function App() {
  const [searchInput, setSearchInput] = useState('') 

  const products = [
    {
      name: 'Dell Laptops',
      origin: 'Laptops from Dell',
      status: false
    },
    {
      name: 'Dell PCs',
      origin: 'PCs from Dell',
      status: true
    },
    {
      name: 'HP Laptops',
      origin: 'Laptops from HP',
      status: false
    }
  ]
  const filteredProducts = products.filter(product => {
    const productName = product.name.toLowerCase()
    return productName.includes(searchInput.toLowerCase())
  })

  return (
    <div className="App">
      <input 
        type='text' 
        placeholder='Input text to search'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}/>
      <div className='products'>
        {filteredProducts.map((filteredProduct, index) => (
          <Product
            key={index}
            name={filteredProduct.name}
            origin={filteredProduct.origin}
            status={filteredProduct.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
