import React from 'react'
import Daftarr from './Daftarr'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
        <Daftarr
        key={product.id}
        makan={product.makan}
        // img={product.img}
        harga={product.harga}
        stok={product.stok}
        />     
    )
  ) : (
    <em>Daftar makanan yang akan dibeli</em>
  )
  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: Rp {total},-</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

export default Cart
