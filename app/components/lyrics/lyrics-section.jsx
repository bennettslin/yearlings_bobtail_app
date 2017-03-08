import React, { Component } from 'react'
import LyricsUnit from './lyrics-unit'
import { LYRICS_SECTION } from 'helpers/constants'
import { getPropsAreSame } from 'helpers/general-helper'

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

    // FIXME: Is this necessary?
    shouldComponentUpdate(nextProps) {
        return !getPropsAreSame(this.props, nextProps)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.handlingHeightTransition && !this.props.handlingHeightTransition) {
            this._handleScroll(true)
            this.props.completeHeightTransition()
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.appMounted && this.props.appMounted) {
            this._handleScroll()
        }
    }

    _handleScroll(fromHeightTransition) {
        const lyricColumnJustTransitioned = fromHeightTransition === true

        this.props.onLyricSectionScroll(this.mySection, undefined, lyricColumnJustTransitioned)
    }

    render() {

                // From props.
        const { songLyrics = [],
                showSingleLyricColumn,
                selectedLyricColumnIndex,

                // From controller.
                sectionAccessHighlighted,
                sectionNextHighlighted,

            ...other } = this.props

        return (
            <div
                ref={(node) => (this.mySection = node)}
                className={`section lyrics-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}${showSingleLyricColumn ? ' single-column' : ''}`}
                onScroll={this._handleScroll}
            >
                {/* Upon song change, scroll to element with this class name. */}
                <div className="lyrics-scroll-home"></div>
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
