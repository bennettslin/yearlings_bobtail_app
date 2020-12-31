// Ensure child never mounts if conditional is not met.
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../../DidMountHoc'
import { getDotForUnit } from '../../../../api/album/units'
import { mapLyricSongIndex } from '../../../../redux/lyric/selector'
import { UnitDot } from '..'

const UnitDotParent = forwardRef(({ didMount, unitIndex }, ref) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        unitDot = getDotForUnit(lyricSongIndex, unitIndex)

    return didMount && Boolean(unitDot) && (
        <UnitDot
            {...{
                ref,
                unitIndex,
            }}
        />
    )
})

UnitDotParent.propTypes = {
    didMount: PropTypes.bool.isRequired,
    unitIndex: PropTypes.number.isRequired,
}

export default memo(getDidMountHoc(UnitDotParent))
