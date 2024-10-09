import image from '../assests/image.png'
import {Container} from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { useState } from 'react';
import Button from '../components/Input/button';

function App() {

  const [busca, setBusca] = useState('')
  const [respos, setRespos] = useState([])

  const handleSearchRepo = async () => {
    console.log('cli')
    try{
      const {data} = await api.get(`repos/${busca}`)

      if(data.id) {
        setRespos(prev => [...prev, data])
      }
      console.log(data)
    }catch (error) {
      console.log(error)
    }
  }
  const handleRemove = (id) =>{
    const newRespos = respos.filter(repo => repo.id !== id);
    setRespos(newRespos);
  }
  
  return (
    <Container className="App">
       <img src={image} alt='aoba' width={72} height={72}/>
       <Input value={busca} onChange={(e)=> {setBusca(e.target.value)}}/>
       <Button  onClick={handleSearchRepo}/>
      {respos.map(repo=> <ItemRepo fullName={repo.full_name} name={repo.name} repoUrl={repo.clone_url} onRemove={() => handleRemove(repo.id)}/>)}
    </Container>
  );
}

export default App;
