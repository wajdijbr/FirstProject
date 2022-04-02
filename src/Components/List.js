import React from 'react'
import NavItem from './NavItem';
import {List as ChakraList} from '@chakra-ui/react'

export default function List(props) {

  return (
    // <div>
    //   {props.items.map((a,i)=>{
    //     return (
    //       <NavItem key={i} title={a.name} point={a.souslist}/>
    //     )
    //   })}  
    // </div>
    <ChakraList spacing={3}>
      
       {props.items.map((a,i)=>{
         return (
           <NavItem key={i} title={a.name} point={a.souslist}/>
        )
       })}  
    
    
      
    </ChakraList>
  )
}
