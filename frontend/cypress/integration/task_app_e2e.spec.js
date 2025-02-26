describe('Task Management App E2E Tests', () => {
    beforeEach(() => {
      // Visit the application before each test
      cy.visit('http://localhost:3000');
    });
  
    it('should load the application and display recent tasks', () => {
      // Check if the tasks list is visible
      cy.get('h2').should('contain', 'Most Recent Tasks');
    });
  
    it('should allow the user to add a new task', () => {
      // Fill out the add task form
      cy.get('input[placeholder="Title"]').type('New Task');
      cy.get('textarea[placeholder="Description"]').type('Task Description');
      cy.get('button').contains('Add').click();
  
      // Check if the new task is displayed in the task list
      cy.get('h3').should('contain', 'New Task');
    });
  
    it('should allow the user to mark a task as done', () => {
      // Add a new task
      cy.get('input[placeholder="Title"]').type('Task to Complete');
      cy.get('textarea[placeholder="Description"]').type('Complete this task');
      cy.get('button').contains('Add').click();
  
      // Mark the task as done
      cy.get('button').contains('Done').click();
  
      // Check if the task is removed from the recent tasks list
      cy.get('h3').should('not.contain', 'Task to Complete');
    });
  });
  