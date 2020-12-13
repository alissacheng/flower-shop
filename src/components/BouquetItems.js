import React from 'react';

function BouquetItems({bouquetItems, removeItem}){
    const firstLetterUpper = (word) => {
        const wordArray = word.split('')
        const wordLetter = wordArray.shift().toUpperCase()
        const wordName = wordLetter + wordArray.join('')
        return wordName;
    }

    const pluralWord = (word) => {
        let wordName = '';
        const wordArray = word.split('');

        if(wordArray[wordArray.length-1] === "s"){
            wordName = word;
        }else if(wordArray[wordArray.length-1] === "y"){
            wordArray.pop();
            wordName = wordArray.join('') + "ies";
        }else {
            wordName = word + "s";
        }

        return wordName;
    }
    return(
    <div className="bouquet-items">
        { bouquetItems.length > 0 ? bouquetItems.map((item, index)=> {
            const flowerName = pluralWord(item.flower)
            const colorName = firstLetterUpper(item.color)
            return (
                <div className="bouquet-items__one">
                    <button className="flex-center" onClick={()=> {removeItem(item.flower, item.color)}}><img src="./trash.png" alt="trash icon"/></button>
                    <p>{index + 1}. {colorName} {flowerName}</p>
                </div>
            )
        }) : <p>No flowers added yet!</p>}
    </div>
    )
}

export default BouquetItems;