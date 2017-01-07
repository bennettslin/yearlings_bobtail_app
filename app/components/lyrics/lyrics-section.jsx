import React, { Component } from 'react'
import LyricsUnit from './lyrics-unit'
import { LYRICS_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsSection = ({

    accessedOn,
    accessedSectionKey,
    nextSectionKey,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === LYRICS_SECTION,
        sectionNextHighlighted = accessedOn && nextSectionKey === LYRICS_SECTION

    return (
        <LyricsSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
            sectionNextHighlighted={sectionNextHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

class LyricsSectionView extends Component {

    constructor(props) {
        super(props)

        this._handleScroll = this._handleScroll.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        // FIXME: This isn't exactly right either.
        const shouldUpdate = this.props.isSelectedVerseAbove !== nextProps.isSelectedVerseAbove || this.props.isSelectedVerseBelow !== nextProps.isSelectedVerseBelow

        return shouldUpdate
        }

    _handleScroll() {
        // scrollTop needed for debugging only.
        // const lyricsScrollTop = this.mySection.scrollTop

        this.props.onLyricSectionScroll()
    }

    render() {

                // From props.
        const { isAdmin,
                songLyrics = [],
                showSingleLyricColumn,
                selectedLyricColumnIndex,

                // From controller.
                sectionAccessHighlighted,
                sectionNextHighlighted,

            ...other } = this.props

        console.error('render section');

        return (
            <div
                ref={(node) => (this.mySection = node)}
                className={`section lyrics-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}${showSingleLyricColumn ? ' single-column' : ''}`}
                onScroll={this._handleScroll}
            >
                {/* Upon song change, scroll to element with this class name. */}
                <div className="lyrics-scroll-home"></div>
                {isAdmin &&
                    <h2>lyrics</h2>
                }
                <div className="lyrics-block">
                    {songLyrics.map((stanzaArray, stanzaIndex) => (
                            <LyricsUnit {...other}
                                key={stanzaIndex}
                                showSingleLyricColumn={showSingleLyricColumn}
                                isTitleUnit={stanzaIndex === 0}
                                stanzaArray={stanzaArray}
                                selectedLyricColumnIndex={selectedLyricColumnIndex}
                                sectionAccessHighlighted={sectionAccessHighlighted}
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default LyricsSection
