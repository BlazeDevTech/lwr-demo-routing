// src/modules/example/animalHomePageHandler/animalHomePageHandler.js

export default class AnimalHomePageHandler {
    callback;
  
    constructor(callback) {
      this.callback = callback;
      console.log('into animal home page');
    }
  
    dispose()  {
      /* noop */
    }
  
    update()  {
      this.callback({
        viewset: {
          default: () => import("example/animalHome"), // -> "/animal/"
        },
      });
    }
  }