import React from 'react';
import Makanan from '../component/Menu'
import Daftar from '../component/Daftar'
import ProductsContainer from '../SisiProduk'
import CartContainer from '../SisiDaftarBelanja'


 function Daftarmakan() {
    return (
        <div className="App">
            <header className="App-header">
                Daftar makanan yang tersedia                
            </header>
            <ProductsContainer/>
            <CartContainer/>
       
        </div>
    )
}
export default Daftarmakan;