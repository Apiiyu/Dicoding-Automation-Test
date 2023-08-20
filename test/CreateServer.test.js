const createServerModule = require("../src/CreateServer");
const MathBasic = require("../src/MathBasic");
const FigureCalculatorModule = require("../src/FigureCalculator");

describe("A HTTP Server", () => {
  describe("A GET method with endpoint /add", () => {
    it("Should return a response with status code of 200 and the correct value of operation add", async () => {
      // Arrange
      const firstValue = 10;
      const secondValue = 5;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const server = createServerModule({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/add/${firstValue}/${secondValue}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toBe(15);
      expect(spyAdd).toHaveBeenCalledWith(firstValue, secondValue);
    });
  });

  describe("A GET method with endpoint /subtract", () => {
    it("Should return a response with status code of 200 and the correct value of operation subtract", async () => {
      // Arrange
      const firstValue = 10;
      const secondValue = 5;
      const spySubtract = jest.spyOn(MathBasic, "subtract");
      const server = createServerModule({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/subtract/${firstValue}/${secondValue}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toBe(5);
      expect(spySubtract).toHaveBeenCalledWith(firstValue, secondValue);
    });
  });

  describe("A GET method with endpoint /multiply", () => {
    it("Should return a response with status code of 200 and the correct value of operation multiply", async () => {
      // Arrange
      const firstValue = 10;
      const secondValue = 5;
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const server = createServerModule({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/multiply/${firstValue}/${secondValue}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toBe(50);
      expect(spyMultiply).toHaveBeenCalledWith(firstValue, secondValue);
    });
  });

  describe("A GET method with endpoint /divide", () => {
    it("Should return a response with status code of 200 and the correct value of operation divide", async () => {
      // Arrange
      const firstValue = 10;
      const secondValue = 5;
      const spyDivide = jest.spyOn(MathBasic, "divide");
      const server = createServerModule({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/divide/${firstValue}/${secondValue}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toBe(2);
      expect(spyDivide).toHaveBeenCalledWith(firstValue, secondValue);
    });
  });

  describe("A GET method with endpoint /calculate-rectangle-perimeter", () => {
    it("Should return a response with status code of 200 and the correct value of operation calculateRectanglePerimeter", async () => {
      // Arrange
      const length = 20;
      const width = 30;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculatorModule(MathBasic);
      const server = createServerModule({
        mathBasic: MathBasic,
        figureCalculator,
      });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/calculate-rectangle-perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toBe(100);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 50);
    });
  });

  describe("A GET method with endpoint /calculate-rectangle-area", () => {
    it("Should return a response with status code of 200 and the correct value of operation calculateRectangleArea", async () => {
      // Arrange
      const length = 20;
      const width = 30;
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculatorModule(MathBasic);
      const server = createServerModule({
        mathBasic: MathBasic,
        figureCalculator,
      });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/calculate-rectangle-area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toBe(600);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe("A GET method with endpoint /calculate-triangle-perimeter", () => {
    it("Should return a response with status code of 200 and the correct value of operation calculateTrianglePerimeter", async () => {
      // Arrange
      const sideA = 20;
      const sideB = 30;
      const base = 40;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const figureCalculator = new FigureCalculatorModule(MathBasic);
      const server = createServerModule({
        mathBasic: MathBasic,
        figureCalculator,
      });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/calculate-triangle-perimeter/${sideA}/${sideB}/${base}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toBe(90);
      expect(spyAdd).toHaveBeenCalledWith(sideA, sideB);
      expect(spyAdd).toHaveBeenCalledWith(50, base);
    });
  });

  describe("A GET method with endpoint /calculate-triangle-area", () => {
    it("Should return a response with status code of 200 and the correct value of operation calculateTriangleArea", async () => {
      // Arrange
      const base = 20;
      const height = 30;
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const spyDivide = jest.spyOn(MathBasic, "divide");
      const figureCalculator = new FigureCalculatorModule(MathBasic);
      const server = createServerModule({
        mathBasic: MathBasic,
        figureCalculator,
      });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/calculate-triangle-area/${base}/${height}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toBe(300);
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith(600, 2);
    });
  });
});
