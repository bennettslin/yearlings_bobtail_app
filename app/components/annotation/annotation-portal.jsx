// Component to show individual portal in portals block.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import TextBlock from '../text/text-block'
import DotButton from '../dot/dot-button'
import { PORTAL } from '../../constants/dots'
import { LYRIC_COLUMN_KEYS, LYRIC, CENTRE } from '../../constants/lyrics'
import { getSongTitle, getVerseObject } from '../../helpers/data-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class AnnotationPortal extends Component {

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
                    // TODO: Ensure no need to change on portalObject.

                    'isAccessedPortal'
                ]
            })

        // TODO: This is broken.
        return componentShouldUpdate || true
    }

    _handlePortalClick(e) {

        const { songIndex,
                annotationIndex,
                verseIndex,
                columnIndex } = this.props.portalObject

        this.props.handleAnnotationPortalSelect(e, songIndex, annotationIndex, verseIndex, columnIndex)
    }

    render() {
        const { portalObject,
                isAccessedPortal } = this.props,

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

AnnotationPortal.propTypes = {
    // From parent.
    portalObject: PropTypes.object.isRequired,
    isAccessedPortal: PropTypes.bool.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired
}

export default AnnotationPortal
