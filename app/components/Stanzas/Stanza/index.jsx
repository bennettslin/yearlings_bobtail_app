/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import Unit from '../../Unit'
import { getUnitIndicesForStanza } from '../../../album/api/stanzas'
import { getLogicClassNamesForStanza } from '../../../helpers/stanza'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import './style'

const Stanza = ({
    stanzaIndex,
    ...other

}) => {
    const
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        stanzaUnitIndices = getUnitIndicesForStanza(
            lyricSongIndex,
            stanzaIndex
        )

    return (
        <div
            className={cx(
                'Stanza',
                getLogicClassNamesForStanza(lyricSongIndex, stanzaIndex)
            )}
        >
            {stanzaUnitIndices.map(unitIndex => (
                <Unit {...other}
                    {...{
                        key: unitIndex,
                        unitIndex
                    }}
                />
            ))}
        </div>
    )
}

Stanza.propTypes = {
    stanzaIndex: PropTypes.number.isRequired
}

export default memo(Stanza)
