import { useState, useEffect } from 'react'

import { PokemonService } from '../../actions/pokeApi/pokeApiAction';

//interface
import { Pokemon } from '../../interfaces/pokemon.interface';

let openModal = false;
let setOpenModal:React.Dispatch<React.SetStateAction<boolean>> = () => { };

interface Props {
    idPokemon:string
}

export const ModalDetail = ({ idPokemon }:Props) => {
    
   const [ stateModal, setStateModal ] = useState(false);
   openModal = stateModal;
   setOpenModal = setStateModal;

   const [ state, setState ] = useState<Pokemon>({
    sprites:{back_default:""},
    name:"",
    weight:0,
    types:[],
    abilities:[]
  });

  useEffect(() => {
   
   if(openModal){
       getOnePokemn();
   }

  }, [stateModal]);

  const getOnePokemn = async () => {
     
    const response = await PokemonService.service.getPokemon(idPokemon);
    
    const { abilities, name, sprites, types, weight } = response.data;

    setState({
      name, 
      weight,
      abilities,
      sprites, 
      types
    });

  };

  const clearState = () => {
   
    setState({
        sprites:{back_default:""},
        name:"",
        weight:0,
        types:[],
        abilities:[]
    });
    modalDetailOpen();
  }


  return (
   <div id="defaultModal" 
   tabIndex={-1} aria-hidden="false"
    className={`fixed top-10 z-50 ${openModal ? 'block' : 'hidden' } w-full p-4 overflow-x-hidden overflow-y-auto inset-x-1/4 h-[calc(100%-1rem)] max-h-full`}>
    
    <div className="relative  w-full max-w-2xl max-h-full">
      
        <div className="relative bg-white rounded-lg shadow-md">
          
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                    Detalle Pokemon
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg onClick={clearState}  aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            
            <div className="p-6 space-y-6">
            <div className='flex justify-center items-center'>
       <div className='flex flex-col font-bold  items-center  m-2 w-6/12 bg-white p-2 '>
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


      </div> 
     </div>
            </div>
         
           
        </div>
    </div>
</div>
  )
}

export const modalDetailOpen = () => {
   setOpenModal(!openModal);
}