export class Singleton {
  private static instance: Singleton;

  private constructor() {
    // empty
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {}
}
