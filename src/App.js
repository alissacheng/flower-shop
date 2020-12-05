import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import FlowerShop from './components/FlowerShop';

function App() {

  const [bouquetId, setBouquetId] = useState(null);
  const [bouquetName, setBouquetName] = useState(null);

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    };

  const createBouquet = async(event) => {
    event.preventDefault();
    
      const bouquetName = document.getElementById("bouquet-name").value;
      //check if bouquet name already exists
  
      console.log(bouquetName);
      const body = {
        name: bouquetName
      }
      const response = await fetch('http://localhost:5000/bouquets', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
  
      const data = await response.json();
      console.log("data", data);
      setBouquetName(bouquetName);
      setBouquetId(data._id)
  };

  const nameBouquet = () => {
    document.getElementById("new-bouquet").style.display = "block";
  }

  return (
    <Router>
      <div className="App">
        <header className='header'>
          <h1>Alissa's Flower Shop</h1>
        </header>
        <main>
          <section>
            {bouquetId ? 
            <Link to="/add-flowers">Add flowers to your {bouquetName} bouquet!</Link> : 
            <div className="bouquet-options">
              <button onClick={nameBouquet}>Create a new bouquet</button> <p>OR</p> <button>Select a previous bouquet to edit!</button>
            </div>}
            <form className="new-bouquet" id="new-bouquet" onSubmit={createBouquet}>
              <label htmlFor="bouquet-name">Bouquet Name:</label>
              <input type="text" id="bouquet-name" name="bouquet-name"/>
              <input type="submit" value="Create bouquet!"/>
            </form>
          </section>
        </main>
        <Route path="/add-flowers" render={()=> <FlowerShop bouquetId={bouquetId} bouquetName={bouquetName} />}/>
      </div>
    </Router>
  );
}

export default App;
