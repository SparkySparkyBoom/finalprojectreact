import React from "react";
import {Button} from 'react-bootstrap'

function Daftar(props) {
  return (
    <div className="term" id="pricing">
        <span><img style={{width:300,height:200}} src={props.img}/></span>
        <div>{props.makan}</div>
        <div>Stok:{'     '}{props.stok}</div>
        <div>Harga:{props.harga} </div>
        {/* <Button variant="info">Tambah ke keranjang</Button>{' '} */}
    </div>    
  );
}
export default Daftar;
