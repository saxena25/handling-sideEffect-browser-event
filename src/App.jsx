import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import { Products } from './components/Products';
import { MouseTracker } from './components/MouseTracker';


function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async() =>{
    try {
      let res = await axios.get('https://fakestoreapi.com/products');
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.log('Error in fetching data', error);
    }
  }

useEffect(()=>{
  fetchData();
},[])

  return (
    <>
      <MouseTracker />
      <h1>Fetching data using useEffect</h1>
      <div className="container">
        {users.map((products)=>(
          <Products products={products} key={products.id} />
        ))}
      </div>
    </>
  )
}

export default App
