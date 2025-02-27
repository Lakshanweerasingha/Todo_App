describe('Task List E2E Test', () => {
  beforeEach(() => {
    // Intercept the request and alias it as 'getTasks'
    cy.intercept('GET', 'http://localhost:8000/api/v1/tasks').as('getTasks');
    // Visit the page that triggers the GET request
    cy.visit('http://localhost:5173');
  });




  it('should add a new task', () => {
    cy.get('[data-testid="task-input"]', { timeout: 10000 })  // ✅ Now Cypress can find it
      .should('be.visible')
      .type('New Cypress Task');

    cy.get('[data-testid="add-task-button"]').click();
    cy.contains('New Cypress Task', { timeout: 10000 }).should('be.visible');
  });

  it('should mark a task as done', () => {
    cy.intercept('DELETE', '**/api/v1/tasks/*').as('deleteTask');
    
    cy.contains('Done')
      .should('be.visible')
      .first()
      .click();
  
    cy.wait('@deleteTask'); 
  
  });
  

});
  
