// Component to show individual portal in portals block.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames';

import Texts from '../Text/Texts'
import Button from '../Button/Button'

import { NAVIGATION_ENTER_KEY } from '../../constants/access'
import { PORTAL } from '../../constants/dots'

import { LYRIC_COLUMN_KEYS, LYRIC, CENTRE, DESTINATION_PORTAL_INDEX } from '../../constants/lyrics'
import { getSongTitle, getVerseObject, getAnnotationCardPortalObject } from '../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

const mapStateToProps = ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex
}) => ({
    canCarouselRender,
    renderableSongIndex,
    renderableAnnotationIndex
})

class AnnotationPortal extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        annotationIndex: PropTypes.number,
        popupAnnotationIndex: PropTypes.number,
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
                    annotationIndex: true,
                    portalLinkIndex: true
                },
                checkIsShallowEqual: {
                    renderableAnnotationIndex: true
                },
                onlyOnCondition: !nextProps.annotationIndex
            })

        return shouldComponentUpdate
    }

    componentDidUpdate() {
        const {
            annotationIndex,
            renderableAnnotationIndex
        } = this.props

        if (annotationIndex === renderableAnnotationIndex) {
            console.warn('AnnotationPortal rendered.')
        }
    }

    _handlePortalClick(e) {

        const portalObject = this._getPortalObject(),

            { songIndex,
              annotationIndex,
              verseIndex,
              columnIndex,
              [DESTINATION_PORTAL_INDEX]: destinationPortalIndex } = portalObject

        this.props.handleAnnotationPortalSelect(e, songIndex, annotationIndex, verseIndex, columnIndex, destinationPortalIndex)
    }

    _getPortalObject() {
        const {
            renderableSongIndex,
            renderableAnnotationIndex,
            annotationIndex,
            popupAnnotationIndex,
            cardIndex,
            portalLinkIndex
        } = this.props

        return getAnnotationCardPortalObject({
            songIndex: renderableSongIndex,
            annotationIndex:
                annotationIndex ||
                renderableAnnotationIndex ||
                popupAnnotationIndex,
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
                        buttonName={PORTAL}
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
