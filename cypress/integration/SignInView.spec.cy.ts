describe("mi primera prueba", () => {

 it("sub prueba", () =>{

  cy.visit("http://localhost:2500/monoma")
    cy.contains("Monoma")
   
 })

})