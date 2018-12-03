// Component to show individual wormhole in wormholes block.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SongDispatcher from '../../../../../handlers/SongHandler/Dispatcher'
import Texts from '../../../../Texts'
import Button from '../../../../Button'

import { ENTER } from 'constants/access'
import { WORMHOLE_BUTTON_KEY } from 'constants/buttons'

import {
    EAR_COLUMN_KEYS,
    LYRIC,
    CENTRE
} from 'constants/lyrics'

import {
    getSongTitle,
    getVerseObject
} from 'helpers/data'

import { getWormholeObject } from '../../../../../helpers/wormhole'
import { getPropsAreShallowEqual } from 'helpers/general'

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
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired,
        cardIndex: PropTypes.number.isRequired,
        wormholeLinkIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps
            })

        return shouldComponentUpdate
    }

    _handleWormholeClick = () => {
        this.dispatchSong(getWormholeObject(this._getWormholeLink()))
    }

    _getWormholeLink() {
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

            wormholeLink = this._getWormholeLink(),

            {
                songIndex,
                annotationIndex,
                verseIndex,
                columnIndex,

                // Default if no wormhole prefix.
                wormholePrefix = 'wormhole to'
            } = wormholeLink,

            songTitle = getSongTitle({ songIndex }),
            verseObject = getVerseObject(songIndex, verseIndex),
            columnKey = EAR_COLUMN_KEYS[columnIndex],

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
                        {...{
                            accessKey: ENTER,
                            buttonName: WORMHOLE_BUTTON_KEY,
                            showAccessIconIfAccessOn: isAccessed && isSelected,
                            handleButtonClick: this._handleWormholeClick
                        }}
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
                            {...{
                                text,
                                wormholeAnnotationIndex: annotationIndex
                            }}
                        />
                        <span>{'\u201d'}</span>
                    </div>
                </div>
                <SongDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnnotationWormhole)
