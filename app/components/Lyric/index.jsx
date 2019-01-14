// Container for lyric section.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import Transition from 'react-transition-group/Transition'
import CSSTransition from 'react-transition-group/CSSTransition'
import VerseBarHandler from '../../handlers/VerseBar'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggleEar from './Toggle/Ear'
import LyricToggleExpand from './Toggle/Expand'
import LyricToggleScroll from './Toggle/Scroll'
import VerseBar from './VerseBar'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    viewportStore: { lyricDynamicHeightRatio },
    lyricStore: { canLyricCarouselEnter },
    toggleStore: { isLyricExpanded },
    responsiveStore: { isHeightlessLyric },
    mountStore: { canCarouselMount }
}) => ({
    lyricDynamicHeightRatio,
    canLyricCarouselEnter,
    isLyricExpanded,
    isHeightlessLyric,
    canCarouselMount
})

/*************
 * CONTAINER *
 *************/

class Lyric extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricDynamicHeightRatio: PropTypes.number.isRequired,
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        canCarouselMount: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Lyric')
    }

    determineVerseBars = () => {
        this.dispatchVerseBarsTimeout()
    }

    _handleVerseBarWheel = (e) => {
        this.handleVerseBarWheel(e)
    }

    _getVerseElement = (verseIndex) => {
        return this.getVerseElement(verseIndex)
    }

    _handleTransitionExited = () => {
        this.props.updateLyricStore({ didLyricExit: true })
    }

    _handleTransitionEntered = () => {
        this.props.updateLyricStore({ didLyricEnter: true })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
            canLyricCarouselEnter,
            isLyricExpanded,
            isHeightlessLyric,
            lyricDynamicHeightRatio,
            canCarouselMount,
            setLyricFocusElement
        } = this.props

        return (
            <___>
                <CSSTransition
                    mountOnEnter
                    {...{
                        in: canLyricCarouselEnter,
                        timeout: 250,
                        classNames: { enterDone: 'Lyric__visible' },
                        onExited: this._handleTransitionExited,
                        onEntered: this._handleTransitionEntered
                    }}
                >
                    <div
                        {...{
                            className: cx(
                                'Lyric',
                                'width__lyricColumn__desktop',
                                'position__lyricColumn__desktop',
                                'position__lyricColumn__mobile',
                                'gradientMask__lyricColumn__desktop'
                            )
                        }}
                        {...!canCarouselMount &&
                            !isLyricExpanded &&
                            !isHeightlessLyric && {
                            /**
                             * If lyric is expanded, height is straightforward,
                             * so we'll handle it in CSS instead.
                             */
                            style: {
                                height: `${lyricDynamicHeightRatio * 100}%`
                            }
                        }}
                    >
                        <VerseBarHandler
                            {...{
                                getRefs: this._getRefs,
                                getVerseElement: this._getVerseElement
                            }}
                        />
                        <LyricScroll
                            {...{
                                getRefs: this._getRefs,
                                determineVerseBars: this.determineVerseBars,
                                setLyricFocusElement
                            }}
                        />
                        <LyricToggleEar />
                        <LyricToggleExpand />
                        <LyricToggleScroll />
                        <LyricAccess />

                        {/* These are the only two flex children. */}
                        <VerseBar
                            isAbove
                            {...{
                                handleVerseBarWheel: this._handleVerseBarWheel
                            }}
                        />
                        <VerseBar
                            {...{
                                handleVerseBarWheel: this._handleVerseBarWheel
                            }}
                        />
                        <Transition
                            {...{
                                in: isLyricExpanded,
                                timeout: 200,
                                onExited: this.determineVerseBars,
                                onEntered: this.determineVerseBars
                            }}
                        >
                            <div
                                {...{ className: 'displayNoneContainer' }}
                            />
                        </Transition>
                    </div>
                </CSSTransition>
            </___>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateLyricStore }
)(Lyric)
