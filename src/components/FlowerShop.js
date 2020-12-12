import React, { useEffect, useState } from 'react';
import Flower from './Flower';

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    };

function FlowerShop( { bouquetId, bouquetName } ) {
    const [flowers, setFlowers] = useState([]);
    const [bouquetItems, setBouquetItems] = useState([])

    useEffect(()=> { 
        const fetchFlowers = async () => {
            const response = await fetch('http://localhost:5000/flowers/', {
                method:'GET',
                headers: headers,
            });
            const data = await response.json();
            setFlowers(data);
        }
        fetchFlowers();

        const fetchBouquetItems = async () => {
            const response = await fetch(`http://localhost:5000/bouquets/${bouquetId}`, {
                method:'GET',
                headers: headers,
            });
            const data = await response.json();
            setBouquetItems(data);
        }

        fetchBouquetItems();
    }, [bouquetItems]);

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
            <button className="toggle-bouquet-items" onClick={toggleItems}>{bouquetName} items</button>
            <div className="bouquet-items">
                { bouquetItems.length > 0 ? bouquetItems.map((item, index)=> {
                    let flowerName = '';
                    const flowerArray = item.flower.split('')

                    if(flowerArray[flowerArray.length-1] === "s"){
                        flowerName = item.flower
                    }else if(flowerArray[flowerArray.length-1] === "y"){
                        flowerArray.pop()
                        flowerName = flowerArray.join('') + "ies";
                    }else {
                        flowerName = item.flower + "s" 
                    }
                    const colorArray = item.color.split('')
                    const colorLetter = colorArray.shift().toUpperCase()
                    const colorName = colorLetter + colorArray.join('')
                    return (
                        <div className="bouquet-items__one">
                            <button className="flex-center" onClick={()=> {removeItem(item.flower, item.color)}}><img src="./trash.png" alt="trash icon"/></button>
                            <p>{index + 1}. {colorName} {flowerName}</p>
                        </div>
                    )
                }) : <p>No flowers added yet!</p>}
            </div>
            <div className="flower-container">
                {flowers.map(flower => {
                    return <Flower key={flower._id} {...flower} addToBouquet={addToBouquet}/>
                })}
            </div>
        </section>
    );
}

export default FlowerShop;
