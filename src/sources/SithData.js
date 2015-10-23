import SuperAgent from 'superagent';

const SITH_DATA_BASE_URI = 'http://localhost:3000/dark-jedis/'

let SithData = {

    startRequestForSith(id, onResponse) {
        request = SuperAgent.get(SITH_DATA_BASE_URI + id);
        request.end(onResponse);
        return request;
    }
}

export default SithData;
