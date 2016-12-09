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
            className={`popup-button ${buttonName}-button enabled`}
            onClick={onClick}
        >
            {tempUnicodeSymbol}
        </a>
    )
}

class PopupTransitionGroup extends Component {

    _getContainerElement(element) {
        const { className,
                hideClose,
                showArrows,
                sectionAccessHighlighted,
                sectionNextHighlighted,
                onPopupButtonClick } = this.props

        return element ? (
            <div
                className={`popup-content-wrapper ${className}${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                {!hideClose ?
                    <PopupButton
                        onPopupButtonClick={onPopupButtonClick}
                        buttonName={CLOSE}
                    /> : null
                }
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
              hideClose,
              showArrows } = this.props,
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
                hideClose={hideClose}
                showArrows={showArrows}
                onPopupButtonClick={this.onPopupButtonClick}
            />
        )
    }
}

export default Popup
