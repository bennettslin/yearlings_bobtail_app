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
                    lastVerseObject = stanzaArray[stanzaArray.length - 1],
                    hasTopSideStanza = firstVerseObject instanceof Array,
                    hasBottomSideStanza = lastVerseObject instanceof Array

                // TODO: Create an about music link.

                return (
                    <div
                        key={stanzaIndex}
                        className="lyrics-unit"
                    >
                        <LyricsStanza
                            stanzaArray={stanzaArray}
                            onAnnotationClick={onAnnotationClick}
                        />
                        {/* Include side stanzas, if there are any. */}
                        {hasTopSideStanza || hasBottomSideStanza ?
                            <div className={`side-stanza${!hasTopSideStanza ? ' bottom-only' : ''}`}>
                                {hasTopSideStanza ?
                                    <LyricsStanza
                                    stanzaArray={firstVerseObject}
                                    onAnnotationClick={onAnnotationClick}
                                    /> : null
                                }
                                {hasBottomSideStanza ?
                                    <LyricsStanza
                                    stanzaArray={lastVerseObject}
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
