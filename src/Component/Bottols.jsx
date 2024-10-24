import { useEffect, useState } from "react";
import Bottol from './bottol/Bottol';
import './bottols.css'
import { addToLS, getStoredCart } from "../utilitis/localStorage";
import Cart from "../Cart/Cart";


const Bottols = () => {
    const [bottols, setBottols] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBottols(data))
    },[])


    useEffect(() =>{
        console.log('bottols.length');
        // if(bottols.length > 0) same condition
         if(bottols.length > 0){
            const storeCart = getStoredCart();
            const saveCart = [];
            console.log(storeCart)
            for(const id of storeCart){
                console.log(id);
                const bottol = bottols.find(bottol => bottol.id === id);
                if(bottol){

                    saveCart.push(bottol);

                }

                setCart(saveCart);
            }
         }

    },[bottols])




    const handleAddtoCart = (bottol) => {
       console.log(bottol);
       const newCart = [...cart, bottol]
       setCart(newCart);
       addToLS(bottol.id);

    }

 
    
    return (

        // <h4>Total Bottols: {bottols.length}</h4>
        
        <div>

        <h4>Total Bottols: {bottols.length}</h4>

        <Cart cart={cart}></Cart>
        


                <div className="bottols">


                        

                {
                bottols.map(bottol => <Bottol handleAddtoCart={() =>handleAddtoCart(bottol)} key={bottol.id} bottol={bottol}></Bottol>)
                }


                </div>
        </div>


    );
};

export default Bottols;