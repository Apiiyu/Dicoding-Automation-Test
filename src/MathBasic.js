const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error("MathBasic.add requires two parameters");
    }

    if (typeof args[0] !== "number" || typeof args[1] !== "number") {
      throw new Error("MathBasic.add requires two parameters of type number");
    }

    return args[0] + args[1];
  },
  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error("MathBasic.subtract requires two parameters");
    }

    if (typeof args[0] !== "number" || typeof args[1] !== "number") {
      throw new Error(
        "MathBasic.subtract requires two parameters of type number"
      );
    }

    return args[0] - args[1];
  },
  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error("MathBasic.multiply requires two parameters");
    }

    if (typeof args[0] !== "number" || typeof args[1] !== "number") {
      throw new Error(
        "MathBasic.multiply requires two parameters of type number"
      );
    }

    return args[0] * args[1];
  },
  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error("MathBasic.divide requires two parameters");
    }

    if (typeof args[0] !== "number" || typeof args[1] !== "number") {
      throw new Error(
        "MathBasic.divide requires two parameters of type number"
      );
    }

    return args[0] / args[1];
  },
};

module.exports = MathBasic;
