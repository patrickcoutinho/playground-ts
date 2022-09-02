import {
  clientCode,
  HouseOneFactory,
  HouseTwoFactory,
} from './abstract-factory';

describe('Abstract Factory', () => {
  test('HouseOneFactory', () => {
    const { dog, cat } = clientCode(new HouseOneFactory());

    expect(cat.paws).toEqual(4);
    expect(dog.paws).toEqual(4);

    expect(cat.sound()).toEqual('miaaauuuu');
    expect(dog.sound()).toEqual('au au');

    expect(cat.soundTogether(dog)).toEqual('miaaauuuu (au au)');
  });

  test('HouseTwoFactory', () => {
    const { dog, cat } = clientCode(new HouseTwoFactory());

    expect(cat.paws).toEqual(4);
    expect(dog.paws).toEqual(4);

    expect(cat.sound()).toEqual('miau miau');
    expect(dog.sound()).toEqual('aau aau au au au');

    expect(cat.soundTogether(dog)).toEqual('miau miau + aau aau au au au');
  });
});
