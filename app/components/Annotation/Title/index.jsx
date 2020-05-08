import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateAnnotationStore } from '../../../redux/annotation/action'

import AnnotationTitleDot from './TitleDot'
import AnnotationTitleText from './TitleText'

import AnnotationAccess from './Access'

import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { IS_UNIT_DOT } from '../../../constants/lyrics'

import { getAnnotationTitleData } from './helper'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex },
    dotsStore: { dotsBitNumber }
}) => ({
    lyricSongIndex,
    dotsBitNumber
})

class AnnotationTitle extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        updateAnnotationStore: PropTypes.func.isRequired,

        // From parent.
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired
    }

    _handleTitleClick = () => {
        const {
            isSelected,
            annotationIndex
        } = this.props

        if (isSelected) {
            return false
        }

        this.props.updateAnnotationStore({
            queuedAnnotationIndex: annotationIndex,
            queuedAnnotationFromCarousel: true
        })
        return true
    }

    render() {
        const {
                isAccessed,
                isSelected,
                lyricSongIndex,
                annotationIndex,
                dotsBitNumber
            } = this.props,

            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            {
                dotKeys,
                title,
                accessibleWikiWormholesLength

            } = getAnnotationTitleData({
                songIndex: lyricSongIndex,
                annotationIndex,
                selectedDotKeys
            }),

            showUpDown = isSelected && accessibleWikiWormholesLength > 1,

            isDot = title === IS_UNIT_DOT

        return (
            <div
                {...{
                    className: cx(
                        'AnnotationTitle',

                        isDot && 'AnnotationTitle__dot',

                        'bgColour__annotation',
                        'bgColour__annotation__pattern',
                        'bgColour__annotation__pattern__reverse',

                        isSelected && 'bgColour__annotation__selected',
                        isSelected ?
                            'boxShadow__annotationTab__selected' :
                            'boxShadow__annotationTab',

                        'fontSize__title'
                    )
                }}
            >
                {isDot ? (
                    <AnnotationTitleDot
                        {...{
                            isAccessed,
                            isSelected,
                            stanzaDotKeys: dotKeys,
                            handleAnchorClick: this._handleTitleClick
                        }}
                    />
                ) : (
                    <AnnotationTitleText
                        {...{
                            isAccessed,
                            isSelected,
                            text: `\u201c${title}\u201d`,
                            sequenceDotKeys: dotKeys,
                            handleAnchorClick: this._handleTitleClick
                        }}
                    />
                )}
                <AnnotationAccess {...{
                    isDot,
                    showUpDown
                }} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateAnnotationStore }
)(AnnotationTitle)
