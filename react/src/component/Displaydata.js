import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Displaydata({data}) {
    // const [state, setstate] = useState([]);
    // const url="http://localhost:4000";

    // useEffect(() => {
    // getdata();
    // }, [state]);

    // const getdata=()=>{
    //     axios.get(url+'/data').then((result)=>{
    //         const data=result.data;
    //         setstate(data);
    //     })
    // }

    const renderlist=()=>{
        return (data.map((s)=>{
         return(
         <ol>
           { console.log(s)};
            <li>{s.prn}</li>
            <li>{s.pwd}</li>
         </ol>
         )
        
        }))
    }
    
  return (
    <div>

        {renderlist()}
        

      
    </div>
  )
}

export default Displaydata
