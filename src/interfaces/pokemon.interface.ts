export interface TypePokemon{
   slot:number,
   type:{ name:string, url:string }
 }
 
 export interface AbilityPokemon{
   slot:number,
   ability:{ name:string, url:string }
 }
 
 export interface Pokemon {
   sprites:{ back_default:string },
   name:string,
   weight:number,
   types: Array<TypePokemon>,
   abilities: Array<AbilityPokemon>
 }

 export interface ObjPokemon {
  id:string,
  name:string,
  url:string
}


 export interface Pagination {
  count:number,
  next: string,
  previous: null | string,
  results: Array<ObjPokemon>,
}


 