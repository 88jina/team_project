import {sendRequest} from '../lib/ajax.js';

const url = {
    
}


class API {

    getTodoList() {
        let url = '/api/todolist';
        let response = sendRequest('GET', url);

        return response;
    }

    putList(data) {
        let url = '';
        
    }

    emailAuth() {
        let url = ''
    }

}

export default API;