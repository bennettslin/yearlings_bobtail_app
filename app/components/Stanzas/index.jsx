/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
import React, { forwardRef, memo, useRef } from 'react'
import PropTypes from 'prop-types'
import getSongServerClientHoc from '../../hocs/SongHoc'
import VerseDispatcher from '../../dispatchers/Verse'
import Stanza from './Stanza'
import Unit from '../Unit'
import { getStanzaIndices } from '../../api/album/stanzas'
import { getLastUnitDotCardIndex } from '../../api/album/units'
import './style'

const Stanzas = forwardRef(({ serverClientSongIndex }, ref) => {
    const dispatchVerse = useRef()

    const handleVerseSelect = ({
        scrollLog,
        verseIndex,
        fromActivated,
    }) => {
        dispatchVerse.current({
            scrollLog,
            verseIndex,
            fromActivated,
        })
    }

    const
        stanzaIndices = getStanzaIndices(serverClientSongIndex),
        lastUnitDotCardIndex = getLastUnitDotCardIndex(serverClientSongIndex)

    return stanzaIndices.length && (
        <>
            <div {...{ className: 'Stanzas' }}>
                {/* This is the unit title with first unit dot. */}
                <Unit
                    {...{
                        ref,
                        unitIndex: 0,
                    }}
                />

                {stanzaIndices.map(stanzaIndex => (
                    <Stanza
                        {...{
                            key: stanzaIndex,
                            ref,
                            stanzaIndex,
                            handleVerseSelect,
                        }}
                    />
                ))}

                {/* This is the last unit dot card, if there is one. */}
                {lastUnitDotCardIndex > -1 && (
                    <Unit
                        {...{
                            ref,
                            unitIndex: lastUnitDotCardIndex,
                        }}
                    />
                )}
            </div>
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </>
    )
})

Stanzas.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(Stanzas))
