import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { PokemonService } from '../../../actions/pokeApi/pokeApiAction';

//components
import { BtnBack } from '../../../components/buttons/BtnBack';

//interface
import { Pokemon } from '../../../interfaces/pokemon.interface';

export const DetailView = () => {

  const location = useLocation();

  const { id } = location.state !== undefined ? location.state : '';

  const [ state, setState ] = useState<Pokemon>({
    sprites:{back_default:""},
    name:"",
    weight:0,
    types:[],
    abilities:[]
  });

  useEffect(() => {
    getOnePokemn();
  },[]);

  const getOnePokemn = async () => {
     
    const response = await PokemonService.service.getPokemon(id);
    
    const { abilities, name, sprites, types, weight } = response.data;

    setState({
      name, 
      weight,
      abilities,
      sprites, 
      types
    });

  };

  return (
    <>
     <div className='flex justify-center items-center'>
       <div className='flex flex-col font-bold  items-center rounded m-2 w-6/12 bg-white p-2 shadow-md'>
          <div>
            <h3 className='text-2xl'>{state.name}</h3>
          </div>

           <div>
            <img className='w-48 h-48' defaultValue={"foto"} src={state.sprites.back_default} alt="..." />
           </div>

           <div>
            <h3 className='text-2xl'>
              Peso: {state.weight}
            </h3>
          </div>

          <div>
            Tipos:&nbsp; 
          {state.types.map(item => (
            item.type.name +' '  
          ))}
          </div>

          <div>
            Abilidades:&nbsp; 
          {state.abilities.map(item => (
            item.ability.name +' '  
          ))}
          </div>

          <BtnBack/>

      </div> 
     </div>
      
    </>
  )
}
