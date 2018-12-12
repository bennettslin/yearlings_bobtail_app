import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import ScrollLyricListener from '../../../listeners/ScrollLyricListener'
import VerseBarHandler from '../../../handlers/VerseBarHandler'
import LyricWheelDispatcher from '../../../dispatchers/LyricWheelDispatcher'
import Stanzas from '../../Stanzas'

import { getSongStanzaConfigs } from 'helpers/data'
import { getPropsAreShallowEqual } from 'helpers/general'
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
        setLyricFocusElement: PropTypes.func.isRequired,
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.handleVerseBarWheel = this.handleVerseBarWheel
        this.props.parentThis.determineVerseBars = this.determineVerseBars
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _setLyricElement = (node) => {
        // For lyric and verse bar wheel.
        this.lyricElement = node

        // For focus.
        this.props.setLyricFocusElement(node)

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
        /**
         * Allow verse bar handler to access verse elements stored in scroll
         * lyric listener.
         */
        return this.getVerseElement(verseIndex)
    }

    determineVerseBars = () => {
        this.dispatchVerseBarsTimeout()
    }

    handleVerseBarWheel = (e) => {
        this.dispatchVerseBarWheel(e, this.lyricElement)
    }

    _handleWheel = (e) => {
        this.dispatchLyricWheel(e, this.lyricElement)
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                setLyricFocusElement,
                parentThis,
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
                <VerseBarHandler
                    {...{
                        parentThis: this,
                        getVerseElement: this._getVerseElement
                    }}
                />
                <div
                    {...{
                        ref: this._setLyricElement,
                        tabIndex: -1,
                        className: cx(
                            'LyricScroll',
                            'absoluteFullContainer',

                            /**
                             * This gradient does not obscure the lyric toggle
                             * buttons.
                             */
                            'gradientMask__lyricColumn__mobileCollapsed'
                        ),
                        onWheel: this._handleWheel
                    }}
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
                <LyricWheelDispatcher
                    {...{
                        parentThis: this,
                        dispatchVerseBarsTimeout: this.determineVerseBars
                    }}
                />
            </___>
        )
    }
}

export default connect(mapStateToProps)(LyricScroll)
