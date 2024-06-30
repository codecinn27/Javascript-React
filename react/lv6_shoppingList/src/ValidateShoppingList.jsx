import { useState } from "react";
import ShoppingListForm from './ValidateShoppingListForm'
import { v4 as uuidv4 } from 'uuid';
function ShoppingList(){
    const [items, setItems] = useState([
        {id:uuidv4(), product: "Banana", quantity: 8},
        {id:uuidv4(), product: "Apple", quantity: 2},
        {id:uuidv4(), product: "Guave", quantity: 1},
    ]);

    const addItem =(item)=>{
        setItems((currItem)=>{
            return [...currItem, {...item, id:uuidv4()}];
        });
    };

    return(
        <div>
            <h1>Shopping List</h1>
            <ol>
                {items.map((e)=>(
                    <li key={e.id}>
                        {e.product} - {e.quantity}
                    </li>
                ))}
            </ol>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}

export default ShoppingList;