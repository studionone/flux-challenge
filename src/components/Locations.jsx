import React from 'react';
import LocationActions from '../actions/LocationActions';
import LocationStore from '../stores/LocationStore';

let Locations = React.createClass({
    getInitialState() {
        return LocationStore.getState();
    },

    componentDidMount() {
        LocationStore.listen(this.onChange);

        LocationActions.fetchLocations();
    },

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    /*
     * alt tutorial implementation
     */
    render() {
        if (this.state.errorMessage) {
            return (
                    <div>Something is wrong</div>
            );
        }

        if (!this.state.locations.length) {
            return (
                <div>
                    <img src="/my-cool-spinner.gif" />
                </div>
            );
        }

        return (
                <ul>
                    {this.state.locations.map((location) => {
                        return (
                            <li>{location.name}</li>
                        );
                    })}
                </ul>
        );
    }
});

export default Locations;
