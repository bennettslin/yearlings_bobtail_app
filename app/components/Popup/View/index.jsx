import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PopupViewButton from './Button'

const propTypes = {
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
        children: PropTypes.any.isRequired
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
        return (
            <div className={cx(
                'PopupView',
                `${popupName}View`,
                {
                    'PopupView__bounceAnimate': bounceAnimate,
                    'PopupView__shrinkAnimate': shrinkAnimate,
                    'PopupView__cardSize': isCardSize,
                    'PopupView__fullSize': isFullSize
                }
            )}>
                {Boolean(handleCloseClick) && (
                    <PopupViewButton
                        isCloseButton
                        {...{
                            inFullSize: isFullSize,
                            inCardSize: isCardSize,
                            displaysInOverlay,
                            handlePopupButtonClick: handleCloseClick
                        }}
                    />
                )}
                {Boolean(handlePreviousClick) && (
                    <PopupViewButton
                        isPreviousButton
                        {...{
                            inFullSize: isFullSize,
                            inCardSize: isCardSize,
                            displaysInOverlay,
                            handlePopupButtonClick: handlePreviousClick
                        }}
                    />
                )}
                {Boolean(handleNextClick) && (
                    <PopupViewButton
                        isNextButton
                        {...{
                            inFullSize: isFullSize,
                            inCardSize: isCardSize,
                            displaysInOverlay,
                            handlePopupButtonClick: handleNextClick
                        }}
                    />
                )}
                <div
                    className={cx(
                        'PopupViewContent',
                        `${popupName}ViewContent`,
                        {
                            'PopupViewContent__narrowPadding': hasNarrowPadding,
                            'PopupViewContent__widePadding': hasWidePadding
                        },

                        // !isFullSize && 'PopupViewContent__notFullSize',
                        'boxShadow__popupView'
                    )}
                    {...{
                        onClick: handleContainerClick
                    }}
                >
                    {children}
                </div>
            </div>
        )
    }

PopupView.propTypes = propTypes

export default memo(PopupView)
