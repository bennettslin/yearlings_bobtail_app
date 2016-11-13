import React, { Component } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

// TODO: Separate into container and presentation components?
const CLOSE = 'close', PREVIOUS = 'previous', NEXT = 'next'

const PopupButton = ({

    onPopupButtonClick,
    buttonName

}) => {
    let tempUnicodeSymbol,
        onClick,
        direction

    switch (buttonName) {
        case CLOSE:
            tempUnicodeSymbol = '\u274C'
            break
        case PREVIOUS:
            tempUnicodeSymbol = '\u276e'
            direction = -1
            break
        case NEXT:
            tempUnicodeSymbol = '\u276f'
            direction = 1
            break
    }

    if (!isNaN(direction)) {
        onClick = e => onPopupButtonClick(e, { direction })
    } else {
        onClick = e => onPopupButtonClick(e, 0)
    }

    return (
        <a
            className={`button ${buttonName}-button enabled`}
            onClick={onClick}
        >
            {tempUnicodeSymbol}
        </a>
    )
}

class PopupTransitionGroup extends Component {

    _getContainerElement(element) {
        const { className,
                showArrows,
                sectionAccessHighlighted,
                onPopupButtonClick } = this.props

        return element ? (
            <div
                className={`popup-content-wrapper ${className}${sectionAccessHighlighted ? ' access-highlighted' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                <PopupButton
                    onPopupButtonClick={onPopupButtonClick}
                    buttonName={CLOSE}
                />
                {element}
                {showArrows ? (
                        <PopupButton
                            onPopupButtonClick={onPopupButtonClick}
                            buttonName={PREVIOUS}
                        />
                    ) : null
                }
                {showArrows ? (
                        <PopupButton
                            onPopupButtonClick={onPopupButtonClick}
                            buttonName={NEXT}
                        />
                    ) : null
                }
            </div>
        ) : null
    }

    render() {
        const { className,
                transitionName,
                element,
                showArrows } = this.props
        return (
            <CSSTransitionGroup
                className={`popup-transition-group ${className}`}
                transitionName={transitionName}
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
            >
                {this._getContainerElement(element, showArrows)}
            </CSSTransitionGroup>
        )
    }
}

class Popup extends Component {

    constructor(props) {
        super(props)
        this.onPopupButtonClick = this.onPopupButtonClick.bind(this)
    }

    onPopupButtonClick(e, argument) {
        this.props.onPopupButtonClick(e, argument)
    }

    render() {
        const className = this.getClassName(),
            { accessedOn,
              accessedSectionKey,
              showArrows } = this.props,
            sectionAccessHighlighted = accessedOn && accessedSectionKey === `${className}-section`,
            element = this.getContentElement(sectionAccessHighlighted)

        return (
            <PopupTransitionGroup
                element={element}
                className={className}
                transitionName={`${className}-animation`}
                sectionAccessHighlighted={sectionAccessHighlighted}
                showArrows={showArrows}
                onPopupButtonClick={this.onPopupButtonClick}
            />
        )
    }
}

export default Popup
