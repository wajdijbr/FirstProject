import React, {useState} from 'react'
import {
    List,
    ListItem,
    ListIcon,
   
  } from '@chakra-ui/react'


  import {TriangleDownIcon} from'@chakra-ui/icons'



function NavItem(props) {
    const [open, setOpen] = useState(false)
  
    const click = () => {
        setOpen(!open)
    }

  return (
    <ListItem onClick={click} cursor='pointer' userSelect='none'>
        <ListIcon as={TriangleDownIcon} color='gray.400' /> {props.title}
        {open && (
            <List>
                {props.point.map(p => <ListItem>{p}</ListItem>)}
            </List>
        )}
    </ListItem>
  )
}

export default NavItem
