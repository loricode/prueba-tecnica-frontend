import httpSureService from '../../services/httpSureService';
import { Pokemon, Pagination } from '../../interfaces/pokemon.interface';

export class PokemonService{
   
   private static _instance: PokemonService;

   public static get service():PokemonService{
     if(!PokemonService._instance){
       PokemonService._instance = new PokemonService();
     }
    return PokemonService._instance;
   }
   
   public async getListPokemon( path="limit=10&offset=0" ):Promise<{status:number, data:Pagination}> {
      return await httpSureService.get(`/pokemon/?${path}`, {});
   }

   
   public async getPokemon(id:string):Promise<{data:Pokemon}> {
      return await httpSureService.get(`/pokemon/${id}`, {});
    }


}