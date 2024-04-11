describe('Test that', () => {
  it('can log in on the visa website', () => {
    //  Visit Site
    cy.visit('/');
    // Log In
    cy.get('#user_email').type(Cypress.env('username'));
    cy.get('#user_password').type(Cypress.env('password'));
    cy.get('.icheckbox').click();
    cy.get(':nth-child(6) > .button').click();

    // Get current appointment date
    let CurrentExtractedDate;
    cy.get('.consular-appt').invoke('text').then(appointmentString => {
      const currentAppointmentDate = new Date(appointmentString);
      cy.log(appointmentString);
      const dateRegex = /(\d{1,2}\s(?:January|February|March|April|May|June|July|August|September|October|November|December),\s\d{4})/;

      const match = appointmentString.match(dateRegex);

      if (match && match.length > 1) {
        CurrentExtractedDate = match[1];
        cy.log(CurrentExtractedDate);
      } else {
        cy.log("Date not found in the given string.");
      }
    })

    // Reschedule
    cy.get('li > .button').click();
    cy.contains('Reschedule Appointment').click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Don't fail test on uncaught exceptions
      return false;
    });
    cy.get('.accordion-content').contains('Reschedule Appointment').click();

    // const checkDatesAvailable = () => {
    //   cy.get("body").then($body => {
    //     if ($body.find('#consulate_date_time_not_available > small').length > 0) {  
    //       cy.log('There are no available appointments at the selected location. Please try again later.');
    //       cy.wait(500);
    //       cy.reload();
    //       checkDatesAvailable();
    //     }
    //   });
    // }
    // // Start the process of clicking next until the date is found
    // checkDatesAvailable();

    // Check Next Available date
    cy.get('#appointments_consulate_appointment_date').click().then(availableDates => {          
      const clickNextUntilDateFound = () => {
        cy.get("body").then($body => {
          if ($body.find('td.undefined[data-handler="selectDay"]').length > 0) {  
            cy.get('td.undefined[data-handler="selectDay"]').first().click(); 
            cy.log('Date found');
          } else {
            cy.get('.ui-datepicker-next > .ui-icon').click();
            cy.wait(50);
            clickNextUntilDateFound();
          }
        });
      }
      // Start the process of clicking next until the date is found
      clickNextUntilDateFound();
    })

    // Compare the dates
    cy.get('#appointments_consulate_appointment_date').invoke('val').then(NewAppointmentDateValue => {
      
      // Log new appointment date
      const NewAppointmentDate = new Date(NewAppointmentDateValue.trim());
      cy.log(NewAppointmentDateValue);

      // Log current extracted date
      const extractedDateObject = new Date(CurrentExtractedDate);
      cy.log(CurrentExtractedDate);

      // Compare the two dates
      if (NewAppointmentDate < extractedDateObject) {
          cy.log(CurrentExtractedDate);
          cy.log(NewAppointmentDateValue);
          cy.log('Appointment date is earlier than the extracted date');
          cy.get('#appointments_consulate_appointment_time').click();
          cy.get('#appointments_submit').click();
      } else if (NewAppointmentDate > extractedDateObject) {
          cy.log(CurrentExtractedDate);
          cy.log(NewAppointmentDateValue);
          cy.log('Appointment date is later than the extracted date');
      } else {
          cy.log(CurrentExtractedDate);
          cy.log(NewAppointmentDateValue);
          cy.log('Appointment date is the same as the extracted date');
      }
  });
  });
});
