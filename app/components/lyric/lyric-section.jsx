import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import LyricUnit from './lyric-unit'
import { getLyricsArray } from '../../helpers/data-helper'

/*************
 * CONTAINER *
 *************/

class LyricSection extends Component {

    constructor(props) {
        super(props)

        this._handleScroll = this._handleScroll.bind(this)
    }

    /**
     * Not necessary to check shouldComponentUpdate, since the changed props
     * upon which to update are a subset of those in lyric column.
     */

    componentWillReceiveProps(nextProps) {
        if (nextProps.handlingHeightTransition && !this.props.handlingHeightTransition) {
            this._handleScroll()
            this.props.completeHeightTransition()
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.appMounted && this.props.appMounted) {
            this._handleScroll()
        }
    }

    _handleScroll() {
        this.props.handleLyricSectionScroll()
    }

    render() {
        const { props } = this,
            lyricsArray = getLyricsArray(props.selectedSongIndex)

        return (
            <LyricSectionView {...props}
                lyricsArray={lyricsArray}
                handleScroll={this._handleScroll}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const LyricSectionView = ({

    lyricsArray,
    lyricSectionRef,
    handleScroll,

...other }) => (
    <div
        ref={lyricSectionRef}
        className={classnames(
            'section',
            'lyric-section',
            'lyrics-scroll'
        )}
        tabIndex="-1"
        onScroll={handleScroll}
    >
        {/* Upon song change, scroll to element with this class name. */}
        <div className="lyrics-scroll-home"></div>
        <div className="lyric-block">
            {lyricsArray.map((stanzaArray, unitIndex) => (
                    <LyricUnit {...other}
                        key={unitIndex}
                        unitIndex={unitIndex}
                        stanzaArray={stanzaArray}
                    />
                )
            )}
        </div>
    </div>
)

LyricSectionView.propTypes = {
    lyricsArray: PropTypes.array.isRequired,
    lyricSectionRef: PropTypes.func.isRequired,
    handleScroll: PropTypes.func.isRequired
}

export default LyricSection
