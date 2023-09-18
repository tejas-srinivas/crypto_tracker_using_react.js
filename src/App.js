import React, {useEffect, useState} from "react";
import axios from "axios";
import Coins from "./components/Coins";
import Navbar from "./Navbar";
import { Routes, Route } from 'react-router-dom'
import Coin from './routes/Coin'

function App() {
  const [coins,setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en'
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      //console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    }) 
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} key={coins.id}/>} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
