// Component to show selected verse when scrolled outside visible window.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import VerseUnit from '../verse/verse-unit'
import { getVerseObject } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const mapStateToProps = ({
    selectedSongIndex
}) => ({
    selectedSongIndex
})

class VerseBar extends Component {

    static defaultProps = {
        isAbove: false
    }

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,

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
                    'selectedSongIndex',
                    'verseIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {

        const { isAbove,

                selectedSongIndex,
                verseIndex,

                handleVerseBarSelect,
                handleVerseBarWheel,
                ...other } = this.props,

            verseObject = getVerseObject(selectedSongIndex, verseIndex)

        // Logue will not have verse object.
        return verseObject ? (
            <div
                className={classnames(
                    'verse-bar-block',
                    isAbove ? 'above' : 'below'
                )}
                onWheel={handleVerseBarWheel}
            >
                <div className="verse-bar"
                    onClick={handleVerseBarSelect}
                >
                    <VerseUnit {...other}
                        inVerseBar={true}
                        barVerseIndex={verseIndex}
                        verseObject={verseObject}
                    />
                </div>
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(VerseBar)
