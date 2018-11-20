import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PopupViewButton from './Button'

const popupViewPropTypes = {
        popupName: PropTypes.string.isRequired,
        displaysInOverlay: PropTypes.bool,
        bounceAnimate: PropTypes.bool,
        shrinkAnimate: PropTypes.bool,
        isCardSize: PropTypes.bool,
        isFullSize: PropTypes.bool,
        hasNarrowPadding: PropTypes.bool,
        hasWidePadding: PropTypes.bool,
        handleCloseClick: PropTypes.func,
        handlePreviousClick: PropTypes.func,
        handleNextClick: PropTypes.func,
        handleContainerClick: PropTypes.func.isRequired,
        children: PropTypes.element.isRequired
    },

    PopupView = ({

        popupName,
        displaysInOverlay,
        bounceAnimate,
        shrinkAnimate,
        isCardSize,
        isFullSize,
        hasNarrowPadding,
        hasWidePadding,
        handleCloseClick,
        handlePreviousClick,
        handleNextClick,
        handleContainerClick,
        children

    }) => {

        const
            showClose = Boolean(handleCloseClick),
            showPrevious = Boolean(handlePreviousClick),
            showNext = Boolean(handleNextClick)

        return (
            <div className={cx(
                'PopupView',
                `${popupName}PopupView`,

                {
                    'PopupView__bounceAnimate': bounceAnimate,
                    'PopupView__shrinkAnimate': shrinkAnimate,
                    'PopupView__cardSize': isCardSize,
                    'PopupView__fullSize': isFullSize
                }
            )}>
                {showClose &&
                <PopupViewButton
                    isCloseButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                    displaysInOverlay={displaysInOverlay}
                    handlePopupButtonClick={handleCloseClick}
                />
                }
                {showPrevious &&
                <PopupViewButton
                    isPreviousButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                    displaysInOverlay={displaysInOverlay}
                    handlePopupButtonClick={handlePreviousClick}
                />
                }
                {showNext &&
                <PopupViewButton
                    isNextButton
                    inFullSize={isFullSize}
                    inCardSize={isCardSize}
                    displaysInOverlay={displaysInOverlay}
                    handlePopupButtonClick={handleNextClick}
                />
                }
                <div
                    className={cx(
                        'PopupViewContent',
                        `${popupName}PopupViewContent`,
                        {
                            'PopupViewContent__narrowPadding': hasNarrowPadding,
                            'PopupViewContent__widePadding': hasWidePadding
                        },

                        !isFullSize && 'PopupViewContent__notFullSize',

                        // In other words, not annotation.
                        (hasNarrowPadding || hasWidePadding) &&
                        'boxShadow__popupView'
                    )}
                    onClick={handleContainerClick}
                    onTouchStart={handleContainerClick}
                >
                    {children}
                </div>
            </div>
        )
    }

PopupView.propTypes = popupViewPropTypes

export default PopupView
