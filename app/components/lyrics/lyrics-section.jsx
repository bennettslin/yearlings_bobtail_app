import React from 'react'
import LyricsStanza from './lyrics-stanza'
import { TOP_SIDE_VERSE_TIME, BOTTOM_SIDE_VERSE_TIME } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsSection = (props) => (
    <LyricsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const LyricsSectionView = ({

    // From props.
    songLyrics,
    onAnnotationClick

}) => (

    <div className="section lyrics-section">
        <h2>lyrics</h2>
        <div className="lyrics-block">
            {songLyrics.map((stanzaArray, stanzaIndex) => {

                /**
                 * Determine whether the first and last verse objects are side
                 * verse objects.
                 */
                const firstVerseObject = stanzaArray[0],
                    lastVerseObject = stanzaArray[stanzaArray.length - 1]

                let topSideVerseObject,
                    bottomSideVerseObject

                if (firstVerseObject.time === TOP_SIDE_VERSE_TIME) {
                    topSideVerseObject = stanzaArray.shift()
                }

                if (lastVerseObject.time === BOTTOM_SIDE_VERSE_TIME) {
                    bottomSideVerseObject = stanzaArray.pop()
                }

                // TODO: Create a side stanza component.
                // TODO: Create an about music link.

                return (
                    <div
                        key={stanzaIndex}
                        className="lyrics-card"
                    >
                        <LyricsStanza
                            stanzaArray={stanzaArray}
                            stanzaIndex={stanzaIndex}
                            onAnnotationClick={onAnnotationClick}
                        />
                    </div>
                )
            })}
        </div>
    </div>
)

export default LyricsSection
