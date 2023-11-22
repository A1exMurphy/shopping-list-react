

function RemoveItemFromList = (id, retrieveList) {
    const delete () => {
    // e.preventDefault()
    axios.delete('/shoppinglist') 

        .then(response => {

        })
    

        return(
            <button onClick={removeItemFromList}>remove</button>
        )
}}


export default RemoveItemFromList