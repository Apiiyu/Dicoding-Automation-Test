class RocketLauncher {
  constructor(listOfRockets = []) {
    this.listOfRockets = listOfRockets;
  }

  launchAll() {
    this.listOfRockets.forEach((rocket) => {
      rocket.engineStatus = "Active";
    });

    this.listOfRockets = [];
  }

  launchRocketByQueue() {
    const rocket = this.listOfRockets.shift();
    rocket.engineStatus = "Active";
  }
}

module.exports = RocketLauncher;
