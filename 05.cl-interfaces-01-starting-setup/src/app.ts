class Department {
  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log("Department(" + this.id + "): " + this.name);
  }
}

const dev = new Department("d1", "R&D center");
dev.describe();
