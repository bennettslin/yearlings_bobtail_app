import React from 'react'
import LyricsStanza from './lyrics-stanza'

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
                 * stanzas.
                 */
                const firstVerseObject = stanzaArray[0],
                    lastVerseObject = stanzaArray[stanzaArray.length - 1]

                let topSideStanzaArray,
                    bottomSideStanzaArray

                if (firstVerseObject instanceof Array) {
                    topSideStanzaArray = firstVerseObject
                }

                if (lastVerseObject instanceof Array) {
                    bottomSideStanzaArray = lastVerseObject
                }
                
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
                        {/* Include side stanzas, if there are any. */}
                        {topSideStanzaArray || bottomSideStanzaArray ?
                            <div className="side-stanza-block">
                                {topSideStanzaArray ?
                                    <LyricsStanza
                                    stanzaArray={topSideStanzaArray}
                                    stanzaIndex={stanzaIndex}
                                    onAnnotationClick={onAnnotationClick}
                                    /> : null
                                }
                                {bottomSideStanzaArray ?
                                    <LyricsStanza
                                    stanzaArray={bottomSideStanzaArray}
                                    stanzaIndex={stanzaIndex}
                                    onAnnotationClick={onAnnotationClick}
                                    /> : null
                                }
                            </div> : null
                        }
                    </div>
                )
            })}
        </div>
    </div>
)

export default LyricsSection
