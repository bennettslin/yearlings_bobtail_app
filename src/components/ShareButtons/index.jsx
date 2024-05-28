import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import CopyUrlButton from './CopyUrlButton'
import getDidMountHoc from '../../hocs/DidMountHoc'
import {
    OVERVIEW_LOGUE_SOCIAL_MEDIA,
    PROMO_PAGE_SOCIAL_MEDIA,
    SHELF_LEFT_SOCIAL_MEDIA,
} from '../../constants/socialMedia'
import './style'

const ShareButtons = ({
    didMount,
    id,
    className,

}) => didMount && (
    <div
        {...{
            className: cx(
                'ShareButtons',
                id === SHELF_LEFT_SOCIAL_MEDIA &&
                    'ShareButtons__shelfLeft',
                (
                    id === OVERVIEW_LOGUE_SOCIAL_MEDIA ||
                    id === PROMO_PAGE_SOCIAL_MEDIA
                ) && 'ShareButtons__isBelowText',
                'fCC',
                className,
            ),
        }}
    >
        <CopyUrlButton {...{ id }} />
    </div>
)

ShareButtons.propTypes = {
    didMount: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default getDidMountHoc(ShareButtons)
