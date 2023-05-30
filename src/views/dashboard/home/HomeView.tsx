import { useState, useEffect } from 'react';
import tw from "twin.macro";

//components
import { CardPokemon } from '../../../components/cards/CardPokemon';

//actions
import { PokemonService } from '../../../actions/pokeApi/pokeApiAction';

//components
import { ModalDetail, modalDetailOpen } from '../../../components/modals/ModalDetail';

//interface
import { Pagination } from '../../../interfaces/pokemon.interface';

const URL_IMAGE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"

export const StyledContainer = tw.div`
  flex justify-center flex-wrap p-2`
  ;

export const HomeView = () => {
;
  const [counter, setCounter] = useState(1);

  const [idPokemon, setIdPokemon] = useState("");

  const [state, setState] = useState<Pagination>({
    count: 0,
    next: "",
    results: [],
    previous: null,
  });

  

  useEffect(() => {
    
    const listPokemon = async () => {

      const response = await PokemonService.service.getListPokemon();
     
      changeState(response);
    
    };
    
    listPokemon();
  }, []);

 
  const changeState = (response:{ data:Pagination }) => {

    const results = response.data.results.map(item => {

      const arraySplit = item.url.split("/");

      return { ...item, id: arraySplit[6] }
    })

    setState({
      previous: response.data.previous,
      count: response.data.count,
      next:  response.data.next,
      results
    });

  }

  /* esta implementado tambien para una pagina para ver el detalle del pokemon
   puede utilizar esta funcion para ir a esa pagina
  const detailPokemon = (id: string = "") => {

    navigate("../detail", { state: { id } })
  };*/

  const paginationNext = async() => {
    
    setCounter(prev => prev + 1);

    const { next } = state;

    const pathArray = next.split('?')

    const path = pathArray[pathArray.length-1];

    const response = await PokemonService.service.getListPokemon(path);

    changeState(response);

  }

  const paginationPrevious = async() => {
    
    setCounter(prev => prev - 1);

    const { previous } = state;

    const pathArray:string[] = previous === null ? "?limit=10&offset=0".split('?') : previous.split('?')

    const path = pathArray[pathArray.length-1];

    const response = await PokemonService.service.getListPokemon(path);

    changeState(response);

  }

  const quantityPokemon = () => {
    
    const result = state.count / (state.results.length === 0 ? 1 : state.results.length)

    return parseInt(result.toString());
  } 


  return (
    <>
      <StyledContainer>
        {
          state.results.map((item) => (
            <CardPokemon key={item.id}>
              <div className='p-2' 
              onClick={ () => {
                setIdPokemon(item.id);
                modalDetailOpen()
                }}>
                <div className='flex justify-center'>
                  <img
                    className='w-8/12 h-48'
                    defaultValue={"foto"}
                    src={`${URL_IMAGE}${item.id}.png`} alt="..." />
                </div>
                <div className='text-start text-3xl ml-2 font-bold text-lime-800 mb-4'>
                  {item.name}
                </div>
              </div>
            </CardPokemon>
          ))
        }

      </StyledContainer>
      {state.results.length > 0 ?
        <div className='flex justify-center items-center mb-2'>
          <button onClick={paginationPrevious}  disabled={state.previous === null} className='m-1 text-lg w-9 h-9  rounded-full bg-white'> {"<"} </button>
          {counter +" de "+ quantityPokemon()}
          <button onClick={paginationNext} className='m-1 text-lg w-9 h-9 rounded-full bg-white'>
            {">"}
          </button>
        </div>
      : null}
      <ModalDetail idPokemon={idPokemon} />
    </>
  )
}
