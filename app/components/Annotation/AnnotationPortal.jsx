// Component to show individual portal in portals block.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames';

import Texts from '../Text/Texts'
import Button2 from '../Button/Button2'
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
        isAccessed: PropTypes.bool.isRequired,
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
                    'isAccessed',
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
                isAccessed } = this.props,

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
              columnKey = LYRIC_COLUMN_KEYS[columnIndex],

            text =
                verseObject[LYRIC] ||
                verseObject[CENTRE] ||
                verseObject[columnKey]

        return (
            <div
                className={cx(
                    'AnnotationPortal',
                    { 'AnnotationPortal__isAccessed': isAccessed }
                )}
            >

                <Button2
                    buttonName={PORTAL}
                    handleButtonClick={this._handlePortalClick}
                />

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
