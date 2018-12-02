// Component to show selected verse when scrolled outside visible window.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

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
    toggleStore: {
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
        const {
                isVerseBarAbove,
                isVerseBarBelow
            } = this.props,
            {
                isVerseBarAbove: willBeVerseBarAbove,
                isVerseBarBelow: willBeVerseBarBelow
            } = nextProps

        if (
            // No point in updating if it remains unshown.
            !isVerseBarAbove &&
            !isVerseBarBelow &&
            !willBeVerseBarAbove &&
            !willBeVerseBarBelow
        ) {
            return false
        }

        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps,
            alwaysBypassCheck: {
                isAbove: true
            }
        })
    }

    _handleVerseBarSelect = () => {
        const {
                isAbove,
                isVerseBarAbove,
                isVerseBarBelow
            } = this.props,

            isBelow = !isAbove

        /**
         * Prevent verse bar from being clicked if it's not shown, just as a
         * precaution. Shouldn't be interactive anyway, now that it has a
         * negative z-index.
         */
        if (
            (isAbove && isVerseBarAbove) ||
            (isBelow && isVerseBarBelow)
        ) {
            this.dispatchScrollVerse()
        }
    }

    render() {

        const {
            /* eslint-disable no-unused-vars */
                canLyricRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                isAbove,
                isVerseBarAbove,
                isVerseBarBelow,

                renderedSongIndex,
                renderedVerseIndex,
                sliderVerseIndex,

                handleVerseBarWheel,
                ...other
            } = this.props,

            verseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                renderedVerseIndex,

            verseObject = getVerseObject(renderedSongIndex, verseIndex)

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
                        'VerseBar__shown':
                            (isAbove && isVerseBarAbove) ||
                            (!isAbove && isVerseBarBelow)
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
                    <VerseHoc {...other}
                        inVerseBar
                        {...{
                            verseIndex,
                            verseObject,
                            VerseComponent: Verse
                        }}
                    />
                </div>
                <ScrollVerseDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(VerseBar)
