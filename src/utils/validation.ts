import Swal from 'sweetalert2';
import { codeMessage } from '../config/language/codeMessage';

export const validateProperty = (listadoCamposRequeridos: any[], objetoCampos:any) => {
   let listErrors:any[] = [];
   //console.log(objetoCampos);
   const keysObjeto = Object.keys(objetoCampos);

   keysObjeto.forEach((llave) => {
       try {
           const valorCampo = objetoCampos[llave].toString().trim();
           const requerido = listadoCamposRequeridos.some((x:any) => x.code.toLowerCase() === llave.toLowerCase());
           if (requerido === true && (valorCampo === '')) {
               const codeError = listadoCamposRequeridos.find((x:any) => x.code.toLowerCase() === llave.toLowerCase()).codeError;
               console.log(codeError)
               listErrors.push(codeError);
           }
       } catch (e) { }        
   });

   if (listErrors.length > 0) {

      let cadena = ""

      listErrors.forEach(item => {
         const found = codeMessage.find(x => x.codigo === item)
         if(found){
            cadena = cadena + "<br/>" + found.mensaje
         }
      });

      Swal.fire(
         'Por favor revisar',
         cadena,
         'error'
      )

   }
   return listErrors.length === 0;
};

export const validateEmail = (emailField = "") => {
                
	//expresion regular
	var validEmail=  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	//email valido
	if(validEmail.test(emailField) ){
		return true;
	}
	
   return false;
	
} 