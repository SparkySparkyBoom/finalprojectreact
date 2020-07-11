import React from "react";

function Daftarr(props) {
    return (
      <div className="term" id="pricing">
          <div>{props.makan}  Jumlah:{'     '}{props.stok}  Harga:{props.harga} </div>         
          {/* <Button variant="info">Tambah ke keranjang</Button>{' '} */}
     </div>    
    );
  }
  export default Daftarr;