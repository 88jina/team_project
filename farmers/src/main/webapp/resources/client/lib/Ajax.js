const json = (method, url, data=null) => {

    return new Promise ( res => {

        const xhr = new XMLHttpRequest();
        
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json');
        
        if(!data) {
            xhr.send(data);
        }
        xhr.addEventListener('load', (err, result) => {
            
            return err ? res(err) : res(result);
        });
    });
};

const form = (method, url, data = null) => {

    return new Promise(res => {

        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        if (!data) {
            xhr.send(data);
        }
        xhr.addEventListener('load', (err, result) => {

            return err ? res(err) : res(result);
        });
    });
};

export {json, form};