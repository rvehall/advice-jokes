import {environment} from './enviroment';
import BaseService from './BaseService';

class JokeService extends BaseService {    
    getAdvice = () => {
        let response = this.submitRequestWithPromise('get', `${environment.adviceEndPoint}`)
    
        return response;
    };
}

export default new JokeService()