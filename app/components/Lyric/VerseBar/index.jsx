// Component to show selected verse when scrolled above or below window height.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Transition from 'react-transition-group/Transition'
import ScrollVerseDispatcher from '../../../dispatchers/ScrollVerseDispatcher'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'

import { getVerse } from '../../../album/api/verses'
import { populateRefs } from '../../../helpers/ref'
import { getCursorIndex } from '../../../helpers/verse'

const mapStateToProps = ({
    lyricStore: {
        isLyricLogue,
        lyricSongIndex,
        lyricVerseIndex
    },
    activatedStore: { activatedVerseIndex },
    sliderStore: { sliderVerseIndex },
    verseBarsStore: {
        isVerseBarAbove,
        isVerseBarBelow
    }
}) => {
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
        if (this.getIsShown()) {
            this.dispatchScrollVerse()
        }
    }

    getIsShown() {
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

    _getRefs = payload => {
        populateRefs(this, payload)
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

            isShown = this.getIsShown()

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
                        'VerseBar__shown': isShown
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
                            in: isShown,
                            timeout: 200
                        }}
                    >
                        <VerseHoc
                            inVerseBar
                            {...{
                                isShownInVerseBar: isShown,
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
                <ScrollVerseDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(VerseBar)
