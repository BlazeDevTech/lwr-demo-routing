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
        id: "animal",
        uri: "/animal",
        handler: () => import("example/animalPageHandler"),
        page: { type: "animal" },
        exact: false, // indicates that "example/animal" contains a child router
    },
    {
        id: 'employee',
        uri: 'employee/:empId',
        handler: () => import('example/employeePageHandler'),
        page: {
            type: 'employee',
            attributes: {
                pageName: 'employee',
                empId: ':empId',
            },
            
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
    }
];

export default class App extends LightningElement {
    router = createRouter({ routes });

    homeReference = { type: 'home' }; // Home page reference for the page-link
    contactReference = {type:'namedPage',attributes:{pageName:'contact'}};
    animalPageReference = {type:'animal'};
    employeePageReference = {type:'employee',attributes:{pageName:'employee',empId:'1234'}};
    productsReference = {type:'namedPage',attributes:{pageName:'products'}};
    recipesReference = {type:'namedPage',attributes:{pageName:'recipes'}};
}