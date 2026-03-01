import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce(
        (acc, each) => acc + each.price * each.quantity,
        0,
      )
      return (
        <div className="cart-summary-main-bg-container">
          <div className="summary-card-container">
            <h1>
              Order Total:{' '}
              <span className="total-price-color">Rs {totalPrice}</span>
            </h1>
            <p>{cartList.length} items in cart</p>
            <button>Checkout</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
