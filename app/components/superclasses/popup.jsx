import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// TODO: Separate into container and presentation components?

const CloseButton = ({
    onClick
}) => (
    <a
        className="close-button"
        onClick={onClick}
    >
        Close
    </a>
);

class PopupTransitionGroup extends React.Component {

    _getContainerElement(element) {
        const { className,
                onCloseClick } = this.props;

        return element ? (
            <div className={`popup-content-wrapper ${className}`}>
                <CloseButton onClick={onCloseClick} />
                {element}
            </div>
        ) : null;
    }

    render() {
        const { className,
                transitionName,
                element } = this.props;
        return (
            <CSSTransitionGroup
                className={`popup-transition-group ${className}`}
                transitionName={transitionName}
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
            >
                {this._getContainerElement(element)}
            </CSSTransitionGroup>
        );
    }
}

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    onCloseClick() {
        this.props.onCloseClick();
    }

    render() {
        const className = this.getClassName(),
            element = this.getContentElement();

        return (
            <PopupTransitionGroup
                element={element}
                className={className}
                transitionName={`${className}-animation`}
                onCloseClick={this.onCloseClick}
            />
        );
    }
}

export default Popup;
