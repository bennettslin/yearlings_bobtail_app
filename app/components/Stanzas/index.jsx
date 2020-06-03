/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import VerseDispatcher from '../../dispatchers/VerseDispatcher'
import Stanza from './Stanza'
import Unit from '../Unit'
import { getStanzaIndices } from '../../api/album/stanzas'
import { getLastUnitDotCardIndex } from '../../api/album/units'
import { mapLyricSongIndex } from '../../redux/lyric/selectors'
import './logic'
import './style'

const Stanzas = ({ setLyricAnnotationElement, setVerseRef }) => {
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
                    unitIndex: 0,
                    setLyricAnnotationElement
                }}
            />

            {stanzaIndices.map(stanzaIndex => (
                <Stanza
                    {...{
                        key: stanzaIndex,
                        stanzaIndex,
                        handleVerseSelect,
                        setLyricAnnotationElement,
                        setVerseRef
                    }}
                />
            ))}

            {/* This is the last unit dot card, if there is one. */}
            {lastUnitDotCardIndex > -1 && (
                <Unit
                    {...{
                        unitIndex: lastUnitDotCardIndex,
                        setLyricAnnotationElement
                    }}
                />
            )}
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </div>
    )
}

Stanzas.propTypes = {
    setLyricAnnotationElement: PropTypes.func.isRequired,
    setVerseRef: PropTypes.func.isRequired
}

export default memo(Stanzas)
