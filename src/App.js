import React from 'react';

import Test from './Components/Test.js';
import Form from './Components/Form.js';
import Profile from './Profile/Profile.js';
import Adress from './Profile/Adress.js';
import FullName from './Profile/FullName.js';




const App=()=> {

  return (
    // <ChakraProvider>
    //   <div className="App">
    //     <Menu />    
    //     <Contact/>
      
      
    //   </div>  
      
    // </ChakraProvider>
    <>
   
    
         <Profile/>
         <FullName/>
         <Adress />
        
   
    </>
  )
}

export default App;
