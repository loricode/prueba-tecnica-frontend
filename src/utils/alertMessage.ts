import Swal from 'sweetalert2';

export const alertMessage = (message:string, typeAction: "error" | "success" = 'error', title:string = "por favor revisar") => {
   Swal.fire(
      title,
      message,
      typeAction
   )
}