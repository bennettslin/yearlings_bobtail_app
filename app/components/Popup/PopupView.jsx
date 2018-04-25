import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PopupViewButton from './PopupViewButton'

const popupViewDefaultProps = {
    showArrows: false
},

popupViewPropTypes = {
    popupName: PropTypes.string.isRequired,
    bounceAnimate: PropTypes.bool,
    shrinkAnimate: PropTypes.bool,
    isCardSize: PropTypes.bool,
    isFullSize: PropTypes.bool,
    hasNarrowPadding: PropTypes.bool,
    hasWidePadding: PropTypes.bool,
    showArrows: PropTypes.bool.isRequired,
    handleCloseClick: PropTypes.func,
    handlePreviousClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    handleContainerClick: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
},

PopupView = ({

    popupName,
    bounceAnimate,
    shrinkAnimate,
    isCardSize,
    isFullSize,
    hasNarrowPadding,
    hasWidePadding,
    showArrows,
    handleCloseClick,
    handlePreviousClick,
    handleNextClick,
    handleContainerClick,
    children

}) => {

    const showClose = Boolean(handleCloseClick)

    return (
        <div className={cx(
            'PopupView',
            `${popupName}PopupView`,

            { 'PopupView__bounceAnimate': bounceAnimate,
              'PopupView__shrinkAnimate': shrinkAnimate,
              'PopupView__cardSize': isCardSize,
              'PopupView__fullSize': isFullSize }
        )}>
            {showClose && (
                <PopupViewButton
                    isShadow
                    isCloseButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                />
            )}
            {showArrows && (
                <PopupViewButton
                    isShadow
                    isPreviousButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                />
            )}
            {showArrows && (
                <PopupViewButton
                    isShadow
                    isNextButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                />
            )}
            <div
                className={cx(
                    'PopupViewContent',
                    `${popupName}PopupViewContent`,
                    { 'PopupViewContent__narrowPadding': hasNarrowPadding,
                      'PopupViewContent__widePadding': hasWidePadding },

                    !isFullSize && 'PopupViewContent__scrollIfFull',

                    'boxShadow__popup'
                )}
                onClick={handleContainerClick}
                onTouchStart={handleContainerClick}
            >
                {children}
            </div>
            {showClose &&
                <PopupViewButton
                    accessKeysShown
                    isCloseButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                    handlePopupButtonClick={handleCloseClick}
                />
            }
            {showArrows &&
                <PopupViewButton
                    accessKeysShown
                    isPreviousButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                    handlePopupButtonClick={handlePreviousClick}
                />
            }
            {showArrows &&
                <PopupViewButton
                    accessKeysShown
                    isNextButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                    handlePopupButtonClick={handleNextClick}
                />
            }
        </div>
    )
}

PopupView.defaultProps = popupViewDefaultProps
PopupView.propTypes = popupViewPropTypes

export default PopupView
