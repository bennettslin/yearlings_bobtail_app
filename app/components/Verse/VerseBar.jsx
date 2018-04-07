// Component to show selected verse when scrolled outside visible window.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import VerseUnit from '../verse/VerseUnit'
import { getVerseObject } from '../../helpers/dataHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

class VerseBar extends Component {

    static defaultProps = {
        isAbove: false
    }

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,

        // From parent.
        isAbove: PropTypes.bool,
        verseIndex: PropTypes.number,
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
                     * These are passed strictly to tell verse bar when to
                     * update.
                     */
                    'renderReadySongIndex',
                    'verseIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const { isAbove,

                renderReadySongIndex,
                verseIndex,

                handleVerseBarSelect,
                handleVerseBarWheel,
                ...other } = this.props,

            verseObject = getVerseObject(renderReadySongIndex, verseIndex)

        // Logue will not have verse object.
        return verseObject ? (
            <div
                className={cx(
                    'VerseBar-block',
                    isAbove ? 'above' : 'below'
                )}
                onWheel={handleVerseBarWheel}
            >
                <div className="VerseBar"
                    onClick={handleVerseBarSelect}
                    onTouchStart={handleVerseBarSelect}
                >
                    <VerseUnit {...other}
                        inVerseBar
                        barVerseIndex={verseIndex}
                        verseObject={verseObject}
                    />
                </div>
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(VerseBar)
