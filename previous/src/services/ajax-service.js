import axios from 'axios';

export const GlobalVariable = Object.freeze({
    //BASE_API_URL: `http://192.168.8.105:5000/`,
    // BASE_API_URL: `http://localhost:5000/`,
    BASE_API_URL: `https://cotten-backend.herokuapp.com/`,
});

class AjaxService {
    
    generateUrl(url) {
        return GlobalVariable.BASE_API_URL + url;
    }

    get(url, data) {
        return this.executeRequest(url, data, 'GET');
    }

    post(url, data) {
        return this.executeRequest(url, data, 'POST');
    }

    put(url, data) {
        return this.executeRequest(url, data, 'PUT');
    }

    delete(url) {
        return this.executeRequest(url, null, 'DELETE');
    }
    
    async executeRequest(url, data, type) {
        
        let headers = {
            'Accept' : 'application/json',
            //'Authorization' : `Bearer ${localStorage.getItem('token')}`
        };

        const uri = this.generateUrl(url);

        let options = {
            method: type,
            url: uri,
            headers: headers,
            data: null,
        }

        if (type === 'GET') {
            options.params = data;
        } else if (type === 'POST' || type === 'PUT') {
            options.data = data;
        }else{
            delete options.data;
        }

        return axios(options).then(response => {
            return response;
        }).catch(function (error) {
          console.log(error);
        });
    }    
}

const ajaxService = new AjaxService();

export default ajaxService;