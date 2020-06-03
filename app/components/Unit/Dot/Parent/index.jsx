// Ensure child never mounts if conditional is not met.
import React from 'react'
import { useSelector } from 'react-redux'
import { getDotForUnit } from '../../../../api/album/units'
import { mapLyricSongIndex } from '../../../../redux/lyric/selectors'
import { UnitDot, propTypes } from '..'

const UnitDotParent = ({
    unitIndex,
    setLyricAnnotationElement

}) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        unitDot = getDotForUnit(lyricSongIndex, unitIndex)

    return Boolean(unitDot) && (
        <UnitDot
            {...{
                unitIndex,
                setLyricAnnotationElement
            }}
        />
    )
}

UnitDotParent.propTypes = propTypes

export default UnitDotParent
