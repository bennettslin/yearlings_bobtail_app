// Container for lyrics that handles scrolling.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import debounce from 'debounce'

import LyricUnit from './lyric-unit'
import { getLyricUnitsCount } from '../../helpers/dataHelper'
import { getArrayOfLength } from '../../helpers/generalHelper'

const mapStateToProps = ({
    appMounted,
    renderReadySongIndex
}) => ({
    appMounted,
    renderReadySongIndex
})

/*************
 * CONTAINER *
 *************/

class LyricSection extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,

        // From parent.
        isTransitioningHeight: PropTypes.bool.isRequired,
        completeHeightTransition: PropTypes.func.isRequired,
        handleLyricSectionScroll: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleScroll = this._handleScroll.bind(this)

        // Handle only once every 10ms at most.
        this._handleDebouncedScroll = debounce(
            this._handleDebouncedScroll, 10
        )
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
        this._handleDebouncedScroll()
    }

    _handleDebouncedScroll() {
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

/****************
 * PRESENTATION *
 ****************/

const lyricSectionViewPropTypes = {
    // Through Redux.
    renderReadySongIndex: PropTypes.number.isRequired,

    // From parent.
    lyricSectionRef: PropTypes.func.isRequired,
    handleScroll: PropTypes.func.isRequired
},

LyricSectionView = ({

    renderReadySongIndex,

    lyricSectionRef,
    handleScroll,

...other }) => {

    const lyricUnitsCount = getLyricUnitsCount(renderReadySongIndex),

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
            className={cx(
                'section',
                'lyric-section',
                'lyrics-scroll',
                'lyric-collapsed-gradient-mask'
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

LyricSectionView.propTypes = lyricSectionViewPropTypes

export default connect(mapStateToProps)(LyricSection)
