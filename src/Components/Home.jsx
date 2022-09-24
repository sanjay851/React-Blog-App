import React, { useContext }  from 'react'
import {store} from './Data';
//import { Link } from 'react-router-dom'
import img1 from '../Components/Image/Forest.jpg';
import img2 from '../Components/Image/LION.jpg';
import img3 from '../Components/Image/City.jpg';
import './AllPages.css';

 function Home() {
  const [data] = useContext(store)
  const item = data.filter((data) => { return data.category === "Technology" })
  return (
    <>
    <div id='homeimg'>
    <div className='img1'>
      <img src={img1} alt=''/>
    </div>
    <div className='img2'>
      <img src={img2} alt=''/>
    </div>
    <div className='img3'>
      <img src={img3} alt=''/>
      </div>
      </div>
      {/*--------------------- The Latest ------------*/}
     <div id='latest-container'>
      <h1 className='latestheading'>The Latest</h1>
      <hr className='hr1'/>
      </div>
      <div className='latestimage'>
      {
      item.map(data => <img src={data.Image } alt=''/>)
     }
      {
      item.map(data =><h1 className='title'>{data.Title}</h1>)
     }
     </div>
     <h1>Ended here</h1>
    </>
    
  )
}
export default Home;