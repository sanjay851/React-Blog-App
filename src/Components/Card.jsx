import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
 import { store } from './Data'
 import { Link } from 'react-router-dom'

function Card() {
 const {id} = useParams();
 const [data] =useContext(store);
 const add = data.filter(data => data.id === parseInt(id))
 const story = data.filter((data) => { return data.type === "Story" })

 return(
    <>
      {
        add.map((e,index) =>(
            <div key={index} className='info' >
            <div className='whole-card'>
            <h1>{e.title}</h1>
            <div > <img src={e.image} alt='' className='id-card'/></div>
            <div className='id-para'> 
             <p>{e.about}</p>
             <p>{e.about}</p>
             </div>
            <div className='footer'> <h4 className='date'>{e.category}-{e.Date}</h4></div>
            </div>  
            </div>
        ))
      }
      <footer>
      <div className='art-head'><h1 className='heading'>Stories</h1></div>
      <div className='latest'>
        {
          story.map((e, id) => (
            <Link className='start' to={`/${e.category}/${e.id}`}>
            <div className='art' key={id}>
              <div>
                <img src={e.image} alt='' className='art-img' />
              </div>
              <div className='art-para'>
                <h5 className='start'>{e.title}</h5>
                <p className='art-id-para'>{e.about}</p>
                <h5 className='date'>{e.category}/{e.Date}</h5>
              </div>
            </div>
            </Link>
            
          ))

        }

      </div>
      </footer>
    </>
 )
}

export default Card;