import { useState } from "react";
function ShoppingListForm( {addItem} ){
    const [formData, setFormData] = useState({ product: "", quantity: 0});
    const handleChange = (evt) =>{
        setFormData(currData =>{
            return{
                ...currData,[evt.target.name]: evt.target.value
            };
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Submitted');
        addItem(formData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Product is {formData.product} and quantity is : {formData.quantity}</h1>
            <label htmlFor="product">Product Name: </label>
            <input type="text" placeholder="product name" name="product" id="product" 
            onChange={handleChange}
            value={formData.product}
            />
            <label htmlFor="quantity">Product Quantity: </label>
            <input type="number" placeholder="1" name="quantity" id="quantity" 
            min="1" max="10"
            onChange={handleChange}
            value={formData.quantity}
            />
            <input type="submit" />
        </form>
    )
}

export default ShoppingListForm;