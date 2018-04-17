// Component to show individual portal in portals block.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames';
import TextBlock from '../Text/TextBlock'
import DotButton from '../Dot/DotButton'
import { PORTAL } from '../../constants/dots'
import { LYRIC_COLUMN_KEYS, LYRIC, CENTRE, DESTINATION_PORTAL_INDEX } from '../../constants/lyrics'
import { getSongTitle, getVerseObject, getCarouselOrPopupCardPortalObject } from '../../helpers/dataHelper'
import { getComponentShouldUpdate } from '../../helpers/generalHelper'

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
                className={cx(
                    'AnnotationPortal',
                    'AnchorBlock',
                    'DotAnchor',
                    { 'accessHighlighted': isAccessedPortal }
                )}
            >
                <div className="portal-column button-portal-column">
                    <DotButton
                        dotKey={PORTAL}
                        handleDotButtonClick={this._handlePortalClick}
                    />
                </div>
                <div className="portal-column text-portal-column">
                    <div className="portal-song-title">
                        {portalPrefix} <strong>{songTitle}</strong>
                    </div>

                    <div className="portal-verse-text">
                        <span className="TextSpan">{'\u201c'}</span>
                        <TextBlock
                            inPortal
                            text={verseObject[LYRIC] || verseObject[CENTRE] || verseObject[columnKey]}
                            portalAnnotationIndex={annotationIndex}
                        />
                        <span className="TextSpan">{'\u201d'}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnnotationPortal)
