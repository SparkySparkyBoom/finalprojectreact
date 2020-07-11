import React,{useState, useEffect} from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap'
import Login from './Login'

const address=[];
 function Home(props) {
    
    const [name,setName]=useState(" ");
    const [benar,setStatus]=useState(false);
    const [headingText,setHeading] = useState(" ");
    
    const [alamat,setAlamat]=useState(" ");
    
    
    function handleChange(event) {
        setName(event.target.value);
    }
    function berbuat(event) {
        setHeading(name);
        setStatus(true);
        setAlamat(alamat)
        address.push(alamat);
        console.log(address);
        event.preventDefault();
    }
    function simpanAlamat(event) {
        setAlamat(event.target.value);        
    }
    return (
        <div className="App">           
            <header className="App-header">
                <h1>Selamat datang di restoran OrangArap</h1> 
                <p>Suhu ruang saat ini adalah {props.suhu}<sup>o</sup>C</p>
            </header>            
            <div>
                <p style={{fontSize:'30px'}}>Silahkan masukkan data diri anda sebelum memesan makanan di restoran kami</p>
            </div>
            <Row>
            <Col>            
            <Form className="container" onSubmit={berbuat}>
                <Form.Group controlId="formGroupEmail">
                <Form.Label>Nama :</Form.Label>
                <Form.Control type="text" placeholder="Nama" onChange={handleChange} value={name}/>
                    </Form.Group>                
                <Form.Group controlId="formGroupPassword">
                <Form.Label>No. Telp :</Form.Label>
               <Form.Control type="tel" placeholder="Telp" />
                    </Form.Group>
                <Form.Label>Alamat :</Form.Label>
                <Form.Group controlId="exampleForm.ControlTextarea1">               
               <Form.Control as="textarea" rows="4" placeholder="Alamat" onChange={simpanAlamat} value={alamat}/>
                    </Form.Group>
               <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </Col>
            <Col>
                {benar ? <Login name={headingText}/>:null }
            </Col>
            </Row>
        </div>
    )
}

export {Home}