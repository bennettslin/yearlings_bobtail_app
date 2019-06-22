import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    isOdd: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired
}

const FilmstripCell = ({
    isOdd,
    isInteractivated,
    isSelected,
    isAfterSelected
}) => (
    <div
        {...{
            className: cx(
                'FilmstripCell',
                isOdd ?
                    'FilmstripCell__even' :
                    'FilmstripCell__odd',
                isInteractivated &&
                    'FilmstripCell__interactivated',
                isSelected &&
                    'FilmstripCell__selected',
                isAfterSelected &&
                    'FilmstripCell__afterSelected'
            )
        }}
    />
)

FilmstripCell.propTypes = propTypes

export default memo(FilmstripCell)
