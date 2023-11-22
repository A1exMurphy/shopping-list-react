import React from 'react';
import { useState} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';



function App() {
    let [shoppingList, showShoppingList] = useState([]);

    let [itemName, setName] = useState(``);
    let [itemQuantity, setQuantity] = useState(``);
    let [itemUnit, setUnit] = useState(``)

    const createListItem = (e) => {
        e.preventDefault()
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
                </form>
            </main>
        </div>
    );
}

export default App;
