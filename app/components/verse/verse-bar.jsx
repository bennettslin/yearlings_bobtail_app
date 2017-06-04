import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import VerseUnit from '../verse/verse-unit'
import { getVerseObject } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class VerseBar extends Component {

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
                    'verseIndex',

                    'hiddenLyricColumnKey'
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

VerseBar.propTypes = {
    // Through Redux.
    'selectedSongIndex': PropTypes.number.isRequired,

    // From parent.
    'verseIndex': PropTypes.number,
    'hiddenLyricColumnKey': PropTypes.string.isRequired,

    isAbove: PropTypes.bool,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(VerseBar)
