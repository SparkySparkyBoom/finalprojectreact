import React from 'react'
import Daftar from './Daftar'
import {Button} from 'react-bootstrap'
const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Daftar
        key={product.id}
        makan={product.makan}
        img={product.img}
        harga={product.harga}
        stok={product.stok}
        />
    <Button
      variant="info"
      onClick={onAddToCartClicked}
      disabled={product.stok > 0 ? '' : 'disabled'}>
      {product.stok > 0 ? 'Tambah ke keranjang' : 'Barang habis'}
    </Button>
    <hr/>
  </div>
)

export default ProductItem;
