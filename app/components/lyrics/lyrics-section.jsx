import React, { Component } from 'react'
import classnames from 'classnames'
import LyricsUnit from './lyrics-unit'
import { getLyricsArray } from '../../helpers/data-helper'
import { getSetsAreSame } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

const LyricsSection = (props) => (
    <LyricsSectionView {...props} />
)

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
        return !getSetsAreSame(this.props, nextProps)
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

        const { selectedSongIndex } = this.props,
            { fadingOut } = this.state,
            songLyrics = getLyricsArray(selectedSongIndex)

        return (
            <div
                ref={this.props.lyricSectionRef}
                className={classnames(
                    'section',
                    'lyrics-section',
                    'lyrics-scroll'
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
                                <LyricsUnit {...this.props}
                                    key={stanzaIndex}
                                    isTitleUnit={stanzaIndex === 0}
                                    stanzaArray={stanzaArray}
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
