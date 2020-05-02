import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Tracker from '../../../../Tracker'

const propTypes = {
    // From parent.
    isOdd: PropTypes.bool.isRequired,
    isActivated: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    cursorWidth: PropTypes.number
}

const FilmstripCell = ({
    isOdd,
    isActivated,
    isSelected,
    isAfterSelected,
    cursorWidth

}) => (
    <div
        {...{
            className: cx(
                'FilmstripCell',
                isOdd ?
                    'FilmstripCell__even' :
                    'FilmstripCell__odd',
                isActivated && !isSelected &&
                    'FilmstripCell__activated',
                isSelected &&
                    'FilmstripCell__selected',
                isAfterSelected &&
                    'FilmstripCell__afterSelected',
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
