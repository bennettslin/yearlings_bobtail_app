// Component to show individual portal in portals block.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames';
import TextBlock from '../text/text-block'
import DotButton from '../dot/dot-button'
import { PORTAL } from '../../constants/dots'
import { LYRIC_COLUMN_KEYS, LYRIC, CENTRE, DESTINATION_PORTAL_INDEX } from '../../constants/lyrics'
import { getSongTitle, getVerseObject, getCarouselOrPopupCardPortalObject } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const mapStateToProps = ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
}) => ({
    renderReadySongIndex,
    renderReadyAnnotationIndex
})

class AnnotationPortal extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,
        renderReadyAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        carouselAnnotationIndex: PropTypes.number,
        cardIndex: PropTypes.number.isRequired,
        portalLinkIndex: PropTypes.number.isRequired,
        isAccessedPortal: PropTypes.bool.isRequired,
        handleAnnotationPortalSelect: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handlePortalClick = this._handlePortalClick.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'renderReadySongIndex',
                    'isAccessedPortal',
                    {
                        staticProp: 'carouselAnnotationIndex',
                        conditionalShouldBe: false,
                        subUpdatingKey: 'renderReadyAnnotationIndex'
                    }
                ]
            })

        return componentShouldUpdate
    }

    _handlePortalClick(e) {

        const portalObject = getCarouselOrPopupCardPortalObject(this.props),

            { songIndex,
              annotationIndex,
              verseIndex,
              columnIndex,
              [DESTINATION_PORTAL_INDEX]: destinationPortalIndex } = portalObject

        this.props.handleAnnotationPortalSelect(e, songIndex, annotationIndex, verseIndex, columnIndex, destinationPortalIndex)
    }

    render() {

        const { renderReadySongIndex,
                renderReadyAnnotationIndex,
                carouselAnnotationIndex,
                cardIndex,
                portalLinkIndex,
                isAccessedPortal } = this.props,

            portalObject = getCarouselOrPopupCardPortalObject({
                renderReadySongIndex,
                carouselAnnotationIndex,
                renderReadyAnnotationIndex,
                cardIndex,
                portalLinkIndex
            }),

            { songIndex,
              annotationIndex,
              verseIndex,
              columnIndex,

              // Default if no portal prefix.
              portalPrefix = 'portal to' } = portalObject,

              songTitle = getSongTitle({ songIndex }),
              verseObject = getVerseObject(songIndex, verseIndex),
              columnKey = LYRIC_COLUMN_KEYS[columnIndex]

        return (
            <div
                className={classnames(
                    'portal-block',
                    'anchor-block',
                    'dot-anchor',
                    { 'access-highlighted': isAccessedPortal }
                )}
            >
                <div className="portal-column button-portal-column">
                    <DotButton
                        dotKey={PORTAL}
                        handleDotButtonClick={this._handlePortalClick}
                    />
                </div>
                <div className="portal-column text-portal-column">
                    <div className="song-title">
                        {portalPrefix} <strong>{songTitle}</strong>
                    </div>

                    <div className="verse-text">
                        <span className="text-span">{'\u201c'}</span>
                        <TextBlock
                            inPortal={true}
                            text={verseObject[LYRIC] || verseObject[CENTRE] || verseObject[columnKey]}
                            portalAnnotationIndex={annotationIndex}
                        />
                        <span className="text-span">{'\u201d'}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnnotationPortal)
