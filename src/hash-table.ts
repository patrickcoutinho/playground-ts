export class HashTable<T> {
  private data: T[];

  constructor(size: number) {
    this.data = new Array(size);
  }

  private _hash(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  public set(key: string, value: T) {
    const index = this._hash(key);
    this.data[index] = value;
  }

  public get(key: string) {
    const index = this._hash(key);
    return this.data[index];
  }
}
