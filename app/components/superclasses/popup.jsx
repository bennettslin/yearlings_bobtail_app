import React, { Component } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

// TODO: Separate into container and presentation components?
const CLOSE = 'close',
    PREVIOUS = 'side-button previous',
    NEXT = 'side-button next'

const PopupButton = ({

    handlePopupButtonClick,
    buttonName

}) => {
    let tempUnicodeSymbol

    switch (buttonName) {
        case CLOSE:
            tempUnicodeSymbol = '\u274C'
            break
        case PREVIOUS:
            tempUnicodeSymbol = '\u276e'
            break
        case NEXT:
            tempUnicodeSymbol = '\u276f'
            break
    }

    return (
        <div className={`popup-button ${buttonName}-button`}>
            <a
                className={`popup-button-interactable enabled`}
                onClick={handlePopupButtonClick}
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
                onPopupButtonCloseClick,
                onPopupButtonPreviousClick,
                onPopupButtonNextClick,
                handlePopupContainerClick } = this.props

        return element && (
            <div className={`popup-wrapper ${className}`}>
                {showClose &&
                    <div className="popup-button close-button shadow"></div>
                }
                {showArrows &&
                    <div className="popup-button side-button previous-button shadow"></div>
                }
                {showArrows &&
                    <div className="popup-button side-button next-button shadow"></div>
                }
                <div
                    className={`popup-content-wrapper ${className}${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
                    onClick={handlePopupContainerClick}
                >
                    {element}
                    {showClose &&
                        <PopupButton
                            handlePopupButtonClick={onPopupButtonCloseClick}
                            buttonName={CLOSE}
                        />
                    }
                    {showArrows &&
                        <PopupButton
                            handlePopupButtonClick={onPopupButtonPreviousClick}
                            buttonName={PREVIOUS}
                        />
                    }
                    {showArrows &&
                        <PopupButton
                            handlePopupButtonClick={onPopupButtonNextClick}
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

    render() {
        const className = this.getClassName(),
            { accessedOn,
              accessedSectionKey,
              nextSectionKey,
              showClose,
              showArrows,
              onPopupButtonCloseClick,
              onPopupButtonPreviousClick,
              onPopupButtonNextClick,
              handlePopupContainerClick } = this.props,
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
                onPopupButtonCloseClick={onPopupButtonCloseClick}
                onPopupButtonPreviousClick={onPopupButtonPreviousClick}
                onPopupButtonNextClick={onPopupButtonNextClick}
                handlePopupContainerClick={handlePopupContainerClick}
            />
        )
    }
}

export default Popup
