import alt from '../alt';

import ObiWanActions from '../actions/ObiWanActions';

class ObiWanLocationStore {

    constructor() {
        this.currentPlanet = null;

        this.bindListeners({
            handleUpdateLocation: ObiWanActions.CHANGE_PLANET,
        });
    }

    handleUpdateLocation(newPlanet) {
        this.currentPlanet = newPlanet;
    }
}

export default alt.createStore(ObiWanLocationStore, 'ObiWanLocationStore'); 
