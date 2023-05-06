import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'antd';
import Tables from '../components/Table';
const Home = () => {
    const client = axios.create({
        baseURL: "https://northwind.vercel.app/api/products"
    });
    const [data, setdata] = useState([])
    useEffect(()=>{
        client.get("").then((res)=>{
           console.log(res.data)
            setdata(res.data);
        });
        console.log(data)
    },[])
  return (
    <Tables data ={data}/>
  )
}

export default Home