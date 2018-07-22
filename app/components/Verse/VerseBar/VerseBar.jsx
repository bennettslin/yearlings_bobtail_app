// Component to show selected verse when scrolled outside visible window.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseHoc from '../Hoc/VerseHoc'
import Verse from '../Verse'

import { getVerseObject } from '../../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableStore,
    sliderStore,
    isVerseBarAbove,
    isVerseBarBelow
}) => ({
    canLyricRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableVerseIndex: renderableStore.renderableVerseIndex,
    sliderVerseIndex: sliderStore.sliderVerseIndex,
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
        renderableSongIndex: PropTypes.number.isRequired,
        renderableVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,

        // From parent.
        isAbove: PropTypes.bool.isRequired,
        handleVerseBarSelect: PropTypes.func.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleVerseBarSelect = this._handleVerseBarSelect.bind(this)
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

    _handleVerseBarSelect() {
        const {
            isVerseBarAbove,
            isVerseBarBelow
        } = this.props

        /**
         * Prevent verse bar from being clicked if it's not shown, just as a
         * precaution. Shouldn't be interactive anyway, now that it has a
         * negative z-index.
         */
        if (isVerseBarAbove || isVerseBarBelow) {
            this.props.handleVerseBarSelect()
        }
    }

    render() {

        const {
            /* eslint-disable no-unused-vars */
            canLyricRender,
            handleVerseBarSelect,

            dispatch,
            /* eslint-enable no-unused-vars */

            isAbove,

            renderableSongIndex,
            renderableVerseIndex,
            sliderVerseIndex,

            handleVerseBarWheel,
            ...other
        } = this.props,

            verseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                renderableVerseIndex,

            verseObject = getVerseObject(renderableSongIndex, verseIndex)

        // Logue will not have verse object.
        return Boolean(verseObject) && (
            <div
                className={cx(
                    'VerseBar',
                    'fontSize__verse',

                    isAbove ?
                        'VerseBar__above' :
                        'VerseBar__below'
                )}
                onWheel={handleVerseBarWheel}
                onClick={this._handleVerseBarSelect}
                onTouchStart={this._handleVerseBarSelect}
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
            </div>
        )
    }
}

export default connect(mapStateToProps)(VerseBar)
