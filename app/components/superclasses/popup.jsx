import React, { Component } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

// TODO: Separate into container and presentation components?

const CloseButton = ({

    onClick

}) => (
    <a
        className="close-button enabled"
        onClick={onClick}
    >
        {'\u274C'}
    </a>
)

class PopupTransitionGroup extends Component {

    _getContainerElement(element) {
        const { className,
                onCloseClick,
                sectionAccessHighlighted } = this.props

        return element ? (
            <div
                className={`popup-content-wrapper ${className}${sectionAccessHighlighted ? ' access-highlighted' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                <CloseButton onClick={onCloseClick} />
                {element}
            </div>
        ) : null
    }

    render() {
        const { className,
                transitionName,
                element } = this.props
        return (
            <CSSTransitionGroup
                className={`popup-transition-group ${className}`}
                transitionName={transitionName}
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
            >
                {this._getContainerElement(element)}
            </CSSTransitionGroup>
        )
    }
}

class Popup extends Component {

    constructor(props) {
        super(props)
        this.onCloseClick = this.onCloseClick.bind(this)
    }

    onCloseClick(e) {
        this.props.onCloseClick(e)
    }

    render() {
        const className = this.getClassName(),
            element = this.getContentElement(),
            { accessedOn,
              accessedSectionKey } = this.props,

            sectionAccessHighlighted = accessedOn && accessedSectionKey === `${className}_section`

        return (
            <PopupTransitionGroup
                element={element}
                className={className}
                transitionName={`${className}-animation`}
                sectionAccessHighlighted={sectionAccessHighlighted}
                onCloseClick={this.onCloseClick}
            />
        )
    }
}

export default Popup
