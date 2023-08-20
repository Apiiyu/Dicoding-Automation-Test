const MathBasicModule = require("../src/MathBasic");

describe("A MathBasic", () => {
  it("Should contains add, subtract, multiply, divide functions", () => {
    expect(MathBasicModule).toHaveProperty("add");
    expect(MathBasicModule).toHaveProperty("subtract");
    expect(MathBasicModule).toHaveProperty("multiply");
    expect(MathBasicModule).toHaveProperty("divide");
    expect(MathBasicModule.add).toBeInstanceOf(Function);
    expect(MathBasicModule.subtract).toBeInstanceOf(Function);
    expect(MathBasicModule.multiply).toBeInstanceOf(Function);
    expect(MathBasicModule.divide).toBeInstanceOf(Function);
  });
});

describe("A MathBasic.add", () => {
  it("Should throw an error when not given two parameters", () => {
    expect(() => MathBasicModule.add()).toThrowError();
    expect(() => MathBasicModule.add(1)).toThrowError();
    expect(() => MathBasicModule.add(1, 2, 3)).toThrowError();
    expect(() => MathBasicModule.add(1, 2, 3, 4)).toThrowError();
  });

  it("Should throw an error when given non-number parameters", () => {
    expect(() => MathBasicModule.add("1", "2")).toThrowError();
    expect(() => MathBasicModule.add("1", 2)).toThrowError();
    expect(() => MathBasicModule.add(1, "2")).toThrowError();
    expect(() => MathBasicModule.add(true, {})).toThrowError();
    expect(() => MathBasicModule.add(1, {})).toThrowError();
    expect(() => MathBasicModule.add(true, 2)).toThrowError();
    expect(() => MathBasicModule.add(1, [])).toThrowError();
    expect(() => MathBasicModule.add(true, false)).toThrowError();
  });

  it("Should return the sum of the two parameters", () => {
    expect(MathBasicModule.add(1, 2)).toBe(3);
    expect(MathBasicModule.add(2, 2)).toEqual(4);
    expect(MathBasicModule.add(1, 2)).not.toBe(4);
  });
});

describe("A MathBasic.subtract", () => {
  it("Should throw an error when not given two parameters", () => {
    expect(() => MathBasicModule.subtract()).toThrowError();
    expect(() => MathBasicModule.subtract(1)).toThrowError();
    expect(() => MathBasicModule.subtract(1, 2, 3)).toThrowError();
    expect(() => MathBasicModule.subtract(1, 2, 3, 4)).toThrowError();
  });

  it("Should throw an error when given non-number parameters", () => {
    expect(() => MathBasicModule.subtract("1", "2")).toThrowError();
    expect(() => MathBasicModule.subtract("1", 2)).toThrowError();
    expect(() => MathBasicModule.subtract(1, "2")).toThrowError();
    expect(() => MathBasicModule.subtract(true, {})).toThrowError();
    expect(() => MathBasicModule.subtract(1, {})).toThrowError();
    expect(() => MathBasicModule.subtract(true, 2)).toThrowError();
    expect(() => MathBasicModule.subtract(1, [])).toThrowError();
    expect(() => MathBasicModule.subtract(true, false)).toThrowError();
  });

  it("Should return the difference of the two parameters", () => {
    expect(MathBasicModule.subtract(1, 2)).toBe(-1);
    expect(MathBasicModule.subtract(2, 2)).toEqual(0);
    expect(MathBasicModule.subtract(1, 2)).not.toBe(4);
  });
});

describe("A MathBasic.multiply", () => {
  it("Should throw an error when not given two parameters", () => {
    expect(() => MathBasicModule.multiply()).toThrowError();
    expect(() => MathBasicModule.multiply(1)).toThrowError();
    expect(() => MathBasicModule.multiply(1, 2, 3)).toThrowError();
    expect(() => MathBasicModule.multiply(1, 2, 3, 4)).toThrowError();
  });

  it("Should throw an error when given non-number parameters", () => {
    expect(() => MathBasicModule.multiply("1", "2")).toThrowError();
    expect(() => MathBasicModule.multiply("1", 2)).toThrowError();
    expect(() => MathBasicModule.multiply(1, "2")).toThrowError();
    expect(() => MathBasicModule.multiply(true, {})).toThrowError();
    expect(() => MathBasicModule.multiply(1, {})).toThrowError();
    expect(() => MathBasicModule.multiply(true, 2)).toThrowError();
    expect(() => MathBasicModule.multiply(1, [])).toThrowError();
    expect(() => MathBasicModule.multiply(true, false)).toThrowError();
  });

  it("Should return the product of the two parameters", () => {
    expect(MathBasicModule.multiply(1, 2)).toBe(2);
    expect(MathBasicModule.multiply(2, 2)).toEqual(4);
    expect(MathBasicModule.multiply(1, 2)).not.toBe(4);
  });
});

describe("A MathBasic.divide", () => {
  it("Should throw an error when not given two parameters", () => {
    expect(() => MathBasicModule.divide()).toThrowError();
    expect(() => MathBasicModule.divide(1)).toThrowError();
    expect(() => MathBasicModule.divide(1, 2, 3)).toThrowError();
    expect(() => MathBasicModule.divide(1, 2, 3, 4)).toThrowError();
  });

  it("Should throw an error when given non-number parameters", () => {
    expect(() => MathBasicModule.divide("1", "2")).toThrowError();
    expect(() => MathBasicModule.divide("1", 2)).toThrowError();
    expect(() => MathBasicModule.divide(1, "2")).toThrowError();
    expect(() => MathBasicModule.divide(true, {})).toThrowError();
    expect(() => MathBasicModule.divide(1, {})).toThrowError();
    expect(() => MathBasicModule.divide(true, 2)).toThrowError();
    expect(() => MathBasicModule.divide(1, [])).toThrowError();
    expect(() => MathBasicModule.divide(true, false)).toThrowError();
  });

  it("Should return the quotient of the two parameters", () => {
    expect(MathBasicModule.divide(1, 2)).toBe(0.5);
    expect(MathBasicModule.divide(2, 2)).toEqual(1);
    expect(MathBasicModule.divide(1, 2)).not.toBe(4);
  });
});
