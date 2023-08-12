// src/modules/example/animal/animal.js
import { LightningElement } from 'lwc';
import { createRouter } from 'lwr/router';

// child route definitions
const routes = [
    {
        id: 'home',
        uri: '/', // -> "/animal/"
        // view = "example/animalHome"
        handler: () => import('example/animalHomePageHandler'),
        page: { type: 'animalHome' },
    },
    {
        id: 'animal',
        uri: '/:pageName', // -> "/animal/cat" or "/animal/dog"
        // view = "example/animalCat" or "example/animalDog"
        handler: () => import('example/animalNamedPageHandler'),
        page: {
            type: 'namedAnimalPage',
            attributes: { pageName: ':pageName' },
        },
    },
];

export default class Animal extends LightningElement {
    
    ConnectedCallback(){
        console.log('rendered animal page');

    }
    childRouter = createRouter({ routes });
    animalHomeReference = {type:'animalHome'};
    animalPageReference = {type:'namedAnimalPage',attributes:{pageName:'cat'}};
    animalPageReference2 = {type:'namedAnimalPage',attributes:{pageName:'dog'}};

}