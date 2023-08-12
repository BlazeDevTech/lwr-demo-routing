
export default class AnimalPageHandler {
  callback;

  constructor(callback) {
    console.log('animal page handler');
    
    this.callback = callback;
  }

  dispose() {
    /* noop */
  }

  update() {
    console.log('into update');
    this.callback({
      viewset: {
        default: () => import("example/animal"), // -> "/"
        // "example/animalPageHandler" imports "example/animal" instead
      },
    });
  }
}