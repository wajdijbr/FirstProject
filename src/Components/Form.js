import { useState, useEffect} from "react";
import axios from "axios";
import data from './data.js';
import './Form.css'

const Form = () =>{

    const [d,setData]=useState([]);
    useEffect(async () =>{

        try{
                    let res = await axios.get('http://localhost:4500/data');
                         setData(res.data);
                     
        }catch(er){

                        console.log(er)

        } 

  
    })

    const ajouter=(e)=>{
        e.preventDefault();
        // console.log(e.target[0].value);
        let newObj = {
            id: d.length+1,
            name:e.target[0].value,
            age:e.target[1].value
        };

        // setData(d.concat([newObj]));
        // setData( [ ...d, newObj ] )

        // try{
        //       let res = await axios({
        //         method:"POST",
        //         url:"http://localhost:4500/data",
        //         data: newObj
        //     })
        // }catch(er){
        //     console.log(er);
        // }
          
    

    };
  
    return (
        <>
            <div>
                {d.map(e => {
                    return (
                        <div >
                            <li key={e.id}> {e.id}  {e.name}</li>

                        </div>
                    )
                })}
            </div>
            <form onSubmit={ajouter}>
                <input type='text' />
                <input type='text' />
                <input  type='submit' value='ajouter' />
            </form>

        </>

    )
};
export default Form;