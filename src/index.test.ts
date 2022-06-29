import { logHelloWorld } from ".";

console.log = jest.fn();
describe("Playground Tests", () => {
  test('should calls console.log with "Hello World"', () => {
    logHelloWorld();

    expect(console.log).toBeCalledWith("Hello World");
  });
});
