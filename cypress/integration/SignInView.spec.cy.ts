describe("mi primera prueba", () => {

  beforeEach(() => {
    cy.visit("http://localhost:2500/monoma")
  })

 it("form login", () =>{
    
  cy.contains("Monoma");

  cy.get("button").should('contain', "Login");   
 })

 it("form login inpust", () =>{
    
  cy.get('[placeholder="Email"]');
 })

})