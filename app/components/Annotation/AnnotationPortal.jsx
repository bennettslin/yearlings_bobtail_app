// Component to show individual portal in portals block.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames';

import Texts from '../Text/Texts'
import Button from '../Button/Button'

import { NAVIGATION_ENTER_KEY } from '../../constants/access'
import { PORTAL_BUTTON_KEY } from '../../constants/buttons'

import {
    LYRIC_COLUMN_KEYS,
    LYRIC,
    CENTRE
} from '../../constants/lyrics'

import {
    getSongTitle,
    getVerseObject
} from '../../helpers/dataHelper'

import {
    getAnnotationCardPortalObject
} from './annotationHelper'

import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableStore
}) => ({
    canCarouselRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
})

class AnnotationPortal extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        annotationIndex: PropTypes.number.isRequired,
        cardIndex: PropTypes.number.isRequired,
        portalLinkIndex: PropTypes.number.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        handleAnnotationPortalSelect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handlePortalClick = this._handlePortalClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                alwaysBypassCheck: {
                    cardIndex: true,
                    portalLinkIndex: true
                }
            })

        return shouldComponentUpdate
    }

    _handlePortalClick(e) {
        const portalObject = this._getPortalObject()

        this.props.handleAnnotationPortalSelect(e, portalObject)
    }

    _getPortalObject() {
        const {
            renderableSongIndex,
            annotationIndex,
            cardIndex,
            portalLinkIndex
        } = this.props

        return getAnnotationCardPortalObject({
            songIndex: renderableSongIndex,
            annotationIndex,
            cardIndex,
            portalLinkIndex
        })
    }

    render() {

        const {
            isAccessed,
            isSelected
        } = this.props,

            portalObject = this._getPortalObject(),

            { songIndex,
              annotationIndex,
              verseIndex,
              columnIndex,

              // Default if no portal prefix.
              portalPrefix = 'portal to' } = portalObject,

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
                    'AnnotationPortal'
                )}
            >

                {/* Wrap button so it won't get squished if text wraps. */}
                <div className="AnnotationPortal__button">
                    <Button
                        buttonName={PORTAL_BUTTON_KEY}
                        showAccessIconIfAccessOn={isAccessed && isSelected}
                        accessKey={NAVIGATION_ENTER_KEY}
                        handleButtonClick={this._handlePortalClick}
                    />
                </div>

                <div className="AnnotationPortal__text">
                    <div className="AnnotationPortal__title">
                        {portalPrefix} <strong>{songTitle}</strong>
                    </div>

                    <div className="AnnotationPortal__verse">
                        <span>{'\u201c'}</span>
                        <Texts
                            inPortal
                            text={text}
                            portalAnnotationIndex={annotationIndex}
                        />
                        <span>{'\u201d'}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnnotationPortal)
