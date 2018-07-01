// Container for lyrics that handles scrolling.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import omit from 'lodash.omit'
// import debounce from 'debounce'

import LyricStanza from './LyricStanza'
import { getLyricUnitsCount } from '../../helpers/dataHelper'
import {
    getArrayOfLength,
    getPropsAreShallowEqual
} from '../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableSongIndex
}) => ({
    canLyricRender,
    renderableSongIndex
})

/*************
 * CONTAINER *
 *************/

class Lyric extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        isTransitioningHeight: PropTypes.bool.isRequired,
        completeHeightTransition: PropTypes.func.isRequired,
        handleLyricWheel: PropTypes.func.isRequired,
        setLyricRef: PropTypes.func.isRequired,
        setLyricVerseParentRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleWheel = this._handleWheel.bind(this)
        this.setLyricRef = this.setLyricRef.bind(this)

        // Handle only once every 10ms at most.
        // this._handleDebouncedWheel = debounce(
        //     this._handleDebouncedWheel, 10
        // )
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    /**
     * Not necessary to check shouldComponentUpdate, since the changed props
     * upon which to update are a subset of those in lyric column.
     */

    componentDidUpdate(prevProps) {
        console.warn('Lyric rendered.')

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

    setLyricRef(node) {
        // For keyboard events.
        this.props.setLyricRef(node)

        // For scrolling.
        this.props.setLyricVerseParentRef(node)
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
                setRef={this.setLyricRef}
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
    setRef: PropTypes.func.isRequired,
    handleWheel: PropTypes.func.isRequired
},

LyricView = ({

    renderableSongIndex,

    setRef,
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
            ref={setRef}
            className={cx(
                'Lyric',

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
