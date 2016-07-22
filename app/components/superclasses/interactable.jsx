/**
 * Generic element that will listen for hover events on desktop devices, and
 * click events on mobile devices.
 */
import React, { Component } from 'react';

class Interactable extends Component {

    constructor(props) {
        super(props);
        this.handleInteraction = this.handleInteraction.bind(this);
    }

    getContentElement() {
        return null;
    }

    render() {
        const className = `interactable ${this.getClassName()}`;

        return (
            <div onClick={this.handleInteraction}
                className={className}
            >
                {this.getContentElement()}
            </div>
        );
    }
}

export default Interactable;
