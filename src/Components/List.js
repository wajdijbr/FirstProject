import React from 'react'
import NavItem from './NavItem';

export default function List(props) {

  return (
    <div>
    {props.items.map((a,i)=>{
      return (
        <NavItem key={i} title={a.name} point={a.soulist}/>
      )
    })}  
    </div>
  )
}
