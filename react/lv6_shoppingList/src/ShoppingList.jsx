import { useState } from "react";
import ShoppingListForm from './ShoppingListForm'
function ShoppingList(){
    const [items, setItems] = useState([
        {id:1, product: "Banana", quantity: 8},
        {id:2, product: "Apple", quantity: 2},
        {id:3, product: "Guave", quantity: 1},
    ]);

    const addItem =(item)=>{
        setItems((currItem)=>{
            return [...currItem, {...item, id:9}];
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