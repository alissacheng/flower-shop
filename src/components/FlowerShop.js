import React, { useEffect, useState } from 'react';
import Flower from './Flower';

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    };

function FlowerShop( { bouquetId, bouquetName } ) {
    const [flowers, setFlowers] = useState([]);
    const [bouquetItems, setBouquetItems] = useState([])


    // const [items, setItems] = useState([]);

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
    }, []);

    const addToBouquet = (flowerName, flowerColors) => {

        console.log("Add to cart", flowerName, flowerColors);
        //check for bouquet ID
        //create the item
        //add item to bouquet
        if(bouquetId){
            flowerColors.forEach(async(color)=> {
                const body = {
                    flower: flowerName,
                    color,
                }

                //add to bouquet
                const response = await fetch(`http://localhost:5000/bouquets/${bouquetId}`, {
                    method: 'PATCH',
                    headers,
                    body: JSON.stringify(body),
                })

                const bouquetData = await response.json();
                setBouquetItems(bouquetData.items)
                console.log("bouquetItems data", bouquetData.items);
                console.log("bouquet items", bouquetItems);
            })
        }else{
            console.log("select a bouquet first")
        }
    }

    return (
        <div>
            <h2>Select a flower to add to your {bouquetName} bouquet</h2>
            <div className="flower-container">
                {flowers.map(flower => {
                    return <Flower key={flower._id} {...flower} addToBouquet={addToBouquet}/>
                })}
            </div>
            <div className="bouquet-items">
                <h3>{bouquetName} items:</h3>
                {/* {bouquetItems.map((item, index)=> {
                    return <p>{index + 1}. {item.color} {item.flower}</p>
                })} */}
            </div>
        </div>
    );
}

export default FlowerShop;
