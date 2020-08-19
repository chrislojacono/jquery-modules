import { makeCartModal, showCartItems, chargeIt } from "./cartModal.js"
import { cartDOM } from "./cartDOM.js";
import { setCart } from './../helpers/data/cartData.js'



const makeCart = () =>{
    makeCartModal();
    cartDOM();
    $('#charge-it').click(() => {
        const ccNum = $('#credit-card').val();
        chargeIt(ccNum);
      })
  
      showCartItems();


}
const addToCart = (array, index) => {
    const cartButton = $(`#cart-add-${index}`);
  
    cartButton.on('click', () => {
      setCart(array[index]);
      makeCart();
    })
  }

  export { addToCart, makeCart}