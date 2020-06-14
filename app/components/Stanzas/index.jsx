/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useRef, memo } from 'react'
import { useSelector } from 'react-redux'
import VerseDispatcher from '../../dispatchers/Verse'
import Stanza from './Stanza'
import Unit from '../Unit'
import { getStanzaIndices } from '../../api/album/stanzas'
import { getLastUnitDotCardIndex } from '../../api/album/units'
import { mapLyricSongIndex } from '../../redux/lyric/selector'
import './style'

const Stanzas = forwardRef((props, ref) => {
    const
        dispatchVerse = useRef(),
        lyricSongIndex = useSelector(mapLyricSongIndex)

    const handleVerseSelect = ({
        selectedVerseIndex,
        scrollLog
    }) => {
        dispatchVerse.current({
            selectedVerseIndex,
            scrollLog
        })
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
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </div>
    )
})

export default memo(Stanzas)
