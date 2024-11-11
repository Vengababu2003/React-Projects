
import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../contect/UserContext'
import "bootstrap/dist/css/bootstrap.css";

function TopLayer() {
  const [products,setProducts] = useState('')
  const {user,setUser} = useContext(UserContext)
  const handlesubmit=( )=>{
    setProducts('block')
      }
      const changeQuantity = (product, mode) => {
    
        const temp = user.map((item) => {
          if(product.ids === item.ids){
            if(mode === 'inc'){item.quantity += 1; 
            }
            
            else if (mode === 'dec' && item.quantity>1 ){
              item.quantity -= 1;
            }
              
    
          }
          return item;
        });
        setUser(temp);
      }
      

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand"  href="#"><img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGX5JSd64ewN074450xrI7A3MsD-oIwTu9Dw&s"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" className="spacenavbar-items-alignment" id="navbarNav">
          <ul class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
            <button   onClick={handlesubmit} type="button" class="btn btn-outline-success position-relative" >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16" className='icon'>
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span class="visually-hidden">New alerts</span>
              </span>
            </button>
          </ul>
          
        </div>
      </div>
    </nav>
    <div id='overlay' style={{display:products}} >
            <b style={{fontSize:"26px",color:"blue"}}>CART PRODUCTS</b> 
              
            {user.map((product, index) => (
                <div key={index}>
                  MODEL: {product.m} <br />
                  PRICE: {product.p*product.quantity} <br />
                  PRODUCT ID: {product.ids}
                  <div>
                    Quantity: {product.quantity}
                    <button onClick={() => changeQuantity(product, 'inc')}  style={{  backgroundColor: 'green' }}>count +</button>
                    <button onClick={() => changeQuantity(product, 'dec')}  style={{ backgroundColor: 'red',marginLeft: "10px" }}>count -</button>
                  </div> <hr />                
                </div>                
              ))}
            
          </div> 
    </div>
  )
}


  
export default TopLayer

