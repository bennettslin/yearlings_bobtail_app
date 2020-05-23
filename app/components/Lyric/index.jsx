// Container for lyric section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'

import CSSTransition from 'react-transition-group/CSSTransition'
import LyricAccess from './Access'
import LyricScroll from './Scroll'
import LyricToggles from './Toggles'
import VerseBar from './VerseBar'
import CarouselAccess from '../Carousel/Access'

import { populateRefs } from '../../helpers/ref'

const mapStateToProps = ({
    entranceStore: { canLyricCarouselEnter }
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
        updateEntranceStore: PropTypes.func.isRequired,

        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        logMount('Lyric')
    }

    _handleVerseBarWheel = (e) => {
        this.handleVerseBarWheel(e)
    }

    _handleTransitionExited = () => {
        this.props.updateEntranceStore({ didLyricExit: true })
    }

    _handleTransitionEntered = () => {
        this.props.updateEntranceStore({ didLyricEnter: true })
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        const {
            canLyricCarouselEnter,
            setLyricFocusElement
        } = this.props

        return (
            <>
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
                                'abF',
                                'ovH'
                            )
                        }}
                    >
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
                        <CarouselAccess inLyric />
                    </div>
                </CSSTransition>
            </>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateEntranceStore }
)(Lyric)
