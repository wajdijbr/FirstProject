import React from 'react'
import './Contact.css';
import { Center, InputAddon, InputLeftElement } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Stack
  } from '@chakra-ui/react';
import { InputGroup } from 'react-bootstrap';



export default function Contact() {
  return (

    <div className="container-center-horizontal">
    <div className="frame-1screen">
      <img className="frame-1-1" src="background.png" />
            <form action='submit'>
               <Stack spacing={3}>
                        <FormControl>

                <FormLabel htmlFor='FirstName'>First Name</FormLabel>
                <InputGroup>

                <Input id='FirstName' type='FirstName' />
                </InputGroup>
                </FormControl>

                    <FormControl>
                    <FormLabel htmlFor='LastName'>Last Name</FormLabel>
                    <Input id='Last Name' type='Last Name' />
                    </FormControl>

                    <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>

              <FormControl>
                  <FormLabel htmlFor='Message'>Comment or Message</FormLabel>
                  <Input id='Message' type='Message' />
              </FormControl>
              <Button colorScheme='blue'>Button</Button>
              </Stack>


              </form>
       
      </div> </div>
  
      )
}
