import Controller from './controller/controller';
import View from './view/view';
import Service from './service/service';

const app = new Controller(new Service(), new View());
