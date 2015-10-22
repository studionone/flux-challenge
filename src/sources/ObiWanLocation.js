
const SERVER_URI = "ws://localhost:4000";

import ObiWanActions from '../actions/ObiWanActions';

let ObiWanLocation = {
    listenForPlanetChanges: function() {
        let socket = new WebSocket(SERVER_URI);
        console.log('Listening for changes in Obi Wan\'s location');
        socket.onmessage = function onMessage(event) {
            console.log('Obi Wan is at a new planet!');
            // Note that the flux-challenge WebSocket server calls this a
            // "world", not a planet. We've used "planet" to match "PlanetMonitor"
            let planet = JSON.parse(event.data);

            // Call a Flux action to handle the change in planet
            ObiWanActions.changePlanet(planet);
        };
    }
};

export default ObiWanLocation;
