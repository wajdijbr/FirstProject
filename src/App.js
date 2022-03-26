
import 'flowbite';
import List  from './Components/List';

function App() {
  const itemlist = [{name:'ES6',souslist:['test']},
                    {name:'REACT JS',souslist:['test']},
                    {name:'JSX',souslist:[]},
                    {name:'React Components',souslist:[]},
                    {name:'React Props',souslist:[]},
                    {name:'React State',souslist:[]},
                    {name:'React Hooks',souslist:[]},
                    {name:'React Router',souslist:[]},
                    {name:'Redux',souslist:[]},
                    {name:'API',souslist:[]},
                    {name:'Lab Phase Web 2',souslist:[]}]

  return (
    <div className="App">
      <List items={itemlist}/>
    </div>
  );
}

export default App;
