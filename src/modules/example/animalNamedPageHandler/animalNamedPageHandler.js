// src/modules/example/animalNamedPageHandler/animalNamedPageHandler.js

export default class AnimalNamedPageHandler {
    callback;
  
    constructor(callback) {
      this.callback = callback;
    }
  
    dispose() {
      /* noop */
    }
  
    update(pageRef) {
      const { attributes } = pageRef;
      let viewGetter;
  
      switch (attributes.pageName) {
        case "dog":
          viewGetter = () => import("example/animalDog"); // -> "/animal/dog"
          break;
        case "cat":
          console.log('into this case')
          viewGetter = () => import("example/animalCat"); // -> "/animal/cat"
          break;
        default:
          return;
      }
  
      this.callback({
        viewset: {
          default: viewGetter,
        },
      });
    }
  }