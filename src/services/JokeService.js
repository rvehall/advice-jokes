import axios from 'axios';
import {environment} from './enviroment';
import BaseService from './BaseService';

class JokeService extends BaseService {
    getDadJokes = (search) => {
        const data = {
            term: search.search,
            page: search.page,
            limit: search.limit 
        };
        let response = this.submitRequestWithPromise('get', `${environment.dadJokeEndPoint}`, '', data)

        return response
    };
    
    getDadJokeById = (id) => {
        let response = this.submitRequestWithPromise('get', `${environment.dadJokeEndPoint}/j/${id}`)
    
        return response;
    };
    
    getGeekJoke = () => {
        let response = this.submitRequestWithPromise('get', `https://geek-jokes.sameerkumar.website/api`)
    
        return response;
    };
}

export default new JokeService()