/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
import React, { forwardRef, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Stanza from './Stanza'
import Unit from '../Unit'
import { getStanzaIndices } from '../../api/album/stanzas'
import { getLastUnitDotCardIndex } from '../../api/album/units'
import { scrollLyricToVerseInCallback } from '../../redux/scrollLyric/action'
import { mapLyricSongIndex } from '../../redux/lyric/selector'
import './style'

const Stanzas = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(mapLyricSongIndex)

    const handleVerseSelect = ({
        selectedVerseIndex,
        scrollLog
    }) => {
        dispatch(scrollLyricToVerseInCallback(
            scrollLog,
            selectedVerseIndex
        ))
    }

    const
        stanzaIndices = getStanzaIndices(lyricSongIndex),
        lastUnitDotCardIndex = getLastUnitDotCardIndex(lyricSongIndex)

    return stanzaIndices.length && (
        <div {...{ className: 'Stanzas' }} >
            {/* This is the unit title with first unit dot. */}
            <Unit
                {...{
                    ref,
                    unitIndex: 0
                }}
            />

            {stanzaIndices.map(stanzaIndex => (
                <Stanza
                    {...{
                        key: stanzaIndex,
                        ref,
                        stanzaIndex,
                        handleVerseSelect
                    }}
                />
            ))}

            {/* This is the last unit dot card, if there is one. */}
            {lastUnitDotCardIndex > -1 && (
                <Unit
                    {...{
                        ref,
                        unitIndex: lastUnitDotCardIndex
                    }}
                />
            )}
        </div>
    )
})

export default memo(Stanzas)
