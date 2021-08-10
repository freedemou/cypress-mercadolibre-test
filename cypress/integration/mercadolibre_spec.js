
describe('Mi Primera Prueba: Mercado Libre', () => {

  it('Seleccionar menú categoria, y luego seleccionar la categoria construcción', () => {

    cy.visit(Cypress.env('domain'))
      .wait(4000)
      .get("ul.nav-menu-list").find(".nav-menu-item").contains("Categorías").click()
      .wait(Cypress.env('waitTime'))
      .parent()
      .find(".nav-categs")
      .contains("Construcción")
      .click({force: true})
      .wait(Cypress.env('waitTime'))

  })

  it('Seleccinar la subcategoria Motores', () => {

    cy.get(".category-list__item").contains("Motores").click()
        .wait(Cypress.env('waitTime'))

  })

  it('Seleccionar el segundo item de la lista', () => {

    cy.get("ol.ui-search-layout").find("li.ui-search-layout__item").eq(3)
      .find(".ui-search-item__group--title > a")
      .click()
      .wait(Cypress.env('waitTime'))

  });

  it('Seleccionar botón comprar ahora', () => {

    cy.get("form.ui-pdp-actions").find("button[type='submit']")
      .click()
      .wait(Cypress.env('waitTime'))

  });

  it('Seleccionar la opción ya tengo una cuenta', () => {

    cy.get("span.andes-button__content").contains("Ya tengo cuenta")
      .click()
      .wait(Cypress.env('waitTime'))

  })

  it('Ingresar correo electrónico existente', () => {

    cy.get("#user_id").type(Cypress.env('email'))
      .wait(Cypress.env('waitTime'))

    cy.get('.andes-button--loud > .andes-button__content')
      .click()
      .wait(Cypress.env('waitTime'))

  })

})