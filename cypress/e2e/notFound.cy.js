import { routes } from "./routes/routes.js";

describe("Given a user that visits isayart.netlify.app/blasblas", () => {
  it("Should show 'La página a la que intentas acceder no existe'", () => {
    const expectedText = "La página a la que intentas acceder no existe";

    cy.visit(routes.url + "/blasblas");

    cy.get("#root").should("include.text", expectedText);
  });
});
