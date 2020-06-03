// Component to show selected verse when scrolled above or below window height.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import Transition from 'react-transition-group/Transition'
import ScrollVerseDispatcher from '../../../dispatchers/ScrollVerse'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'
import { getVerse } from '../../../api/album/verses'
import { getCursorIndex } from '../../../helpers/verse'
import { mapActivatedVerseIndex } from '../../../redux/activated/selectors'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapIsLyricLogue
} from '../../../redux/lyric/selectors'
import { mapSliderVerseIndex } from '../../../redux/slider/selectors'
import {
    mapIsVerseBarAbove,
    mapIsVerseBarBelow
} from '../../../redux/verseBars/selectors'

import './style'

const mapStateToProps = state => {
    const
        activatedVerseIndex = mapActivatedVerseIndex(state),
        lyricSongIndex = mapLyricSongIndex(state),
        lyricVerseIndex = mapLyricVerseIndex(state),
        isLyricLogue = mapIsLyricLogue(state),
        sliderVerseIndex = mapSliderVerseIndex(state),
        isVerseBarAbove = mapIsVerseBarAbove(state),
        isVerseBarBelow = mapIsVerseBarBelow(state)

    return {
        isLyricLogue,
        lyricSongIndex,
        lyricVerseIndex,
        activatedVerseIndex,
        sliderVerseIndex,
        isVerseBarAbove,
        isVerseBarBelow
    }
}

class VerseBar extends PureComponent {

    static defaultProps = {
        isAbove: false
    }

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricVerseIndex: PropTypes.number.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,

        // From parent.
        isAbove: PropTypes.bool.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired
    }

    _handleVerseBarSelect = e => {
        logEvent({ e, componentName: 'VerseBar' })
        if (this.getIsShownInVerseBar()) {
            this.dispatchScrollVerse()
        }
    }

    getIsShownInVerseBar() {
        const {
                isAbove,
                isVerseBarAbove,
                isVerseBarBelow
            } = this.props,
            isBelow = !isAbove

        return (
            isAbove &&
            isVerseBarAbove
        ) || (
            isBelow &&
            isVerseBarBelow
        )
    }

    getDispatchScrollVerse = dispatch => {
        this.dispatchScrollVerse = dispatch
    }

    render() {

        const {
                isAbove,
                isLyricLogue,
                lyricSongIndex,
                lyricVerseIndex,
                sliderVerseIndex,
                activatedVerseIndex,

                handleVerseBarWheel
            } = this.props,

            verseIndex = getCursorIndex(
                sliderVerseIndex,
                activatedVerseIndex,
                lyricVerseIndex
            ),

            isShownInVerseBar = this.getIsShownInVerseBar()

        // Logue will not have verse object.
        return !isLyricLogue && (
            <div
                className={cx(
                    'VerseBar',
                    'fontSize__verse',

                    isAbove ?
                        'VerseBar__above' :
                        'VerseBar__below',

                    {
                        'VerseBar__shown': isShownInVerseBar
                    }
                )}
                {...{
                    onWheel: handleVerseBarWheel,
                    onClick: this._handleVerseBarSelect
                }}
            >
                <div
                    className={cx(
                        'VerseBar__animatable',
                        isAbove ?
                            'VerseBar__animatable__above' :
                            'VerseBar__animatable__below'
                    )}
                >
                    <Transition
                        {...{
                            in: isShownInVerseBar,
                            timeout: 200
                        }}
                    >
                        <VerseHoc
                            inVerseBar
                            {...{
                                isShownInVerseBar,
                                verseIndex,
                                verseObject: getVerse(
                                    lyricSongIndex,
                                    verseIndex
                                ),
                                VerseComponent: Verse
                            }}
                        />
                    </Transition>
                </div>
                <ScrollVerseDispatcher {...{ ref: this.getDispatchScrollVerse }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(VerseBar)
