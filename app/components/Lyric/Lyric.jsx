// Container for lyrics that handles scrolling.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import omit from 'lodash.omit'
import debounce from 'debounce'

import LyricStanza from './LyricStanza'
import { getLyricUnitsCount } from '../../helpers/dataHelper'
import { getArrayOfLength } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

/*************
 * CONTAINER *
 *************/

class Lyric extends Component {

    static propTypes = {
        // From parent.
        isTransitioningHeight: PropTypes.bool.isRequired,
        completeHeightTransition: PropTypes.func.isRequired,
        handleLyricWheel: PropTypes.func.isRequired
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

            this._handleScroll(false)
            this.props.completeHeightTransition()
        }
    }

    _handleScroll(isManualScroll) {
        this._handleDebouncedScroll(isManualScroll)
    }

    _handleDebouncedScroll(isManualScroll) {
        this.props.handleLyricWheel(isManualScroll)
    }

    render() {
        const other = omit(this.props, [
            'appMounted',
            'isTransitioningHeight',
            'completeHeightTransition',
            'handleLyricWheel'
        ])

        return (
            <LyricView {...other}
                handleScroll={this._handleScroll}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const lyricViewPropTypes = {
    // Through Redux.
    renderReadySongIndex: PropTypes.number.isRequired,

    // From parent.
    lyricRef: PropTypes.func.isRequired,
    handleScroll: PropTypes.func.isRequired
},

LyricView = ({

    renderReadySongIndex,

    lyricRef,
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
            ref={lyricRef}
            className={cx(
                'Lyric',
                'LyricAnnotation__scrollParent',
                'Verse__scrollParent',

                // This gradient does not obscure the lyric toggle buttons.
                'gradientMask__lyricColumn__mobileCollapsed'
            )}
            tabIndex="-1"
            onWheel={handleScroll}
        >
            {/* Upon song change, scroll to this heightless element. */}
            <div className="Verse__scrollChild" />

            <div className={cx(
                'Lyric__lyrics'
            )}>
                {lyricUnitsIndices.map(unitIndex => (
                        <LyricStanza {...other}
                            key={unitIndex}
                            unitIndex={unitIndex}
                            isLastStanza={unitIndex === lyricUnitsCount - 1}
                        />
                    )
                )}
            </div>
        </div>
    )
}

LyricView.propTypes = lyricViewPropTypes

export default connect(mapStateToProps)(Lyric)
