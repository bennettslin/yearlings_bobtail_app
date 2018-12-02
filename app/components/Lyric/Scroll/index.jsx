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
        setLyricRef: PropTypes.func.isRequired
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
        this.dispatchLyricWheel(e, this.myLyricElement)
    }

    _setLyricParentForAll = (node) => {
        this.myLyricElement = node

        // For focus.
        this.props.setLyricRef(node)

        // For scrolling.
        return this.setLyricParent(node)
    }

    _setVerse = (payload) => {
        return this.setVerse(payload)
    }

    _setLyricAnnotation = (payload) => {
        return this.setLyricAnnotation(payload)
    }

    _getVerseElement = (verseIndex) => {
        return this.getVerseElement(verseIndex)
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                isTransitioningHeight,
                completeHeightTransition,
                setLyricRef,
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
                <ScrollLyricListener {...{ getRefs: this }} />
                <VerseBarListener {...{ getVerseElement: this._getVerseElement }} />
                <div
                    ref={this._setLyricParentForAll}
                    className={cx(
                        'LyricScroll',
                        'absoluteFullContainer',

                        // This gradient does not obscure the lyric toggle buttons.
                        'gradientMask__earColumn__mobileCollapsed'
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
                                setLyricAnnotation: this._setLyricAnnotation,
                                setVerseRef: this._setVerse
                            }}
                        />
                    )}
                    {false && (
                        <TempGlobalAnnotations />
                    )}
                    <LyricWheelDispatcher {...{ getDispatch: this }} />
                </div>
            </___>
        )
    }
}

export default connect(mapStateToProps)(LyricScroll)
