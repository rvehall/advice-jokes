import axios from 'axios'
import {GET} from './RequestMethods';

export default class BaseService {
    allow_404_redirect = false;

    submitRequestWithPromise(method, url, request, params, allow_404_redirect) {
        this.allow_404_redirect = allow_404_redirect;

        const config = {
            url: request,
            baseURL: url,
            method: method,
            headers: {
                "content-type": 'application/json',
                'Accept': 'application/json',
                'User-Agent': 'https://github.com/rvehall/advice-jokes'
            },
        };
        if (method == GET) {
            config['params'] = params;
        } else {
            config['data'] = params;
        }

        const instance = axios.create(config);

        return instance.request()
            .then(response => {
                return response.data
            })
            .catch(response => {
                return response.data
            });
    };

}
