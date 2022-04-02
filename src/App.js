
import 'flowbite';
import List  from './Components/List';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  const itemlist = [{name:'ES6',souslist:['Introduction to ES6',
                                          'Variable Declaration',
                                          'Template literals and Ternary operator',
                                          'Array functions',
                                          'JS Module',
                                          'DEstructuring',
                                          'Spearing',
                                          'Conclusion',
                                          'CheckPoint',
                                          'One2one',
                                        'Workshop']},
                    {name:'REACT JS',souslist:['Intro',
                                                'Installation & environnement',
                                                'Getiing Started',
                                                'Virtuel Dom',
                                                'Conclusion',
                                                'Chekpoint',
                                                'One2One'
                                              ]},
                    {name:'JSX',souslist:['JSX & HTML',
                                           'Variables',
                                           'Attributes : style',
                                           'Attributes : style file',
                                           'Attributes : SRC',
                                           'DEstructuring',
                                           'Spearing',
                                           'Conclusion',
                                           'CheckPoint',
                                           'One2one',
                                            'Workshop']},
                    {name:'React Components',souslist:[]},
                    {name:'React Props',souslist:[]},
                    {name:'React State',souslist:[]},
                    {name:'React Hooks',souslist:[]},
                    {name:'React Router',souslist:[]},
                    {name:'Redux',souslist:[]},
                    {name:'API',souslist:[]},
                    {name:'Lab Phase Web 2',souslist:[]}]

  return (
    <ChakraProvider>
    <div className="App">
      <List items={itemlist}/>
    </div>
   </ChakraProvider>
  );
}

export default App;
