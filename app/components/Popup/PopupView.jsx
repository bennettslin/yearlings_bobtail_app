import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PopupViewButton from './PopupViewButton'

const popupViewDefaultProps = {
    showClose: false,
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
    showClose: PropTypes.bool.isRequired,
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
    showClose,
    showArrows,
    handleCloseClick,
    handlePreviousClick,
    handleNextClick,
    handleContainerClick,
    children

}) => (
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
            />
        )}
        {showArrows && (
            <PopupViewButton
                isShadow
                isPreviousButton
            />
        )}
        {showArrows && (
            <PopupViewButton
                isShadow
                isNextButton
            />
        )}
        <div
            className={cx(
                'PopupViewContent',
                `${popupName}PopupViewContent`,
                { 'PopupViewContent__narrowPadding': hasNarrowPadding,
                  'PopupViewContent__widePadding': hasWidePadding },

                'boxShadow__popup'
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
        >
            {children}

            {showClose &&
                <PopupViewButton
                    accessKeysShown
                    isCloseButton
                    handlePopupButtonClick={handleCloseClick}
                />
            }
            {showArrows &&
                <PopupViewButton
                    accessKeysShown
                    isPreviousButton
                    handlePopupButtonClick={handlePreviousClick}
                />
            }
            {showArrows &&
                <PopupViewButton
                    accessKeysShown
                    isNextButton
                    handlePopupButtonClick={handleNextClick}
                />
            }
        </div>
    </div>
)

PopupView.defaultProps = popupViewDefaultProps
PopupView.propTypes = popupViewPropTypes

export default PopupView
