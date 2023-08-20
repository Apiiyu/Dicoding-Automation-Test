const Hapi = require("@hapi/hapi");

const createServer = ({ mathBasic, figureCalculator }) => {
  const server = Hapi.Server({
    host: "localhost",
    port: 1337,
  });

  server.route([
    {
      method: "GET",
      path: "/add/{firstValue}/{secondValue}",
      handler: (request) => {
        const { firstValue, secondValue } = request.params;
        const value = mathBasic.add(+firstValue, +secondValue);

        return { value };
      },
    },
    {
      method: "GET",
      path: "/subtract/{firstValue}/{secondValue}",
      handler: (request) => {
        const { firstValue, secondValue } = request.params;
        const value = mathBasic.subtract(+firstValue, +secondValue);

        return { value };
      },
    },
    {
      method: "GET",
      path: "/multiply/{firstValue}/{secondValue}",
      handler: (request) => {
        const { firstValue, secondValue } = request.params;
        const value = mathBasic.multiply(+firstValue, +secondValue);

        return { value };
      },
    },
    {
      method: "GET",
      path: "/divide/{firstValue}/{secondValue}",
      handler: (request) => {
        const { firstValue, secondValue } = request.params;
        const value = mathBasic.divide(+firstValue, +secondValue);

        return { value };
      },
    },
    {
      method: "GET",
      path: "/calculate-rectangle-perimeter/{length}/{width}",
      handler: (request) => {
        const { length, width } = request.params;
        const value = figureCalculator.calculateRectanglePerimeter(
          +length,
          +width
        );

        return { value };
      },
    },
    {
      method: "GET",
      path: "/calculate-rectangle-area/{length}/{width}",
      handler: (request) => {
        const { length, width } = request.params;
        const value = figureCalculator.calculateRectangleArea(+length, +width);

        return { value };
      },
    },
    {
      method: "GET",
      path: "/calculate-triangle-perimeter/{sideA}/{sideB}/{base}",
      handler: (request) => {
        const { sideA, sideB, base } = request.params;
        const value = figureCalculator.calculateTrianglePerimeter(
          +sideA,
          +sideB,
          +base
        );

        return { value };
      },
    },
    {
      method: "GET",
      path: "/calculate-triangle-area/{base}/{height}",
      handler: (request) => {
        const { base, height } = request.params;
        const value = figureCalculator.calculateTriangleArea(+base, +height);

        return { value };
      },
    },
  ]);

  return server;
};

module.exports = createServer;
