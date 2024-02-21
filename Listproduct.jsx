import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import crossicon from '../../assets/cross_icon.png'
const Listproduct = () => {
    const  [allproducts,setAllProducts]=useState([]);
const fetchInfo= async()=>{
  await fetch('http://localhost:8001/allproducts')
  .then((res)=>res.json())
  .then((data)=>{setAllProducts(data)});
} 
 useEffect(()=>{
  fetchInfo();
 },[])

 const remove_product=async(id)=>{
  await fetch('http://localhost:8001/removeproduct',{
    method:'POST',
    headers:{
       Accept:'application/json',
       'Content-Type':'application/json',
    },
    body:JSON.stringify({id:id})
  })
  await fetchInfo();
 }

  return (
    <div className='list-product'>
    <h1>All Products List</h1>
    <div className="listproduct-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Old Price</p>
      <p>New Price</p>
      <p>Category</p>
      <p>Remove</p>
    </div>
    <div className="list-product-allproducts">
     <hr />
      {allproducts.map((product,index)=>{
        return <> <div key={index}className="listproduct-format-main listproduct-format">
            <img className="listproduct-product-icon" src={product.image} alt="" />
            <p>{product.name}</p>
            <p>Rs.{product.old_price}</p>
            <p>Rs.{product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} className='list-product-remove-icon' src={crossicon} alt="" />
      
        </div>
        <hr/>
        </>

      })}
    </div>
    </div>
  )
}

export default Listproduct