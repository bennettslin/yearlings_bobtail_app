// Ensure child never mounts if conditional is not met.
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getDotForUnit } from '../../../../api/album/units'
import { mapLyricSongIndex } from '../../../../redux/lyric/selectors'
import { UnitDot } from '..'

const UnitDotParent = forwardRef(({ unitIndex }, ref) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        unitDot = getDotForUnit(lyricSongIndex, unitIndex)

    return Boolean(unitDot) && (
        <UnitDot
            {...{
                ref,
                unitIndex
            }}
        />
    )
})

UnitDotParent.propTypes = {
    unitIndex: PropTypes.number.isRequired
}

export default memo(UnitDotParent)
