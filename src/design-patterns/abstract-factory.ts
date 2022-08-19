export interface AbstractAnimalFactory {
  createDog(): AbstractDog;
  createCat(): AbstractCat;
}

export class HouseOneFactory implements AbstractAnimalFactory {
  public createDog(): AbstractDog {
    return new Beagle();
  }

  public createCat(): AbstractCat {
    return new Persian();
  }
}

export class HouseTwoFactory implements AbstractAnimalFactory {
  public createDog(): AbstractDog {
    return new Poodle();
  }

  public createCat(): AbstractCat {
    return new Ragdoll();
  }
}

export abstract class AbstractDog {
  public paws: number = 4;

  abstract sound(): string;
}

export class Beagle extends AbstractDog {
  public sound(): string {
    return 'au au';
  }
}

export class Poodle extends AbstractDog {
  public sound(): string {
    return 'aau aau au au au';
  }
}

export abstract class AbstractCat {
  public paws: number = 4;

  public soundTogether(collaborator: AbstractDog): string {
    const result = collaborator.sound();
    return `${this.sound()} (${result})`;
  }

  abstract sound(): string;
}

export class Persian extends AbstractCat {
  public sound(): string {
    return 'miaaauuuu';
  }
}

export class Ragdoll extends AbstractCat {
  public sound(): string {
    return 'miau miau';
  }

  public soundTogether(collaborator: AbstractDog): string {
    const result = collaborator.sound();
    return `${this.sound()} + ${result}`;
  }
}

export function clientCode(factory: AbstractAnimalFactory) {
  const dog = factory.createDog();
  const cat = factory.createCat();

  return { dog, cat };
}
