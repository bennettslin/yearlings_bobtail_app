// Container for lyric section.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateLyricStore } from 'flux/lyric/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggles from './Toggles'
import VerseBar from './VerseBar'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    lyricStore: { canLyricCarouselEnter }
}) => ({
    canLyricCarouselEnter
})

/*************
 * CONTAINER *
 *************/

class Lyric extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        updateLyricStore: PropTypes.func.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount(Lyric.name)
    }

    _handleVerseBarWheel = (e) => {
        this.handleVerseBarWheel(e)
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
            setLyricFocusElement
        } = this.props

        return (
            <___>
                <CSSTransition
                    appear
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
                                'gradientMask__lyricColumn__desktop',
                                'abF'
                            )
                        }}
                    >
                        <LyricScroll
                            {...{
                                getRefs: this._getRefs,
                                determineVerseBars: this.determineVerseBars,
                                setLyricFocusElement
                            }}
                        />
                        <LyricToggles />
                        <LyricToggles isBottomRight />
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
