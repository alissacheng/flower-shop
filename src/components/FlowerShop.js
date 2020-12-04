import React, { useEffect, useState, useCallback } from 'react';
import Post from './Post';

function FlowerShop() {
    const [flowers, setFlowers] = useState([]);

    const refresh = useCallback(async () => {
        try {
        const response = await fetch('/flowers');
        const flowers = await response.json();
        console.log(posts)
        if (!response.ok) {
            throw new Error('could not get flowers');
        }
        setFlowers(flowers);
        } catch (e) {
        console.log(e);
        }
    }, []);

    useEffect(() => {
        refresh();
    }, [refresh]);

    return (
        <div>
        <div className='header'>
            <h1>Alissa's Flower Shop</h1>
        </div>

        {flowers.map(flower => {
            // console.log(posts);
            return <Post key={post._id} {...post} />;
        })}
        </div>
    );
}

export default FlowerShop;
