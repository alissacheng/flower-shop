import React from 'react';

function Flower ({name, colors, scent, addToBouquet}) {

    const submitFlowers = (event) => {
        event.preventDefault();
        const flowerColors = [];
       
        //Record which colors were selected
        colors.forEach((color)=> {
            const elementId = color + "-" + name
            if(document.getElementById(elementId).checked) {
                flowerColors.push(color)
            }
        })

        //if at least one option has been checked then proceed to add to bouquet
        if(flowerColors.length>0){
            addToBouquet(name, flowerColors);
        }
    }

    return(
    <div className='flower-container__item'>
        <h3>{name}</h3>
        <p>Scent: {scent}</p>
        <form className="color-optionss">
            {colors.map((color)=>{
                return (
                    <div key={color+"-"+name}>
                        <input type="checkbox" id={color+"-"+name} name={name + "-colors"} value={color+"-"+name} />
                        <label htmlFor={color+"-"+name}>{color}</label>
                    </div>
                )
            })}
            <button onClick={submitFlowers}>Add to Bouquet +</button>
        </form>
    </div>
    );
};

export default Flower;