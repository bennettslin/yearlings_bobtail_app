import React, { Component } from 'react'
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

        return (
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
                        verseObject={verseObject}
                    />
                </div>
            </div>
        )
    }
}

VerseBar.propTypes = {
    'selectedSongIndex': PropTypes.number.isRequired,
    'verseIndex': PropTypes.number,
    'hiddenLyricColumnKey': PropTypes.string.isRequired,

    isAbove: PropTypes.bool,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired
}

export default VerseBar
