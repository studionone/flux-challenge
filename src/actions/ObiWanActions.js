import alt from '../alt';

class ObiWanActions {
    changePlanet(newPlanet) {
        this.dispatch(newPlanet);
    }
}

export default alt.createActions(ObiWanActions);
