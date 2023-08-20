const CreateServerModule = require("./src/CreateServer");
const FigureCalculatorModule = require("./src/FigureCalculator");
const MathBasicModule = require("./src/MathBasic");

const start = async () => {
  const figureCalculator = new FigureCalculatorModule(MathBasicModule);
  const server = CreateServerModule({
    mathBasic: MathBasicModule,
    figureCalculator,
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

start();
