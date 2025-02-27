describe('Task List E2E Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');

    // ✅ Wait for API request to complete before testing
    cy.intercept('GET', '**/api/v1/tasks*').as('getTasks');
    cy.wait('@getTasks');
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
  
    // ✅ Wait until the "Done" button is gone
    cy.contains('Done', { timeout: 5000 }).should('not.exist');
  });
  
  
  
});
  
