// Container for lyrics that handles scrolling.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import LyricUnit from './lyric-unit'
import { getLyricUnitsCount } from '../../helpers/data-helper'
import { getArrayOfLength } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class LyricSection extends Component {

    constructor(props) {
        super(props)

        this._handleScroll = this._handleScroll.bind(this)
    }

    /**
     * Not necessary to check shouldComponentUpdate, since the changed props
     * upon which to update are a subset of those in lyric column.
     */

    componentWillReceiveProps(nextProps) {
        if (nextProps.isTransitioningHeight && !this.props.isTransitioningHeight) {
            this._handleScroll()
            this.props.completeHeightTransition()
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.appMounted && this.props.appMounted) {
            this._handleScroll()
        }
    }

    _handleScroll() {
        this.props.handleLyricSectionScroll()
    }

    render() {

        // Don't pass these props.
        /* eslint-disable no-unused-vars */
        const { appMounted,
                isTransitioningHeight,
                completeHeightTransition,
                handleLyricSectionScroll,
        /* eslint-enable no-unused-vars */
                ...other } = this.props

        return (
            <LyricSectionView {...other}
                handleScroll={this._handleScroll}
            />
        )
    }
}

LyricSection.propTypes = {
    // Through Redux.
    appMounted: PropTypes.bool.isRequired,

    // From parent.
    isTransitioningHeight: PropTypes.bool.isRequired,
    completeHeightTransition: PropTypes.func.isRequired,
    handleLyricSectionScroll: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const LyricSectionView = ({

    selectedSongIndex,

    lyricSectionRef,
    handleScroll,

...other }) => {

    const lyricUnitsCount = getLyricUnitsCount(selectedSongIndex),

        /**
         * Dynamically create array of just indices. Lyric unit will fetch
         * unit array directly from data helper.
         */
        lyricUnitsIndices = getArrayOfLength({
            length: lyricUnitsCount
        })

    return (
        <div
            ref={lyricSectionRef}
            className={classnames(
                'section',
                'lyric-section',
                'lyrics-scroll'
            )}
            tabIndex="-1"
            onScroll={handleScroll}
        >
            {/* Upon song change, scroll to element with this class name. */}
            <div className="lyrics-scroll-home" />
            <div className="lyric-block">
                {lyricUnitsIndices.map(unitIndex => (
                        <LyricUnit {...other}
                            key={unitIndex}
                            unitIndex={unitIndex}
                        />
                    )
                )}
            </div>
        </div>
    )
}

LyricSectionView.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    lyricSectionRef: PropTypes.func.isRequired,
    handleScroll: PropTypes.func.isRequired
}

export default connect(({
    appMounted,
    selectedSongIndex
}) => ({
    appMounted,
    selectedSongIndex
}))(LyricSection)
