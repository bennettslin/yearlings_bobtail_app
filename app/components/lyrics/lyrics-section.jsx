import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import LyricsUnit from './lyrics-unit'
import { getPropsAreSame } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

const LyricsSection = (props) => (
    <LyricsSectionView {...props} />
)

LyricsSection.propTypes = {
    songLyrics: PropTypes.array,
    showSingleLyricColumn: PropTypes.bool.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired
}

/****************
 * PRESENTATION *
 ****************/

class LyricsSectionView extends Component {

    constructor(props) {
        super(props)

        this._handleScroll = this._handleScroll.bind(this)
        // this._handleFadeout = this._handleFadeout.bind(this)

        this.state = {
            // fadingOut: false,
            // fadeOutTimer: null
        }
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreSame(this.props, nextProps)
            // || (!nextState.fadingOut && this.state.fadingOut)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.handlingHeightTransition && !this.props.handlingHeightTransition) {
            this._handleScroll()
            this.props.completeHeightTransition()
        }

        // if (nextProps.selectedSongIndex !== this.props.selectedSongIndex) {
        //
        //     const fadeOutTimer = setTimeout(this._handleFadeout.bind(this, true), 150)
        //
        //     if (this.state.fadeOutTimer) {
        //         clearTimeout(this.state.fadeOutTimer)
        //     }
        //
        //     this.setState({
        //         fadingOut: true,
        //         fadeOutTimer
        //     })
        // }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.appMounted && this.props.appMounted) {
            this._handleScroll()
        }
    }

    _handleScroll() {
        this.props.handleLyricSectionScroll()
    }

    _handleFadeout() {

        // if (e === true || e.propertyName === 'opacity' && e.target === this.mySubsection) {
        //     this.setState({
        //         fadingOut: false,
        //         fadeOutTimer: null
        //     })
        // }
    }

    render() {

                // From props.
        const { songLyrics = [],
                showSingleLyricColumn,
                selectedLyricColumnIndex,

            ...other } = this.props,

            { fadingOut } = this.state

        return (
            <div
                ref={this.props.lyricSectionRef}
                className={classnames(
                    'section',
                    'lyrics-section',
                    'lyrics-scroll',
                    { 'single-column': showSingleLyricColumn }
                )}
                tabIndex="-1"
                onScroll={() => this._handleScroll()}
            >
                {/* This lyrics subsection exists solely to animate lyrics to side when a new song is selected. */}
                <div
                    ref={(node) => (this.mySubsection = node)}
                    className={classnames(
                        'lyrics-song-subsection',
                        { 'fading-out': fadingOut }
                    )}
                    onTransitionEnd={e => this._handleFadeout(e)}
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
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default LyricsSection
