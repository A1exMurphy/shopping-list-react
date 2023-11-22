import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../Header/Header.jsx'
import './App.css';



function App() {
    let [shoppingList, setShoppingList] = useState([]);

    let [itemName, setName] = useState(``);
    let [itemQuantity, setQuantity] = useState(``);
    let [itemUnit, setUnit] = useState(``)

    //intiate GET to display shopping list on load
    useEffect(() => {
        retrieveList()
    }, []);


    const retrieveList = () => {
        axios.get('/shoppinglist') 
            .then(response => {
                // console.log(response.data)
                setShoppingList(response.data)
        })
        .catch(err => {
            alert(`error getting shopping list from db`)
        })
    }
    const createListItem = (e) => {
        e.preventDefault()
        axios.post('/shoppinglist', {
            Name: itemName, Quantity: itemQuantity, Unit: itemUnit})
            .then(response => {
                setName('');
                setQuantity('');
                setUnit('');

                    //rerender the shopping list after update
                    retrieveList();
            })
            .catch(err => {
                alert(`error getting item inputs`);
            })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <form onSubmit={createListItem}>
                    <input
                        value={itemName}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        value={itemQuantity}
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <input
                        value={itemUnit}
                        placeholder="Unit"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    <button>Add</button>
                </form>
                <ul>
                    {shoppingList.map(item => (
                     <li key={item.id}>
                        {item.Name} {item.Quantity} {item.Unit}
                     </li>  
                    ) 
                    )}
                    
                </ul>
            </main>
        </div>
    );
}

export default App;
