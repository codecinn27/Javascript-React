import { useState } from "react";
function ShoppingListForm( {addItem} ){
    const [formData, setFormData] = useState({ product: "", quantity: 0});
    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product)=>{
        if(product.length === 0){
            setProductIsValid(false);
        }else{
            setProductIsValid(true);
        }
    }

    const handleChange = (evt) =>{
        if(evt.target.name === "product"){
            validate(evt.target.value);
        }

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
        setFormData({product: "", quantity:0});
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Product is {formData.product} and quantity is : {formData.quantity}</h1>
            <label htmlFor="product">Product Name: </label>
            <input type="text" placeholder="product name" name="product" id="product" 
            onChange={handleChange}
            value={formData.product}
            />

            {!productIsValid && (
                <p style={{color: "red"}}>Product name cannot be empty</p>
            )}

            <label htmlFor="quantity">Product Quantity: </label>
            <input type="number" placeholder="1" name="quantity" id="quantity" 
            min="1" max="10"
            onChange={handleChange}
            value={formData.quantity}
            />
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;