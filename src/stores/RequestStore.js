import alt from '../alt';

class RequestStore {

    constructor() {
        this.requestsInProgress = [];
        this.bindListeners({
        });
    }

    handleAbortRequest() {
    
    }
}

export default alt.createStore(RequestStore, 'RequestStore');
