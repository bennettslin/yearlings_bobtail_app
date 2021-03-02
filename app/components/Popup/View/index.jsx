import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../DidMountHoc'
import PopupViewButton from './Button'
import './style'

const PopupView = ({
    didMount,
    popupName,
    popupMaxHeight,
    displaysInOverlay,
    bounceAnimate,
    shrinkAnimate,
    isCardSize,
    isFullPopup,
    isPitchPopup,
    canBeFullHeight,
    hasNarrowPadding,
    hasWidePadding,
    noBoxShadow,
    noOverflowHidden,
    handleCloseClick,
    handlePreviousClick,
    handleNextClick,
    handleContainerClick,
    children,

}) => (
    <div
        {...{
            className: cx(
                didMount && [
                    'PopupView',
                    `${popupName}View`,
                    {
                        'PopupView__bounceAnimate': bounceAnimate,
                        'PopupView__shrinkAnimate': shrinkAnimate,
                        'PopupView__cardSize': isCardSize,
                        'popupView__fullWidth': isFullPopup,
                        'popupView__fullHeight': isFullPopup,
                        'popupView__pitchWidth': isPitchPopup,
                        'PopupView__canBeFullHeight':
                            canBeFullHeight || isFullPopup,
                    },
                ],
            ),
        }}
    >
        {didMount && Boolean(handleCloseClick) && (
            <PopupViewButton
                isCloseButton
                {...{
                    isFullPopup,
                    inCardSize: isCardSize,
                    displaysInOverlay,
                    handlePopupButtonClick: handleCloseClick,
                }}
            />
        )}
        {didMount && Boolean(handlePreviousClick) && (
            <PopupViewButton
                isPreviousButton
                {...{
                    inCardSize: isCardSize,
                    displaysInOverlay,
                    handlePopupButtonClick: handlePreviousClick,
                }}
            />
        )}
        {didMount && Boolean(handleNextClick) && (
            <PopupViewButton
                isNextButton
                {...{
                    inCardSize: isCardSize,
                    displaysInOverlay,
                    handlePopupButtonClick: handleNextClick,
                }}
            />
        )}
        <div
            {...{
                className: cx(
                    didMount && [
                        'PopupViewContent',
                        `${popupName}ViewContent`,
                        {
                            'PopupViewContent__narrowPadding': hasNarrowPadding,
                            'PopupViewContent__widePadding': hasWidePadding,
                        },
                        !noBoxShadow && 'boxShadow__popupView',
                        !noOverflowHidden && 'PopupViewContent__noOverflowHidden',
                    ],
                ),
                ...Number.isFinite(popupMaxHeight) && {
                    style: {
                        maxHeight: `${popupMaxHeight}px`,
                    },
                },
                onClick: handleContainerClick,
            }}
        >
            {children}
        </div>
    </div>
)

PopupView.propTypes = {
    didMount: PropTypes.bool.isRequired,
    popupName: PropTypes.string.isRequired,
    popupMaxHeight: PropTypes.number,
    displaysInOverlay: PropTypes.bool,
    bounceAnimate: PropTypes.bool,
    shrinkAnimate: PropTypes.bool,
    isCardSize: PropTypes.bool,
    isFullPopup: PropTypes.bool,
    isPitchPopup: PropTypes.bool,
    canBeFullHeight: PropTypes.bool,
    hasNarrowPadding: PropTypes.bool,
    hasWidePadding: PropTypes.bool,
    noBoxShadow: PropTypes.bool,
    noOverflowHidden: PropTypes.bool,
    handleCloseClick: PropTypes.func,
    handlePreviousClick: PropTypes.func,
    handleNextClick: PropTypes.func,
    handleContainerClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
}

export default memo(getDidMountHoc(PopupView))
