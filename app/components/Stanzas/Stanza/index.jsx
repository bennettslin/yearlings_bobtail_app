/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Unit from '../../Unit'
import { getUnitIndicesForStanza } from '../../../api/album/stanzas'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import './style'

const Stanza = forwardRef(({
    stanzaIndex,
    ...other

}, ref) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        stanzaUnitIndices = getUnitIndicesForStanza(
            lyricSongIndex,
            stanzaIndex
        )

    return (
        <div
            className={cx(
                'Stanza'
            )}
        >
            {stanzaUnitIndices.map(unitIndex => (
                <Unit {...other}
                    {...{
                        key: unitIndex,
                        ref,
                        unitIndex
                    }}
                />
            ))}
        </div>
    )
})

Stanza.propTypes = {
    stanzaIndex: PropTypes.number.isRequired
}

export default memo(Stanza)
