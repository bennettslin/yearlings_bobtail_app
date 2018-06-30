// Component to show selected verse when scrolled outside visible window.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import VerseController from '../Verse/VerseController'
import { getVerseObject } from '../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableSongIndex,
    renderableVerseIndex,
    sliderVerseIndex
}) => ({
    canLyricRender,
    renderableSongIndex,
    renderableVerseIndex,
    sliderVerseIndex
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

        // From parent.
        isAbove: PropTypes.bool.isRequired,
        handleVerseBarSelect: PropTypes.func.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate() {
        console.warn('VerseBar rendered.')
    }

    render() {

        const { isAbove,

                renderableSongIndex,
                renderableVerseIndex,
                sliderVerseIndex,

                handleVerseBarSelect,
                handleVerseBarWheel,
                ...other } = this.props,

            verseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex : renderableVerseIndex,

            verseObject = getVerseObject(renderableSongIndex, verseIndex)

        // Logue will not have verse object.
        return verseObject ? (
            <div
                className={cx(
                    'VerseBar',
                    'fontSize__verse',

                    isAbove ?
                        'VerseBar__above' :
                        'VerseBar__below'
                )}
                onWheel={handleVerseBarWheel}
                onClick={handleVerseBarSelect}
                onTouchStart={handleVerseBarSelect}
            >
                <div className={cx(
                    'VerseBar__animatable',
                    isAbove ?
                        'VerseBar__animatable__above' :
                        'VerseBar__animatable__below'
                )}>
                    <VerseController {...other}
                        inVerseBar
                        verseObject={verseObject}
                    />
                </div>
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(VerseBar)
