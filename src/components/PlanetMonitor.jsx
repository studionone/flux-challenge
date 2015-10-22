/**
 * Flux Challenge
 */
import React from 'react';

let PlanetMonitor = React.createClass({
    render() {
        console.log(this.props);
        return (
            <div className="app-container">
              <div className="css-root">
                <h1 className="css-planet-monitor">
                    {
                        this.props.currentPlanet == null ?
                            "" :
                            "Obi-Wan currently on "+this.props.currentPlanet.name
                    }
                </h1>

                <section className="css-scrollable-list">
                  <ul className="css-slots">
                    {this.props.sithInView.map((sith) => {
                        if (sith === null) {
                            return (
                                <li className="css-slot" />
                            );
                        } else {
                            return (
                                <li className="css-slot">
                                  <h3>{sith.name}</h3>
                                  <h6>Homeworld: {sith.homeworld.name}</h6>
                                </li>
                            );
                        }
                    })}
                  </ul>

                  <div className="css-scroll-buttons">
                    <button className="css-button-up"></button>
                    <button className="css-button-down"></button>
                  </div>
                </section>
              </div>
            </div> 
        );
    },

});

export default PlanetMonitor;
