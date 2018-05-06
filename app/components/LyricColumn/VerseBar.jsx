// Component to show selected verse when scrolled outside visible window.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import VerseController from '../Verse/VerseController'
import { getVerseObject } from '../../helpers/dataHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex,
    selectedVerseIndex,
    sliderVerseIndex
}) => ({
    renderReadySongIndex,
    selectedVerseIndex,
    sliderVerseIndex
})

class VerseBar extends Component {

    static defaultProps = {
        isAbove: false
    }

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,

        // From parent.
        isAbove: PropTypes.bool,
        handleVerseBarSelect: PropTypes.func.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    /**
                     * This is passed strictly to tell verse bar when to
                     * update.
                     */
                    'renderReadySongIndex',
                    'selectedVerseIndex',
                    'sliderVerseIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const { isAbove,

                renderReadySongIndex,
                selectedVerseIndex,
                sliderVerseIndex,

                handleVerseBarSelect,
                handleVerseBarWheel,
                ...other } = this.props,

            verseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex : selectedVerseIndex,

            verseObject = getVerseObject(renderReadySongIndex, verseIndex)

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
                <VerseController {...other}
                    inVerseBar
                    barVerseIndex={verseIndex}
                    verseObject={verseObject}
                />
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(VerseBar)
