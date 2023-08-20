const RocketModule = require("../src/Rocket.js");
const RocketLauncherModule = require("../src/RocketLauncher.js");
const RocketRepairKitModule = require("../src/RocketRepairKit.js");

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

describe("Test Double using method Dummy", () => {
  it("Should launch all rockets", () => {
    // Arrange
    const nasaRocket = new RocketModule("NASA");
    const spacexRocket = new RocketModule("SpaceX");
    const rocketLauncher = new RocketLauncherModule(
      [nasaRocket, spacexRocket],
      {}
    ); // We pass empty object as Dummy

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
    const rocketLauncher = new RocketLauncherModule(
      [nasaRocket, spacexRocket],
      {}
    ); // We pass empty object as Dummy

    // Action
    rocketLauncher.launchRocketByQueue();

    // Assert
    expect(rocketLauncher.listOfRockets).toEqual([spacexRocket]);
    expect(rocketLauncher.listOfRockets.length).toBe(1);
    expect(nasaRocket.engineStatus).toBe("Active");
    expect(spacexRocket.engineStatus).toBe("Inactive");
  });
});

describe("Test Double using method Stub", () => {
  /**
   * @description  Stub merupakan teknik dalam mengubah behavior objek ( palsu atau asli) agar hasilnya terprediksi guna memenuhi skenario pengujian
   *
   * @example Contohnya teknik stub dapat digunakan ketika Anda hendak menguji fungsi repairAllRockets, tetapi dengan harapan fungsi RocketRepairKit.repair membangkitkan eror.
   */

  it("should return correct result when repair kit cannot repair the rocket", async () => {
    // Arrange
    const fakeRocketRepairKit = {
      repair: () => Promise.reject("Failed to repair rocket"),
    };
    const rocketLauncher = new RocketLauncherModule([{}], fakeRocketRepairKit);

    // Action
    const result = await rocketLauncher.repairAll();

    // Assert
    expect(result).toBe("There was 1 of 1 rockets that failed to repair");
  });
});

describe("Test Double using method Mock", () => {
  /**
   * @description Mock serupa dengan stub, di mana dengan mock kita bisa mengubah implementasi dari sebuah objek agar memiliki behavior yang terprediksi. Bedanya, ketika Anda melakukan mock, selain memastikan hasil dari sistem yang diuji sesuai, Anda juga memiliki ekspektasi terhadap implementasi objek yang diubah diperlakukan.
   *
   * @example Contoh, mock bisa diterapkan ketika Anda menguji fungsi repairAllRockets, kemudian Anda ingin memastikan apakah fungsi RocketRepairKit.repair benar-benar dipanggil ketika pengujian dilakukan.
   */
  it("should repair some repairable rocket when repair kit cannot repair some the rocket", async () => {
    // Arrange
    const repairableRocket = new RocketModule("Repairable Rocket");
    const unrepairableRocket = new RocketModule("Unrepairable Rocket");
    const listOfRockets = [repairableRocket, unrepairableRocket];
    const fakeRocketRepairKit = {
      repair: jest.fn((rocket) => {
        if (rocket.name === "Repairable Rocket") {
          return Promise.resolve("Rocket repaired!");
        }
        return Promise.reject("Failed to repair rocket");
      }),
    };
    const rocketLauncher = new RocketLauncherModule(
      listOfRockets,
      fakeRocketRepairKit
    );

    // Action
    const result = await rocketLauncher.repairAll();

    // Assert
    expect(result).toBe("There was 1 of 2 rockets that failed to repair");
    expect(fakeRocketRepairKit.repair).toHaveBeenCalledTimes(2);
    expect(fakeRocketRepairKit.repair).toHaveBeenCalledWith(repairableRocket);
    expect(fakeRocketRepairKit.repair).toHaveBeenCalledWith(unrepairableRocket);
  });
});

describe("Test Double using method Spy", () => {
  /**
   * @description Serupa dengan mock tetapi tidak serupa dengan stub. Melalui spy kita bisa melihat apakah sebuah fungsi dari objek yang menjadi dependencies terhadap sistem yang diuji benar-benar dipanggil dan diperlakukan dengan sesuai atau tidak. Namun, spy tidak mengubah implementasi fungsinya sehingga behavior fungsi tersebut masih sama seperti aslinya. Sesuai namanya, ia hanya bisa “memata-matai” saja.
   */

  it("should repair all the rockets with repair kit correctly", async () => {
    // Arrange
    const nasaRocket = new RocketModule("NASA");
    const spacexRocket = new RocketModule("SpaceX");
    const rocketRepair = new RocketRepairKitModule({}, {}, {});

    /**
     * @description Kita membuat spy terhadap fungsi repair milik rocketRepair. Tujuannya adalah untuk memastikan fungsi tersebut dipanggil dengan benar ketika fungsi repairAllRockets dipanggil.
     */
    const repairSpy = jest.spyOn(rocketRepair, "repair");
    const rocketLauncher = new RocketLauncherModule(
      [nasaRocket, spacexRocket],
      rocketRepair
    );

    // Action
    const result = await rocketLauncher.repairAll();

    // Assert
    expect(result).toBe("All rockets repaired successfully");
    expect(repairSpy).toHaveBeenCalledTimes(2);
    expect(repairSpy).toHaveBeenCalledWith(nasaRocket);
    expect(repairSpy).toHaveBeenCalledWith(spacexRocket);
  });
});
