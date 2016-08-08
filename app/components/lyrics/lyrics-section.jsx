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
                // TODO: Extract lyrics unit to its own component.
                // TODO: Allow lyrics container to wrap main stanza in its own container when there is a side stanza, to fix stanza 100% height issue. (Don't leave it as it is here, because it's a wasted container when it's not needed.)

                // TODO: Need a better way to determine side stanza, to distinguish it from music link, and to determine whether it's a top or bottom stanza.

                return (
                    <div
                        key={stanzaIndex}
                        className="lyrics-unit"
                    >
                        <div className="main-stanza">
                            <LyricsStanza
                                stanzaArray={stanzaArray}
                                onAnnotationClick={onAnnotationClick}
                            />
                        </div>
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
