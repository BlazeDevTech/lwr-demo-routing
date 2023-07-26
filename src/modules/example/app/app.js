// src/modules/example/app/app.js

import { LightningElement } from 'lwc';
import { createRouter } from 'lwr/router';

// Route definition array
const routes = [
    {
        id: 'home',
        uri: '/',
        handler: () => import('example/homePageHandler'),
        page: {
            type: 'home',
        },
    },
    {
        id: 'namedPage',
        uri: '/:pageName',
        handler: () => import('example/namedPageHandler'),
        page: {
            type: 'namedPage',
            attributes: {
                pageName: ':pageName',
            },
        },
    },
];

export default class App extends LightningElement {
    router = createRouter({ routes });

    homeReference = { type: 'home' }; // Home page reference for the page-link
    contactReference = {type:'namedPage',attributes:{pageName:'contact'}};
    productsReference = {type:'namedPage',attributes:{pageName:'products'}};
    recipesReference = {type:'namedPage',attributes:{pageName:'recipes'}};
}