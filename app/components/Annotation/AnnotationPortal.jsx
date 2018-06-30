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
import { getSongTitle, getVerseObject, getCarouselOrPopupCardPortalObject } from '../../helpers/dataHelper'
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
        const shouldComponentUpdate =
            nextProps.canCarouselRender && !getPropsAreShallowEqual({
                props: this.props,
                nextProps,
                checkIsShallowEqual: {
                    renderableAnnotationIndex: true
                },
                onlyOnCondition: !nextProps.carouselAnnotationIndex
            })

        return shouldComponentUpdate
    }

    componentDidUpdate() {
        const {
            carouselAnnotationIndex,
            renderableAnnotationIndex
        } = this.props

        if (carouselAnnotationIndex === renderableAnnotationIndex) {
            console.warn('AnnotationPortal rendered.')
        }
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

        const { renderableSongIndex,
                renderableAnnotationIndex,
                carouselAnnotationIndex,
                cardIndex,
                portalLinkIndex,
                isAccessed } = this.props,

            portalObject = getCarouselOrPopupCardPortalObject({
                renderableSongIndex,
                carouselAnnotationIndex,
                renderableAnnotationIndex,
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
                    'AnnotationPortal'
                )}
            >

                {/* Wrap button so it won't get squished if text wraps. */}
                <div className="AnnotationPortal__button">
                    <Button
                        buttonName={PORTAL}
                        showAccessIconIfAccessOn={isAccessed}
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
