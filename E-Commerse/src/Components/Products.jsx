import React from 'react'
import UserContext from '../contect/UserContext';
import { useContext,useState } from 'react';
const productsList=[
    {
        img: "https://image.made-in-china.com/2f0j00OkhWgfudbiVr/Vintage-Style-Stright-Hole-Beggar-Fancy-Jeans-for-Men.webp",
        category:"Beggar Jeans",
        price:700,
        id:1
    },
    {
        img: "https://i.pinimg.com/736x/67/67/10/676710b35d82dcee2b04d79c6704d4cf.jpg",
        category:"Baggy Fit Jeans",
        price:900,
        id:2
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPY5Ulaw6TEU-1j9sSCWKJkmDmxg9nu5KWA&s",
        category:"Cargo Jeans",
        price:500,
        id:3
    },

];

const Item = ({element}) => {
  const {category, price,id } = element;
  
  const [m, setM] = useState(category)
  const [p,setP]  = useState(price)
  const [ids,setIds] = useState(id)
  const [ quantity, setQuantity] = useState(1);
  const {user,setUser} = useContext(UserContext)
  const displaydetails=()=>{
    let temp  = user.filter(item => item.ids === ids);
    if(temp.length == 0){
      setUser((prevUser) => [...prevUser, { m, p, ids,quantity }]);
    } else {
      const temp2 = user.map((item) => {
        if(ids === item.ids){
            item.quantity += 1;
        }
      
        return item;
        
      });
      setUser(temp2);
    }
   }
    return (
      <>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={element.img} className="img-fluid rounded-start" style={{height:"280px"}} alt="Cargo Jeans" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{element.category}</h5>
                  <h5 className="card-title">{element.price}</h5>
                  <h5 className="card-title">{element.id}</h5>
                  <p className="card-text">
                  LOOSE FIT WIDE LEG BAGGY CARGO RELAXED FIT JOGGERS TYPE SIX POCKET ICE BLUE HIGH RISE JEANS DENIM FOR MEN, BOYS AND GENTS, JEANS FOR MEN, JEANS FOR BOYS JEANS FOR GENTS, ICE BLUE JEANS FOR MEN.
                  </p>
                  <p style={{fontSize:"14px", color:"grey"}}><span style={{color:"black", fontSize:"24px", fontWeight:'bold', paddingRight:"10px"}}>₹{element.price}</span> ₹620 <span style={{color:'green',fontWeight:'bold'}}>5% off</span> onwards</p>
                  <button className='btn btn-success'onClick={displaydetails}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }

function Products() {
  return (
    <div>
         <h1>Product List</h1>
      {productsList.map((item) => (
        <div key={item.id}>
          <Item element={item} />
        </div>
      ))}
    </div>
  )
}

export default Products

