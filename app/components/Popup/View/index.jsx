import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../DidMountHoc'
import PopupViewButton from './Button'
import './style'

const PopupView = ({
    didMount,
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

}) => (
    <div
        {...{
            className: cx(
                'PopupView',
                didMount && [
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
                ]
            )
        }}
    >
        {didMount && Boolean(handleCloseClick) && (
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
        {didMount && Boolean(handlePreviousClick) && (
            <PopupViewButton
                isPreviousButton
                {...{
                    inCardSize: isCardSize,
                    displaysInOverlay,
                    handlePopupButtonClick: handlePreviousClick
                }}
            />
        )}
        {didMount && Boolean(handleNextClick) && (
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
            {...{
                className: cx(
                    'PopupViewContent',
                    didMount && [
                        `${popupName}ViewContent`,
                        {
                            'PopupViewContent__narrowPadding': hasNarrowPadding,
                            'PopupViewContent__widePadding': hasWidePadding
                        },
                        !noBoxShadow && 'boxShadow__popupView'
                    ]
                ),
                onClick: handleContainerClick
            }}
        >
            {children}
        </div>
    </div>
)

PopupView.propTypes = {
    didMount: PropTypes.bool.isRequired,
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
}

export default memo(getDidMountHoc(PopupView))
