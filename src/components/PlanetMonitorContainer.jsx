import React from 'react';
import AltContainer from 'alt/AltContainer';

import ObiWanLocationStore from '../stores/ObiWanLocationStore';
import SithStore from '../stores/SithStore';
import PlanetMonitor from './PlanetMonitor.jsx';

let PlanetMonitorContainer = React.createClass({
    render() {
        return (
            <AltContainer
                stores={[
                    ObiWanLocationStore,
                    SithStore
                ]}
                inject={{
                    currentPlanet: (props) => ObiWanLocationStore.getState().currentPlanet,
                    sithInView: (props) => SithStore.getState().sithInView,
                }}>
                <PlanetMonitor />
            </AltContainer>
        );
    }
});

export default PlanetMonitorContainer;
