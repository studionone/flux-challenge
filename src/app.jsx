/**
 * Flux Challenge
 */
// Utils
import ArrayClone from './utils/ArrayClone';

import React from 'react';
import ReactDOM from 'react-dom';

import PlanetMonitorContainer from './components/PlanetMonitorContainer.jsx';

import ObiWanLocation from './sources/ObiWanLocation';

ObiWanLocation.listenForPlanetChanges();

ReactDOM.render(<PlanetMonitorContainer />, document.querySelector('#app'));
