class Controller {

    constructor(service, view) {

        this.service = service;
        this.view = view;

        this.view.bindAddItem(this.addItem);

    }

}

export default Controller;
