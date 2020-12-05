import React from 'react';

const Flower = ({name, colors, scent, addToBouquet}) => (
    <div className='flower-container__item'>
        <h3>{name}</h3>
        <p>Scent: {scent}</p>
        <form className="color-optionss" onSubmit={(event)=> {
            event.preventDefault();
            const flowerColors = []
            let flowerCount = 0
            //if at least one option has been checked then proceed
            colors.forEach((color)=> {
                const elementId = color + "-" + name
                if(document.getElementById(elementId).checked) {
                    flowerCount += 1
                    flowerColors.push(color)
                }
            })

            if(flowerCount>1){
                console.log(flowerColors);
                addToBouquet(name, flowerColors)
            }
        }}>
            {colors.map((color)=>{
                return (
                    <div key={color+"-"+name}>
                        <input type="checkbox" id={color+"-"+name} name={name + "-colors"} value={color+"-"+name} />
                        <label htmlFor={color+"-"+name}>{color}</label>
                    </div>
                )
            })}
            <input type="submit" value="Add to Bouquet +"/>
        </form>
    </div>
)

export default Flower;