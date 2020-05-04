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
        isFullWidth: PropTypes.bool,
        isFullHeight: PropTypes.bool,
        canBeFullHeight: PropTypes.bool,
        hasNarrowPadding: PropTypes.bool,
        hasWidePadding: PropTypes.bool,
        noBoxShadow: PropTypes.bool,
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
        isFullWidth,
        isFullHeight,
        canBeFullHeight,
        hasNarrowPadding,
        hasWidePadding,
        noBoxShadow,
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
                    'PopupView__fullWidth': isFullWidth,
                    'PopupView__fullHeight': isFullHeight,
                    'PopupView__canBeFullHeight':
                        canBeFullHeight || isFullHeight
                }
            )}>
                {Boolean(handleCloseClick) && (
                    <PopupViewButton
                        isCloseButton
                        {...{
                            isFullWidth,
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

                        !noBoxShadow && 'boxShadow__popupView'
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
