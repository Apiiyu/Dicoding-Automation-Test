class RocketRepairKit {
  /**
   * @description Anggap proses membuat instance RocketRepairKit itu rumit
   * Karena ia membutuhkan banyak dependencies.
   */
  constructor(objectA, objectB, objectC) {
    this.objectA = objectA;
    this.objectB = objectB;
    this.objectC = objectC;
  }

  repair(rocket) {
    /**
     * @description Anggap ini proses yang diambil dari suatu service external.
     * sehingga prosesnya membutuhkan waktu dan rentan gagal.
     */
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(`${rocket.name} repaired!`);
      }, 500);
    });
  }
}

module.exports = RocketRepairKit;
