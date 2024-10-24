import PropTypes from 'prop-types';
import './bottol.css'
const bottol = ({bottol, handleAddtoCart}) => {

    const {name, price, img} = bottol;

    return (
        <div className="bottol">
            <h3>Bottol: {name}</h3>
            <img src= {img} alt=""/>
            <h4>Price: ${price}</h4>
            <button onClick={handleAddtoCart}>Add to Cart</button>
        </div>
    );
};

bottol.propTypes = {
    cart: PropTypes.array.isRequired
 }

export default bottol;