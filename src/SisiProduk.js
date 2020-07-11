import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from './actions'
import { getVisibleProducts } from './reducers/produk'
import ProductItem from './component/Jenisproduk'
import ProductsList from './component/Daftarproduk'

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
  </ProductsList>
)
const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
