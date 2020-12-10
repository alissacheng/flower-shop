import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import FlowerShop from './components/FlowerShop';

function App() {

  const [bouquetId, setBouquetId] = useState(null);
  const [bouquetName, setBouquetName] = useState(null);
  const [bouquets, setBouquets] = useState()

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    };

  useEffect(()=> { 
    const fetchBouquets = async () => {
        const response = await fetch('http://localhost:5000/bouquets/', {
            method:'GET',
            headers,
        });
        const data = await response.json();
        setBouquets(data);
    }

      fetchBouquets();
  }, [bouquetId, bouquets]);

  const createBouquet = async(event) => {
    event.preventDefault();
    
    const bouquetName = document.getElementById("bouquet-name").value;
    //check if bouquet name already exists
    let duplicate = false;
    bouquets.forEach(item => {
      if (item.name === bouquetName){
        duplicate = true;
      }
    })

    if(!duplicate || bouquetName !== '' || bouquetName !== ' '){
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
      document.getElementById("new-bouquet").style.display = "none";
    }else if(bouquetName === '' || bouquetName === ' '){
      alert("Please enter a valid name for your bouquet");
    }else{
      alert("You already have a bouquet with that name. Please name it something unique.")
    }
  };

  const nameBouquet = () => {
    document.getElementById("new-bouquet").style.display = "block";
  }

  const listBouquets = () => {
    document.getElementById("bouquet-list").style.display = "block";
  }

  const selectBouquet = (bouquet) => {
    setBouquetId(bouquet._id);
    setBouquetName(bouquet.name);
    document.getElementById("bouquet-list").style.display = "none";
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
            <div>
              <Link to="/add-flowers">Click here to add flowers to your {bouquetName} bouquet!</Link>
            </div>
            : null}
            <div className="bouquet-options">
              <button onClick={nameBouquet}>Create a new bouquet</button> <p>OR</p> <button onClick={listBouquets}>Select a previous bouquet to edit!</button>
            </div>
            <form className="new-bouquet" id="new-bouquet" onSubmit={createBouquet}>
              <label htmlFor="bouquet-name">Bouquet Name:</label>
              <input type="text" id="bouquet-name" name="bouquet-name"/>
              <input type="submit" value="Create bouquet!"/>
            </form>
            <div className="bouquet-list" id="bouquet-list">
              <h3>Your Bouquets:</h3>
              {bouquets ? bouquets.map(item=> {
                return(
                  
                    <Link to="/add-flowers"><button onClick={()=>{selectBouquet(item)}}>{item.name}</button></Link>
                )
              })
              : null}
            </div>
          </section>
        {bouquetId ?
        <Route path="/add-flowers" render={()=> <FlowerShop bouquetId={bouquetId} bouquetName={bouquetName} />}/> :
        null}
        </main>
      </div>
    </Router>
  );
}

export default App;
