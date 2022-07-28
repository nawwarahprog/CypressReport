/// <reference types="cypress" />

describe('Cura Make Appointment', function () {

    it('Visit URL Cura App', function() {
        cy.visit('https://katalon-demo-cura.herokuapp.com/') // Visit URL
    })
    
    it('Login Make Appointment', function () {
    
        cy.get('#menu-toggle > .fa').click()
        cy.get('.sidebar-nav > :nth-child(4) > a').click()
      
        cy.get('#txt-username').should('be.visible').should('be.enabled').type('John Doe')
        cy.get('#txt-password').should('be.visible').should('be.enabled').type('ThisIsNotAPassword')
    
        cy.get('#btn-login').click() 
    
    })
    
        //Dropdown
    it('Make Appointment', function () {
    
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center').should('have.value','Hongkong CURA Healthcare Center')
    
        //Checkboxes
        cy.get('#chk_hospotal_readmission').check().should('be.checked').and('have.value','Yes')
    
        //Radio button
        cy.get('input[value=Medicare]').should('be.visible').should('be.checked').click()             // visibility checked status
        cy.get('input[value=Medicaid]').should('be.visible').should('not.be.checked').click()  // visibility checked status
    
        //Select Date
        cy.get('#txt_visit_date').type('17/6/2022')
    
        //Text Area
        cy.get('#txt_comment').click({force:true})
        cy.get('#txt_comment').type('I will attend the Appointment on 17/6/2022')
    
        cy.get('#btn-book-appointment').click()
    
    })
    
    it('Verify New Appointment', function() {
    
        cy.get('h2').contains('Appointment Confirmation')
        cy.get('#comment').contains('I will attend the Appointment on 17/6/2022')
    
    })
    
    })