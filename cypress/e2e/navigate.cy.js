import { routes } from "./routes/routes.js";

describe("Given a user enters isayart.netlify.app", () => {
  describe("When it clicks on 'La Mona Lisa del Prado'", () => {
    it("Should go to la  Mona Lisa Page", () => {
      cy.visit(routes.url);

      cy.contains("La Mona Lisa del Prado").click();

      cy.url().should("include", routes.monalisa);
    });
  });
});

describe("Given a user enters isayart.netlify.app", () => {
  describe("When it clicks on 'Añadir'", () => {
    it("Should go to the form page", () => {
      cy.visit(routes.url);

      cy.contains("Añadir").click();

      cy.url().should("include", routes.form);
    });
  });
});

describe("Given a user enters isayart.netlify.app/create", () => {
  describe("When it clicks on 'Galeria'", () => {
    it("Should go to  the gallery page", () => {
      cy.visit(`${routes.url}${routes.form}`);

      cy.contains("Galería").click();

      cy.url().should("include", routes.artworks);
    });
  });
});
