import React , { useContext } from 'react';
import {store} from './Data';
 function Hollywood() {
  const [info] = useContext(store)
  const [demo] = useContext(store)
  const [demo1] = useContext(store)
  return (
    <div>
      
     {
      info.map(data => <img src={data.Image } alt=''/>)
     }
     {
      demo.map(data =><h1>{data.Title}</h1>)
     }
      {
      demo1.map(data =><h1>{data.about}</h1>)
     }
     
    </div>
  )
}
export default Hollywood; 
