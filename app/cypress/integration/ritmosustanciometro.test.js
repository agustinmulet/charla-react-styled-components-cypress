describe('Ritmosustanciometro', () => {
  it('debería devolver el ritmo y sustancia que le digamos', () => {
    cy.server();
    cy.route('GET', '/obtener-ritmosustancia', 100);

    cy.visit('http://localhost:3000/');

    cy.get("[data-test='nombre']").type('fcc{enter}');

    cy.contains('fcc: 100');
  });
});
