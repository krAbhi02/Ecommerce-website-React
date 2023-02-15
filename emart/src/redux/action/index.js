//to add item or product to cart
export const addCart = (product) => {
    return{
        type:"ADDITEM",
        payload: product
    }
}

export const delCart =(product) =>{
    return{
        type:"DELITEM",
        payload: product
    }
}
