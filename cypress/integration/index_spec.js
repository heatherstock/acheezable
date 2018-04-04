
describe('Title', function() {
  it('checks title is `Acheezable`', function() {
    cy.visit('http://localhost:3000')

    cy.get('title').contains('Acheezable')
  })
})

describe('Header', function() {
  it('checks header is `Acheezable`', function() {
    cy.get('h1').contains('Acheezable')
  })
})

describe('Dropdown options', function() {
  it('allows user to select an option for their goal', function() {
    cy.get('select#1')
    .select('goal 1').should('have.value', 'option-1')
  })

  it('renders text for each acheezement', function() {
    cy.get('#goal-1').contains('Acheezement 1')
  })
})

describe('Submit Button', function() {
  it('submits goal options', function() {
    cy.get('#submit-goals').click()
  })

  // it('posts a new route successfully', function() {
  //   cy.get('#submit-goals').click()
  //   cy.route('POST', '/')
  // })
})