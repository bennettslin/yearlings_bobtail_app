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

        this.state = {
            lyricsScrollTop: 0
        }
    }

    shouldComponentUpdate(nextProps) {

        // console.error('this.props.isSelectedVerseAbove', this.props.isSelectedVerseAbove);
        // console.error('nextProps.isSelectedVerseAbove', nextProps.isSelectedVerseAbove);
        // console.error('this.props.isSelectedVerseBelow', this.props.isSelectedVerseBelow);
        // console.error('nextProps.isSelectedVerseBelow', nextProps.isSelectedVerseBelow);

        const shouldUpdate = this.props.isSelectedVerseAbove !== nextProps.isSelectedVerseAbove || this.props.isSelectedVerseBelow !== nextProps.isSelectedVerseBelow

        console.error('shouldUpdate section', shouldUpdate);

        return shouldUpdate
    }

    _handleScroll() {
        const lyricsScrollTop = this.mySection.scrollTop

        this.setState({
            lyricsScrollTop
        })
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

            ...other } = this.props,

            { lyricsScrollTop } = this.state

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
                                lyricsScrollTop={lyricsScrollTop}
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default LyricsSection
