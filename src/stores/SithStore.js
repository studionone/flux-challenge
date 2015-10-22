import alt from '../alt';

import PlanetMonitorActions from '../actions/PlanetMonitorActions';

const SITH_SCROLLED_PER_CLICK = 2 

class SithStore {

    constructor() {
        // Slots for 5 Sith currently shown on Planet Monitor
        this.sithInView = [
            null,
            null,
            null,
            null,
            null,
        ];
        this.bindListeners({
            handleScrollDown: PlanetMonitorActions.SCROLL_MONITOR_DOWN,
        });
    }

    handleScrollUp() {
        // Clone the existing sithInView
        let newSithInView = this.sithInView.clone();

        // Drop the last N sith shown
        newSithInView.splice(
                newSithInView.length - SITH_SCROLLED_PER_CLICK,
                SITH_SCROLLED_PER_CLICK);
        // Add empty slots at the start, for the sith we're about to fetch
        for (let i = 0; i < SITH_SCROLLED_PER_CLICK; i++) {
            newSithInView.unshift(null);
        }

        // Update our state
        this.sithInView = newSithInView;
    }

    handleScrollDown() {
        // Clone the existing sithInView
        let newSithInView = this.sithInView.clone();

        // Drop the first N sith shown
        newSithInView = newSithInView.splice(0, SITH_SCROLLED_PER_CLICK);
        // Add empty slots at the end, for the sith we're about to fetch
        for (let i = 0; i < SITH_SCROLLED_PER_CLICK; i++) {
            newSithInView.push(null);
        }

        // Update our state
        this.sithInView = newSithInView;
    }

}

export default alt.createStore(SithStore, 'SithStore');
