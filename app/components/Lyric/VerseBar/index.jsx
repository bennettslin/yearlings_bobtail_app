// Component to show selected verse when scrolled outside visible window.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Transition from 'react-transition-group/Transition'
import ScrollVerseDispatcher from '../../../dispatchers/ScrollVerseDispatcher'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'

import { getVerseObject } from 'helpers/data'
import { getPropsAreShallowEqual } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: {
        renderedSongIndex,
        renderedVerseIndex
    },
    sliderStore: { sliderVerseIndex },
    verseBarsStore: {
        isVerseBarAbove,
        isVerseBarBelow
    }
}) => ({
    canLyricRender,
    renderedSongIndex,
    renderedVerseIndex,
    sliderVerseIndex,
    isVerseBarAbove,
    isVerseBarBelow
})

class VerseBar extends Component {

    static defaultProps = {
        isAbove: false
    }

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,

        // From parent.
        isAbove: PropTypes.bool.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleVerseBarSelect = () => {
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

        return (isAbove && isVerseBarAbove) || (isBelow && isVerseBarBelow)
    }

    render() {

        const {
                isAbove,
                renderedSongIndex,
                renderedVerseIndex,
                sliderVerseIndex,

                handleVerseBarWheel
            } = this.props,

            verseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                renderedVerseIndex,

            verseObject = getVerseObject(renderedSongIndex, verseIndex),

            isShown = this.getIsShown()

        // Logue will not have verse object.
        return Boolean(verseObject) && (
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
                    onClick: this._handleVerseBarSelect,
                    onTouchStart: this._handleVerseBarSelect
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
                        mountOnEnter
                        unmountOnExit
                        {...{
                            in: isShown,
                            timeout: 200
                        }}
                    >
                        <VerseHoc
                            inVerseBar
                            {...{
                                verseIndex,
                                verseObject,
                                VerseComponent: Verse
                            }}
                        />
                    </Transition>
                </div>
                <ScrollVerseDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(VerseBar)
