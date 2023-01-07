
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Displaydata from './Displaydata';

function Signup() {

  
    const [obj,setobj]=useState({prn:"",pwd:"",cpwd:""});
    const [state, setstate] = useState([]);

    const url="http://localhost:4000"

    useEffect(() => {
        getdata();
        }, [])
       
    
        const getdata=()=>{
            axios.get(url+'/data').then((result)=>{
                const data=result.data;
                setstate(data);
            })

        }

const handlechange=(event)=>{
    const name=event.target.name
    const value=event.target.value

    setobj({...obj,[name]:value})
}
const Submitdata=()=>{

    axios.post(url+"/signup",obj).then((result)=>{
            const data=result.data;
            console.log(data);

        setobj({prn:"",pwd:"",cpwd:""})


           
        
    })
}



  return (
    <div>
        <h1>Login</h1>
        <form>
            <table>
            <tr>
                    <td>
                        Prn no.:
                    </td>
                    <td>
                        <input type="Number" name="prn" id="prn" value={obj.prn} onChange={handlechange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        pwd:
                    </td>
                    <td>
                        <input type="text" name="pwd" id="pwd`" value={obj.pwd} onChange={handlechange}/>
                    </td>
                </tr> 
                <tr>
                    <td>
                        cpwd.:
                    </td>
                    <td>
                        <input type="text" name="cpwd" id="cpwd" value={obj.cpwd} onChange={handlechange} />
                    </td>
                </tr>
                 
            <tr>
                <td><button type='button' onClick={Submitdata}>Submit</button></td>
                {/* <td><button type='button' onClick={Resetdata}>Cancel</button></td> */}
          
            </tr>
            </table>
        </form>
        <Displaydata data={state}></Displaydata>
    </div>
  )
}

export default Signup

