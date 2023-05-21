import { useState, useEffect } from 'react'

import { PokemonService } from '../../actions/pokeApi/pokeApiAction';

//components
import { Dialog } from './Dialog';
import { DialogHerder } from './DialogHeader';

//interface
import { Pokemon } from '../../interfaces/pokemon.interface';

let openModal = false;
let setOpenModal: React.Dispatch<React.SetStateAction<boolean>> = () => { };

interface Props {
  idPokemon: string
}

export const ModalDetail = ({ idPokemon }: Props) => {

  const [stateModal, setStateModal] = useState(false);
  openModal = stateModal;
  setOpenModal = setStateModal;

  const [state, setState] = useState<Pokemon>({
    sprites: { back_default: "" },
    name: "",
    weight: 0,
    types: [],
    abilities: []
  });

  useEffect(() => {

    if (openModal) {
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
      sprites: { back_default: "" },
      name: "",
      weight: 0,
      types: [],
      abilities: []
    });
    modalDetailOpen();
  }


  return (
    <Dialog openModal={openModal}>
      <div className="relative w-full max-w-2xl max-h-full">

        <div className="relative bg-white rounded-lg shadow-md">

          <DialogHerder modalTitle='Detalle Pokemon' clearState={clearState} />

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
                    item.type.name + ' '
                  ))}
                </div>

                <div>
                  Abilidades:&nbsp;
                  {state.abilities.map(item => (
                    item.ability.name + ' '
                  ))}
                </div>


              </div>
            </div>
          </div>


        </div>
      </div>
    </Dialog>
  )
}

export const modalDetailOpen = () => {
  setOpenModal(!openModal);
}