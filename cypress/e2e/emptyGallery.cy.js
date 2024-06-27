import { routes } from "./routes/routes.js";

describe("Given a user enters isayart.netlify.app/artworks", () => {
  describe("When the apiRest responds with an empty list of artworks", () => {
    it("Should show 'No hay obras en la Galería'", () => {
      const expectedText = "No hay obras en la Galería";

      cy.visit(routes.url + routes.artworks);

      cy.intercept("GET", routes.apiRest + routes.artworks, {
        statusCode: 200,
        body: { artworks: [] },
      });

      cy.get("#root").should("include.text", expectedText);
    });
  });
});
