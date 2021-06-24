import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import CopyUrlButton from './CopyUrlButton'
import './style'

const SocialMediaButtons = ({
    className,
    annotationIndex,
    isLogueOverview,
    isPromoPage,
    isShelfLeft,
}) => (
    <div
        {...{
            className: cx(
                'SocialMediaButtons',
                Number.isFinite(annotationIndex) &&
                    'SocialMediaButtons__annotation',
                (
                    isLogueOverview || isPromoPage
                ) && 'SocialMediaButtons__isBelowText',
                isShelfLeft && 'SocialMediaButtons__shelfLeft',
                'fCC',
                className,
            ),
        }}
    >
        {isNaN(annotationIndex) && (
            <>
                <FacebookButton {...{ isPromoPage }} />
                <TwitterButton {...{ isPromoPage }} />
            </>
        )}
        <CopyUrlButton {...{ annotationIndex, isPromoPage }} />
    </div>
)

SocialMediaButtons.propTypes = {
    className: PropTypes.string,
    annotationIndex: PropTypes.number,
    isLogueOverview: PropTypes.bool,
    isPromoPage: PropTypes.bool,
    isShelfLeft: PropTypes.bool,
}

export default SocialMediaButtons
