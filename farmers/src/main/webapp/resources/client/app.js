import Controller from './controller/Controller.js';
import View from './view/View.js';
import Service from './service/Service.js';

const app = new Controller(new Service(), new View());