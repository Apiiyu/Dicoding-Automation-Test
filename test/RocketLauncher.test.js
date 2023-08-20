const RocketModule = require("../src/Rocket.js");
const RocketLauncherModule = require("../src/RocketLauncher.js");

describe("A RocketLauncher", () => {
  it("Should contains listOfRockets", () => {
    // Arrange
    const rocketLauncher = new RocketLauncherModule();

    // Assert
    expect(rocketLauncher).toHaveProperty("listOfRockets");
  });

  it("Should be launch all rockets", () => {
    // Arrange
    const nasaRocket = new RocketModule("NASA");
    const spacexRocket = new RocketModule("SpaceX");
    const rocketLauncher = new RocketLauncherModule([nasaRocket, spacexRocket]);

    // Action
    rocketLauncher.launchAll();

    // Assert
    expect(rocketLauncher.listOfRockets).toEqual([]);
    expect(rocketLauncher.listOfRockets.length).toBe(0);
    expect(nasaRocket.engineStatus).toBe("Active");
    expect(spacexRocket.engineStatus).toBe("Active");
  });

  it("Should launch only one rocket by queue", () => {
    // Arrange
    const nasaRocket = new RocketModule("NASA");
    const spacexRocket = new RocketModule("SpaceX");
    const rocketLauncher = new RocketLauncherModule([nasaRocket, spacexRocket]);

    // Action
    rocketLauncher.launchRocketByQueue();

    // Assert
    expect(rocketLauncher.listOfRockets).toEqual([spacexRocket]);
    expect(rocketLauncher.listOfRockets.length).toBe(1);
    expect(nasaRocket.engineStatus).toBe("Active");
    expect(spacexRocket.engineStatus).toBe("Inactive");
  });
});
