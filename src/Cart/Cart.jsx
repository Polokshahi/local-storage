
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
                <h4>Add Cart: {cart.length}</h4>

                <div className="cart_image">
                    {
                        cart.map(bottol => <img key={bottol.id} src={bottol.img}></img>)
                    }
                </div>
       
            
        </div>
    );
};
     Cart.propTypes = {
        cart: PropTypes.array.isRequired
     }
export default Cart;