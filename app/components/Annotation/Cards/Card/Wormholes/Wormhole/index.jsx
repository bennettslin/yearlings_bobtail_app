// Component to show individual wormhole in wormholes block.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Texts from '../../../../../Texts'
import Button from '../../../../../Button'

import { ENTER } from 'constants/access'
import { WORMHOLE_BUTTON_KEY } from 'constants/buttons'

import {
    LYRIC_COLUMN_KEYS,
    LYRIC,
    CENTRE
} from 'constants/lyrics'

import {
    getSongTitle,
    getVerseObject
} from 'helpers/dataHelper'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import { getAnnotationCardWormholeObject } from './helper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canCarouselRender,
    renderedSongIndex
})

class AnnotationWormhole extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        annotationIndex: PropTypes.number.isRequired,
        cardIndex: PropTypes.number.isRequired,
        wormholeLinkIndex: PropTypes.number.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        handleAnnotationWormholeSelect: PropTypes.func.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    cardIndex: true,
                    wormholeLinkIndex: true
                }
            })

        return shouldComponentUpdate
    }

    _handleWormholeClick = (e) => {
        const wormholeObject = this._getWormholeObject()

        this.props.handleAnnotationWormholeSelect(e, wormholeObject)
    }

    _getWormholeObject() {
        const {
            renderedSongIndex,
            annotationIndex,
            cardIndex,
            wormholeLinkIndex
        } = this.props

        return getAnnotationCardWormholeObject({
            songIndex: renderedSongIndex,
            annotationIndex,
            cardIndex,
            wormholeLinkIndex
        })
    }

    render() {

        const {
                isAccessed,
                isSelected
            } = this.props,

            wormholeObject = this._getWormholeObject(),

            { songIndex,
                annotationIndex,
                verseIndex,
                columnIndex,

                // Default if no wormhole prefix.
                wormholePrefix = 'wormhole to' } = wormholeObject,

            songTitle = getSongTitle({ songIndex }),
            verseObject = getVerseObject(songIndex, verseIndex),
            columnKey = LYRIC_COLUMN_KEYS[columnIndex],

            text =
                verseObject[LYRIC] ||
                verseObject[CENTRE] ||
                verseObject[columnKey]

        return (
            <div
                className={cx(
                    'AnnotationWormhole'
                )}
            >

                {/* Wrap button so it won't get squished if text wraps. */}
                <div className="AnnotationWormhole__button">
                    <Button
                        buttonName={WORMHOLE_BUTTON_KEY}
                        showAccessIconIfAccessOn={isAccessed && isSelected}
                        accessKey={ENTER}
                        handleButtonClick={this._handleWormholeClick}
                    />
                </div>

                <div className="AnnotationWormhole__text">
                    <div className="AnnotationWormhole__title">
                        {wormholePrefix} <strong>{songTitle}</strong>
                    </div>

                    <div className="AnnotationWormhole__verse">
                        <span>{'\u201c'}</span>
                        <Texts
                            inWormhole
                            text={text}
                            wormholeAnnotationIndex={annotationIndex}
                        />
                        <span>{'\u201d'}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnnotationWormhole)
