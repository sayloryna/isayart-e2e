import { routes } from "./routes/routes.js";

describe("Given a user enters isayart.netlify.app/create", () => {
  describe("When it fills the form with la joven de la perla' and submits ", () => {
    const laJovendeLaPerla = {
      title: "La joven de la Perla",
      author: "Johanes Vermeer",
      location: "La Haya, Holanda",
      size: {
        height: 47,
        width: 40,
      },
      medium: "Óleo sobre tela",
      artworkUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
      description:
        "La joven de la perla , también conocida como Muchacha con turbante, es una de las obras maestras del pintor neerlandés Johannes Vermeer realizada entre 1665 y 1667. Como el nombre indica, utiliza un pendiente de perla como punto focal.",
      year: 1667,
    };

    const fillForm = (artwork) => {
      cy.get("#title").click().type(artwork.title);
      cy.get("#author").click().type(artwork.author);
      cy.get("#location").click().type(artwork.location);
      cy.get("#height").click().type(artwork.size.height);
      cy.get("#width").click().type(artwork.size.width);
      cy.get("#medium").click().type(artwork.medium);
      cy.get("#artworkUrl").click().type(artwork.artworkUrl);
      cy.get("#description").click().type(artwork.description);
      cy.get("#year").click().clear().type(artwork.year);

      cy.get(".form__button").click();
    };

    it("it should show 'Obra añadida' and go to '/artworks'", () => {
      const expectedMessage = "Obra añadida";

      cy.visit(routes.url + routes.form);

      fillForm(laJovendeLaPerla);

      cy.get("#root").should("include.text", expectedMessage);

      cy.url().should("include", routes.artworks);
    });
  });
});
describe("Given a user enters isayart.netlify.app", () => {
  describe("When it clicks on 'la joven de la perla' favourite button", () => {
    it("should change the favourite icon to eliminar de favoritos'", () => {
      cy.visit(routes.url);

      cy.get(`[aria-label="añadir a favoritos"]`)
        .last()
        .click()
        .should("include", /eliminar de favoritos/i);
    });
  });
});

describe("Given a user enters isayart.netlify.app", () => {
  describe("When it clicks on 'la joven de la perla' delete button", () => {
    it("it should show 'Obra eliminada'", () => {
      const expectedMessage = "Obra Eliminada";

      cy.visit(routes.url);

      cy.get(".delete-button").last().click();

      cy.get("#root").should("include.text", expectedMessage);
    });
  });
});
