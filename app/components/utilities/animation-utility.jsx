import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

module.exports = {

    getTransitionGroupWrappedElement(element, transitionName) {
        return (
            <CSSTransitionGroup
                className="popup-transition-group"
                transitionName={transitionName}
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
            >
                {element}
            </CSSTransitionGroup>
        );
    }
}