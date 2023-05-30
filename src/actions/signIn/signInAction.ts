import httpPublicService from '../../services/httpPublicService';


export class AuthService{
   
   private static _instance: AuthService;

   public static get service():AuthService{
     if(!AuthService._instance){
      AuthService._instance = new AuthService();
     }
    return AuthService._instance;
   }
   
   public async signIn(objReq:any):Promise<{status:number, data:{email:string, name:string, password:string, token:string, id:string }}> {
      
     let response = await httpPublicService.get("/data.json", objReq);
    
      if(response.data.email === objReq.email && response.data.password === objReq.password){
          localStorage.setItem("token", response.data.token);
      }

      return response
   }

   public async validToken(dispatch:any, objReq:any = {}):Promise<{status:number, data:{email:string, name:string, password:string, token:string, id:string }}> {
      
      let response = await httpPublicService.get("/data.json", objReq);
     
      const hasToken = localStorage.getItem("token");

      if(hasToken){
         dispatch(
            { type:"LOGIN",
              payload:{
               userId:response.data.id,
               fullName:response.data.name,
               email:response.data.email 
             }
            }
         );
      }
 
       return response
    }

}
