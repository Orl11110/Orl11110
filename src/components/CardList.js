import React from 'react';
import Card from './Card';

const CardList = (promise)=>{
    const cardsArray = promise.robots.map((user, id) =>{
        return(
        <Card 
            key = {id} 
            id={promise.robots[id].id} 
            name = {promise.robots[id].name} 
            email={promise.robots[id].email}
        />
        );
    })
    return(
    <div>
        {cardsArray}
    </div>
    );
}

export default CardList;