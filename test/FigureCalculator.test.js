const FigureCalculatorModule = require("../src/FigureCalculator");
const MathBasicModule = require("../src/MathBasic");

describe("A FigureCalculator", () => {
  it("Should be contains calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, calculateTriangleArea functions", () => {
    const figureCalculator = new FigureCalculatorModule({});

    expect(figureCalculator).toHaveProperty("calculateRectanglePerimeter");
    expect(figureCalculator).toHaveProperty("calculateRectangleArea");
    expect(figureCalculator).toHaveProperty("calculateTrianglePerimeter");
    expect(figureCalculator).toHaveProperty("calculateTriangleArea");
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(
      Function
    );
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(
      Function
    );
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe("A calculateRectanglePerimeter function", () => {
    it("Should be throw an error when not given 2 parameters", () => {
      const figureCalculator = new FigureCalculatorModule({});

      expect(() =>
        figureCalculator.calculateRectanglePerimeter()
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(3)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(3, 4, 5)
      ).toThrowError();
    });

    it("Should be throw an error when given parameter is not a number", () => {
      const figureCalculator = new FigureCalculatorModule({});

      expect(() =>
        figureCalculator.calculateRectanglePerimeter("3", "4")
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(3, "4")
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectanglePerimeter(true, {})
      ).toThrowError();
    });

    it("Should return correct value based on rectangle perimeter formula", () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasicModule, "add");
      const spyMultiply = jest.spyOn(MathBasicModule, "multiply");
      const figureCalculator = new FigureCalculatorModule(MathBasicModule);

      // Action
      const result = figureCalculator.calculateRectanglePerimeter(
        length,
        width
      );

      // Assert
      expect(result).toBe(60); // 2 x (length + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30); // 2 * (length + width)
    });
  });

  describe("A calculateRectangleArea function", () => {
    it("Should be throw an error when not given 2 parameters", () => {
      const figureCalculator = new FigureCalculatorModule({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(3)).toThrowError();
      expect(() =>
        figureCalculator.calculateRectangleArea(3, 4, 5)
      ).toThrowError();
    });

    it("Should be throw an error when given parameter is not a number", () => {
      const figureCalculator = new FigureCalculatorModule({});

      expect(() =>
        figureCalculator.calculateRectangleArea("3", "4")
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectangleArea(3, "4")
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateRectangleArea(true, {})
      ).toThrowError();
    });

    it("Should return correct value based on rectangle area formula", () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasicModule, "multiply");
      const figureCalculator = new FigureCalculatorModule(MathBasicModule);

      // Action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // Assert
      expect(result).toBe(200); // length x width
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe("A calculateTrianglePerimeter function", () => {
    it("Should be throw an error when not given 3 parameters", () => {
      const figureCalculator = new FigureCalculatorModule({});

      expect(() =>
        figureCalculator.calculateTrianglePerimeter()
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(3)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(3, 4)
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(3, 4, 5, 6)
      ).toThrowError();
    });

    it("Should be throw an error when given parameter is not a number", () => {
      const figureCalculator = new FigureCalculatorModule({});

      expect(() =>
        figureCalculator.calculateTrianglePerimeter("3", "4", "5")
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(3, "4", "5")
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTrianglePerimeter(true, {}, [])
      ).toThrowError();
    });

    it("Should return correct value based on triangle perimeter formula", () => {
      // Arrange
      const sideA = 20;
      const sideB = 10;
      const base = 5;
      const spyAdd = jest.spyOn(MathBasicModule, "add");
      const figureCalculator = new FigureCalculatorModule(MathBasicModule);

      // Action
      const result = figureCalculator.calculateTrianglePerimeter(
        sideA,
        sideB,
        base
      );

      // Assert
      expect(result).toBe(35); // sideA + sideB + base
      expect(spyAdd).toHaveBeenCalledWith(sideA, sideB);
      expect(spyAdd).toHaveBeenCalledWith(30, base);
    });
  });

  describe("A calculateTriangleArea function", () => {
    it("Should be throw an error when not given 2 parameters", () => {
      const figureCalculator = new FigureCalculatorModule({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(3)).toThrowError();
      expect(() =>
        figureCalculator.calculateTriangleArea(3, 4, 5)
      ).toThrowError();
    });

    it("Should be throw an error when given parameter is not a number", () => {
      const figureCalculator = new FigureCalculatorModule({});

      expect(() =>
        figureCalculator.calculateTriangleArea("3", "4")
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTriangleArea(3, "4")
      ).toThrowError();
      expect(() =>
        figureCalculator.calculateTriangleArea(true, {})
      ).toThrowError();
    });

    it("Should return correct value based on triangle area formula", () => {
      // Arrange
      const base = 20;
      const height = 10;
      const spyMultiply = jest.spyOn(MathBasicModule, "multiply");
      const spyDivide = jest.spyOn(MathBasicModule, "divide");

      // Action
      const figureCalculator = new FigureCalculatorModule(MathBasicModule);

      // Assert
      const result = figureCalculator.calculateTriangleArea(base, height);
      expect(result).toBe(100); // (base x height) / 2
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith(200, 2);
    });
  });
});
