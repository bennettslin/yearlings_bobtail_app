// Container for lyrics that handles scrolling.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import omit from 'lodash.omit'
// import debounce from 'debounce'

import LyricStanza from './LyricStanza'
import { getLyricUnitsCount } from '../../helpers/dataHelper'
import { getArrayOfLength } from '../../helpers/generalHelper'

const mapStateToProps = ({
    renderableSongIndex
}) => ({
    renderableSongIndex
})

/*************
 * CONTAINER *
 *************/

class Lyric extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        isTransitioningHeight: PropTypes.bool.isRequired,
        completeHeightTransition: PropTypes.func.isRequired,
        handleLyricWheel: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleWheel = this._handleWheel.bind(this)

        // Handle only once every 10ms at most.
        // this._handleDebouncedWheel = debounce(
        //     this._handleDebouncedWheel, 10
        // )
    }

    /**
     * Not necessary to check shouldComponentUpdate, since the changed props
     * upon which to update are a subset of those in lyric column.
     */

    componentDidUpdate(prevProps) {
        if (
            this.props.isTransitioningHeight &&
            !prevProps.isTransitioningHeight
        ) {

            /**
             * We are calling this because collapsing and expanding the lyric
             * section may change the verse bar status.
             */
            this._handleWheel()
            this.props.completeHeightTransition()
        }
    }

    _handleWheel(e) {
        this._handleDebouncedWheel(e)
    }

    // NOTE: No longer using debounce. We'll keep as it is for now, though.
    _handleDebouncedWheel(e) {
        this.props.handleLyricWheel(e)
    }

    render() {
        const other = omit(this.props, [
            'isTransitioningHeight',
            'completeHeightTransition',
            'handleLyricWheel'
        ])

        return (
            <LyricView {...other}
                handleWheel={this._handleWheel}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const lyricViewPropTypes = {
    // Through Redux.
    renderableSongIndex: PropTypes.number.isRequired,

    // From parent.
    getLyricRef: PropTypes.func.isRequired,
    handleWheel: PropTypes.func.isRequired
},

LyricView = ({

    renderableSongIndex,

    getLyricRef,
    handleWheel,

...other }) => {

    const lyricUnitsCount = getLyricUnitsCount(renderableSongIndex),

        /**
         * Dynamically create array of just indices. Lyric unit will fetch
         * unit array directly from data helper.
         */
        lyricUnitsIndices = getArrayOfLength({
            length: lyricUnitsCount
        })

    return (
        <div
            ref={getLyricRef}
            className={cx(
                'Lyric',
                'LyricAnnotation__scrollParent',
                'Verse__scrollParent',

                // This gradient does not obscure the lyric toggle buttons.
                'gradientMask__lyricColumn__mobileCollapsed'
            )}
            tabIndex="-1"
            onWheel={handleWheel}
        >
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
