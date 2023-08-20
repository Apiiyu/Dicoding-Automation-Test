class RocketLauncher {
  constructor(listOfRockets = [], repairKit) {
    this.listOfRockets = listOfRockets;
    this.repairKit = repairKit;
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

  async repairAll() {
    let failedRepairCount = 0;

    for (const rocket of this.listOfRockets) {
      try {
        await this.repairKit.repair(rocket);
      } catch {
        failedRepairCount++;
      }
    }

    if (!failedRepairCount) return "All rockets repaired successfully";

    return `There was ${failedRepairCount} of ${this.listOfRockets.length} rockets that failed to repair`;
  }
}

module.exports = RocketLauncher;
