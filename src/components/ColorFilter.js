import React, { useState } from 'react';

function ColorFilter ({ colors, headers, setFlowers, fetchFlowers}){

    const [filterColors, setFilterColors] = useState([]);

    const applyFilter = async (e) => {
        e.preventDefault();
        //get all flowers
        const response = await fetch('http://localhost:5000/flowers/', {
            method:'GET',
            headers: headers,
        });
        const flowersData = await response.json();
        const filtered = [];
        const data = [];
        const newColors = [];

        //Collect filtered flower names according colors selected
        colors.forEach((color)=> {
            if(document.getElementById(color.name).checked) {
                filtered.push(color.flowers)
                newColors.push(color.name);
            }
        })

        setFilterColors(newColors);

        const filteredFlowers = [...new Set(filtered.flat(1))]
        flowersData.forEach(flower => {
            filteredFlowers.forEach(item=> {
                if(flower.name === item){
                    data.push(flower)
                }
            })
        })
        setFlowers(data);
    }

    const clearFilter = async (e) => {
        e.preventDefault();
        fetchFlowers();
        setFilterColors([]);
    }

    return(
        <form className="filter">
            <p>Filter by color:</p>
            <div className="color-filter">
                {colors.map((color)=>{
                    return (
                        <div key={color.name}>
                            <input type="checkbox" id={color.name} name="color-filters" value={color.name} />
                            <span className="swatch" id="swatch" color={color.name}></span>
                            <label htmlFor={color.name}>{color.name}</label>
                        </div>
                    )
                })}
            </div>
            <button onClick={applyFilter}>Apply</button>
            <button onClick={clearFilter}>X Clear All</button>
            {filterColors.length > 0 ?
                <div className="filters-applied">
                    <p>Filters applied: </p>
                    {filterColors.map((color)=> {
                        return <p key={color + "-filter"}>{color}</p>
                    })}
                </div>
                : null}
        </form>
    )
}

export default ColorFilter;