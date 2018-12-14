import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import ScrollLyricListener from '../../../listeners/ScrollLyricListener'
import LyricWheelDispatcher from '../../../dispatchers/LyricWheelDispatcher'
import Stanzas from '../../Stanzas'

import { getSongStanzaConfigs } from 'helpers/data'
import { populateRefs } from 'helpers/ref'
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
        determineVerseBars: PropTypes.func.isRequired,
        setLyricFocusElement: PropTypes.func.isRequired,
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            handleVerseBarWheel: this.handleVerseBarWheel,
            getVerseElement: this.getVerseElement
        })
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _getVerseElement = (verseIndex) => {
        /**
         * Allow verse bar handler to access verse elements stored in scroll
         * lyric listener.
         */
        return this.getVerseElement(verseIndex)
    }

    _setVerseElement = (payload) => {
        return this.setVerseElement(payload)
    }

    _setLyricElement = (node) => {
        // For lyric and verse bar wheel.
        this.lyricElement = node

        // For focus.
        this.props.setLyricFocusElement(node)

        // For scrolling.
        return this.setLyricParent(node)
    }

    _setLyricAnnotationElement = (payload) => {
        return this.setLyricAnnotationElement(payload)
    }

    handleVerseBarWheel = (e) => {
        this.dispatchVerseBarWheel(e, this.lyricElement)
    }

    _handleWheel = (e) => {
        this.dispatchLyricWheel(e, this.lyricElement)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                setLyricFocusElement,
                getRefs,
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
                <ScrollLyricListener {...{ getRefs: this._getRefs }} />
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
                        getRefs: this._getRefs,
                        determineVerseBars: this.props.determineVerseBars
                    }}
                />
            </___>
        )
    }
}

export default connect(mapStateToProps)(LyricScroll)
