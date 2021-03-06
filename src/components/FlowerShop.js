import React, { useEffect, useState } from 'react';
import Flower from './Flower';
import BouquetItems from './BouquetItems';
import ColorFilter from './ColorFilter';

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    };

function FlowerShop( { bouquetId, bouquetName, deleteBouquet } ) {
    const [flowers, setFlowers] = useState([]);
    const [bouquetItems, setBouquetItems] = useState([]);
    const [colors, setColors] = useState([]);

    const fetchFlowers = async () => {
        const response = await fetch('http://localhost:5000/flowers/', {
            method:'GET',
            headers: headers,
        });
        const data = await response.json();
        setFlowers(data);
    }

    useEffect(()=> {
        fetchFlowers();

        const fetchColors = async () => {
            const response = await fetch('http://localhost:5000/colors/', {
                method:'GET',
                headers: headers,
            });
            const data = await response.json();
            setColors(data);
        }

        fetchColors();
    }, [])

    useEffect(()=> { 
        const fetchBouquetItems = async () => {
            const response = await fetch(`http://localhost:5000/bouquets/${bouquetId}`, {
                method:'GET',
                headers: headers,
            });

            if(!response.ok){
                console.log("Cannot fetch items. Check if a bouquet has been selected.")
            }else {
                const data = await response.json();
                setBouquetItems(data);
            }
        }

        fetchBouquetItems();
    }, [bouquetItems, bouquetId]);

    const addToBouquet = (flowerName, flowerColors) => {   
        if(bouquetId){
            flowerColors.forEach(async(color)=> {
                const body = {
                    flower: flowerName,
                    color,
                }

                let duplicate = false;
                bouquetItems.forEach(item => {
                    if(item.color === color && item.flower === flowerName){
                        duplicate = true;
                    }
                })

                if(!duplicate){
                    //add to bouquet
                    const response = await fetch(`http://localhost:5000/bouquets/${bouquetId}`, {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify(body),
                    })

                    const bouquetData = await response.json();
                    setBouquetItems(bouquetData.items);
                }
            })
        }else{
            console.log("select a bouquet first")
        }
    }

    const toggleItems = (e) => {
        e.preventDefault();
        const bouquetItems = document.querySelector(".bouquet-items")
        bouquetItems.classList.toggle("active");
        e.target.classList.toggle("active");
    }

    const removeItem = async (flower, color) => {
        if(bouquetId){
            const body = {
                flower,
                color,
            }
            const response = await fetch(`http://localhost:5000/bouquets/${bouquetId}/remove`, {
                method: 'PATCH',
                headers,
                body: JSON.stringify(body),
            })
            const bouquetData = await response.json();
            setBouquetItems(bouquetData.items);

        }else{
            console.log("select a bouquet first")
        }
    }

    return (
        <section className="flower-shop">
            <h2>Select flowers to add to your {bouquetName} bouquet</h2>
            <button className="delete-bouquet" onClick={()=> {deleteBouquet(bouquetId)}}>Delete your {bouquetName} bouquet</button>
            <div className="cart">
                <button className="toggle-bouquet-items" onClick={toggleItems}>{bouquetName} items</button>
                <BouquetItems bouquetItems={bouquetItems} removeItem={removeItem}/>
            </div>
            <ColorFilter colors={colors} headers={headers} setFlowers={setFlowers} fetchFlowers={fetchFlowers}/>
            <div className="flower-container">
                {flowers.map(flower => {
                    return <Flower key={flower._id} {...flower} addToBouquet={addToBouquet}/>
                })}
            </div>
        </section>
    );
}

export default FlowerShop;
