import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import CopyUrlButton from './CopyUrlButton'
import './style'

const SocialMediaButtons = ({ annotationIndex, isPromoPage }) => (
    <div
        {...{
            className: cx(
                'SocialMediaButtons',
                isPromoPage && 'SocialMediaButtons__promoPage',
                'fCC',
            ),
        }}
    >
        <CopyUrlButton {...{ annotationIndex, isPromoPage }} />
        {isNaN(annotationIndex) && (
            <>
                <TwitterButton {...{ isPromoPage }} />
                <FacebookButton {...{ isPromoPage }} />
            </>
        )}
    </div>
)

SocialMediaButtons.propTypes = {
    annotationIndex: PropTypes.number,
    isPromoPage: PropTypes.bool,
}

export default SocialMediaButtons
