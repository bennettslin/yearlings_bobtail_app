import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Tracker from '../../../../Tracker'

const propTypes = {
    // From parent.
    isOdd: PropTypes.bool.isRequired,
    isActivatedScene: PropTypes.bool.isRequired,
    isSliderScene: PropTypes.bool.isRequired,
    isSelectedScene: PropTypes.bool.isRequired,
    isAfterCursor: PropTypes.bool.isRequired,
    cursorWidth: PropTypes.number
}

const FilmstripCell = ({
    isOdd,
    isActivatedScene,
    isSliderScene,
    isSelectedScene,
    isAfterCursor,
    cursorWidth

}) => (
    <div
        {...{
            className: cx(
                'FilmstripCell',
                isOdd && !isAfterCursor && 'FilmstripCell__oddBefore',
                !isOdd && !isAfterCursor && 'FilmstripCell__evenBefore',
                isOdd && isAfterCursor && 'FilmstripCell__oddAfter',
                !isOdd && isAfterCursor && 'FilmstripCell__evenAfter',
                (isActivatedScene || isSliderScene) &&
                    'FilmstripCell__lyricsLocked',
                isActivatedScene &&
                    'FilmstripCell__activated',
                isSliderScene &&
                    'FilmstripCell__slider',
                isSelectedScene &&
                    'FilmstripCell__selected',
                'ovH'
            )
        }}
    >
        {Boolean(cursorWidth) && (
            <div
                {...{
                    className: cx(
                        'FilmstripCell__trackerContainer',
                        'abF'
                    )
                }}
            >
                <Tracker {...{ cursorWidth }} />
            </div>
        )}
    </div>
)

FilmstripCell.propTypes = propTypes

export default memo(FilmstripCell)
