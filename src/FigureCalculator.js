class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error("Rectangle perimeter must be given 2 parameters");
    }

    const [length, width] = args;

    // formula: (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error("Rectangle area must be given 2 parameters");
    }

    const [length, width] = args;

    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error("Triangle perimeter must be given 3 parameters");
    }

    const [sideA, sideB, base] = args;

    return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);
  }

  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error("Triangle area must be given 2 parameters");
    }

    const [base, height] = args;

    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
