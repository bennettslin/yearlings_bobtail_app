import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import CopyUrlButton from './CopyUrlButton'
import './style'
import { ANNOTATION_SOCIAL_MEDIA, OVERVIEW_LOGUE_SOCIAL_MEDIA, PROMO_PAGE_SOCIAL_MEDIA, SHELF_LEFT_SOCIAL_MEDIA } from '../../constants/socialMedia'

const SocialMediaButtons = ({
    id,
    className,
    annotationIndex,
}) => {
    const isShelfLeft = id === SHELF_LEFT_SOCIAL_MEDIA

    return (
        <div
            {...{
                className: cx(
                    'SocialMediaButtons',
                    id === ANNOTATION_SOCIAL_MEDIA &&
                        'SocialMediaButtons__annotation',
                    isShelfLeft &&
                        'SocialMediaButtons__shelfLeft',
                    (
                        id === OVERVIEW_LOGUE_SOCIAL_MEDIA ||
                        id === PROMO_PAGE_SOCIAL_MEDIA
                    ) && 'SocialMediaButtons__isBelowText',
                    'fCC',
                    className,
                ),
            }}
        >
            {isNaN(annotationIndex) && (
                <>
                    {/* Allow tooltips to always be on top. */}
                    {isShelfLeft && <TwitterButton {...{ id }} />}
                    <FacebookButton {...{ id }} />
                    {!isShelfLeft && <TwitterButton {...{ id }} />}
                </>
            )}
            <CopyUrlButton {...{ id, annotationIndex }} />
        </div>
    )
}

SocialMediaButtons.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    annotationIndex: PropTypes.number,
}

export default SocialMediaButtons
