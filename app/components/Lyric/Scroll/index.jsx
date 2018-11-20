import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
// import debounce from 'debounce'

import Stanzas from '../../Stanzas'

import {
    getSongStanzaConfigs,
    getLastUnitDotCardIndex
} from 'helpers/dataHelper'
import {
    getPropsAreShallowEqual
} from 'helpers/generalHelper'

import TempGlobalAnnotations from './TempGlobalAnnotations';

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canLyricRender,
    renderedSongIndex
})

/*************
 * CONTAINER *
 *************/

class LyricScroll extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        isTransitioningHeight: PropTypes.bool.isRequired,
        completeHeightTransition: PropTypes.func.isRequired,
        handleLyricWheel: PropTypes.func.isRequired,
        setLyricRef: PropTypes.func.isRequired,
        setLyricVerseParentRef: PropTypes.func.isRequired
    }

    // Handle only once every 10ms at most.
    // _handleDebouncedWheel = debounce(
    //     this._handleDebouncedWheel, 10
    // )

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
        logger.warn('LyricScroll rendered.')

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

    _handleWheel = (e) => {
        // console.error('on wheel', e)
        this._handleDebouncedWheel(e)
    }

    _handleScroll = () => {
        // console.error('on scroll', this.lyricRef.scrollTop, e)
        // this._handleDebouncedWheel(e)
    }

    // NOTE: No longer using debounce. We'll keep as it is for now, though.
    _handleDebouncedWheel(e) {
        this.props.handleLyricWheel(e)
    }

    setLyricRef = (node) => {
        // For internal reference.
        // this.lyricRef = node

        // For keyboard events.
        this.props.setLyricRef(node)

        // For scrolling.
        this.props.setLyricVerseParentRef(node)
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                isTransitioningHeight,
                completeHeightTransition,
                handleLyricWheel,
                setLyricRef,
                setLyricVerseParentRef,
                dispatch,
                /* eslint-enable no-unused-vars */

                renderedSongIndex,
                ...other
            } = this.props,

            songStanzaConfigs = getSongStanzaConfigs(
                renderedSongIndex
            ),

            lastUnitDotCardIndex = getLastUnitDotCardIndex(
                renderedSongIndex
            )

        return songStanzaConfigs.length && (
            <div
                ref={this.setLyricRef}
                className={cx(
                    'LyricScroll',
                    'absoluteFullContainer',

                    // This gradient does not obscure the lyric toggle buttons.
                    'gradientMask__lyricColumn__mobileCollapsed'
                )}
                tabIndex="-1"
                onWheel={this._handleWheel}
                onScroll={this._handleScroll}
            >
                {/* TODO: Undo this. */}
                {false && (
                    <Stanzas {...other}
                        {...{
                            songStanzaConfigs,
                            lastUnitDotCardIndex
                        }}
                    />
                )}
                {true && (
                    <TempGlobalAnnotations />
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(LyricScroll)
