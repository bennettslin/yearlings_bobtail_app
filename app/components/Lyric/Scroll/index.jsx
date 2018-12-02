import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import ScrollLyricListener from '../../../listeners/ScrollLyricListener'
import VerseBarListener from '../../../listeners/VerseBarListener'
import LyricWheelDispatcher from '../../../dispatchers/LyricWheelDispatcher'
import Stanzas from '../../Stanzas'

import { getSongStanzaConfigs } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getLastUnitDotCardIndex } from './helper'

import TempGlobalAnnotations from './TempGlobalAnnotations'

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
        setLyricElement: PropTypes.func.isRequired
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
        this.dispatchLyricWheel(e, this.lyricElement)
    }

    _setLyricElement = (node) => {
        // For lyric wheel.
        this.lyricElement = node

        // For focus and verse wheel.
        this.props.setLyricElement(node)

        // For scrolling.
        return this.setLyricParent(node)
    }

    _setVerseElement = (payload) => {
        return this.setVerseElement(payload)
    }

    _setLyricAnnotationElement = (payload) => {
        return this.setLyricAnnotationElement(payload)
    }

    _getVerseElement = (verseIndex) => {
        // Verse elements are stored in scroll lyric listener.
        return this.getVerseElement(verseIndex)
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                isTransitioningHeight,
                completeHeightTransition,
                setLyricElement,
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
            <___>
                <ScrollLyricListener {...{ parentThis: this }} />
                <VerseBarListener
                    {...{ getVerseElement: this._getVerseElement }}
                />
                <div
                    ref={this._setLyricElement}
                    className={cx(
                        'LyricScroll',
                        'absoluteFullContainer',

                        // This gradient does not obscure the lyric toggle buttons.
                        'gradientMask__lyricColumn__mobileCollapsed'
                    )}
                    tabIndex="-1"
                    onWheel={this._handleWheel}
                >
                    {/* TODO: Undo this. */}
                    {true && (
                        <Stanzas {...other}
                            {...{
                                songStanzaConfigs,
                                lastUnitDotCardIndex,
                                setLyricAnnotationElement: this._setLyricAnnotationElement,
                                setVerseRef: this._setVerseElement
                            }}
                        />
                    )}
                    {false && (
                        <TempGlobalAnnotations />
                    )}
                </div>
                <LyricWheelDispatcher {...{ parentThis: this }} />
            </___>
        )
    }
}

export default connect(mapStateToProps)(LyricScroll)
