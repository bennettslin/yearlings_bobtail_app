import React, { Component } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

// TODO: Separate into container and presentation components?
const CLOSE = 'close',
    PREVIOUS = 'side-button previous',
    NEXT = 'side-button next'

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
        <div className={`popup-button ${buttonName}-button`}>
            <a
                className={`popup-button-interactable enabled`}
                onClick={onClick}
            >
            </a>
            <div className="popup-button-icon">
                {tempUnicodeSymbol}
            </div>
        </div>
    )
}

class PopupTransitionGroup extends Component {

    _getContainerElement(element) {
        const { className,
                showClose,
                showArrows,
                sectionAccessHighlighted,
                sectionNextHighlighted,
                onPopupButtonClick,
                onPopupContainerClick } = this.props

        return element && (
            <div className={`popup-wrapper ${className}`}>
                {showClose &&
                    <div className="popup-button close-button shadow"></div>
                }
                <div
                    className={`popup-content-wrapper ${className}${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
                    onClick={e => onPopupContainerClick(e, className)}
                >
                    {element}
                    {showClose &&
                        <PopupButton
                            onPopupButtonClick={onPopupButtonClick}
                            buttonName={CLOSE}
                        />
                    }
                    {showArrows &&
                        <PopupButton
                            onPopupButtonClick={onPopupButtonClick}
                            buttonName={PREVIOUS}
                        />
                    }
                    {showArrows &&
                        <PopupButton
                            onPopupButtonClick={onPopupButtonClick}
                            buttonName={NEXT}
                        />
                    }
                </div>
            </div>
        )
    }

    render() {
        const { className,
                transitionName,
                element } = this.props
        return (
            <CSSTransitionGroup
                className={`popup-transition-group ${className}`}
                transitionName={transitionName}
                transitionEnterTimeout={250}
                transitionLeaveTimeout={150}
            >
                {this._getContainerElement(element)}
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
              nextSectionKey,
              showClose,
              showArrows,
              onPopupContainerClick } = this.props,
             sectionClassName = `${className}-section`,
            sectionAccessHighlighted = accessedOn && accessedSectionKey === sectionClassName,
            sectionNextHighlighted = accessedOn && nextSectionKey === sectionClassName,
            element = this.getContentElement(sectionAccessHighlighted)

        return (
            <PopupTransitionGroup
                element={element}
                className={className}
                transitionName={`${className}-animation`}
                sectionAccessHighlighted={sectionAccessHighlighted}
                sectionNextHighlighted={sectionNextHighlighted}
                showClose={showClose}
                showArrows={showArrows}
                onPopupButtonClick={this.onPopupButtonClick}
                onPopupContainerClick={onPopupContainerClick}
            />
        )
    }
}

export default Popup
