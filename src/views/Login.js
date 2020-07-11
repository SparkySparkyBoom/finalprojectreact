import React from "react";
import { Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
function Login(props) {
    let history=useHistory();
    return(
      <div className="container">
        <h1>Halo {props.name}!!</h1>
        <p style={{textAlign:"justify"}}>Data anda sudah terekam dalam sistem kami. Silahkan memesan makanan dengan mengklik tombol di bawah ini kemudian klik "Mulai Pesan Makanan!!".</p>
        <Button onClick={()=> history.push(window.scroll(0,0,'smooth'))}>Klik </Button>
      </div>
    )
  }
export default Login;