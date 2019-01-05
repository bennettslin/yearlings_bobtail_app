import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateAnnotationStore } from 'flux/annotation/action'

import AnnotationTitleDot from './TitleDot'
import AnnotationTitleText from './TitleText'

import AnnotationAccess from './Access'

import { getDotKeysFromBitNumber } from 'helpers/dot'
import { IS_UNIT_DOT } from 'constants/lyrics'

import { getAnnotationTitleData } from './helper'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex },
    dotsStore: { dotsBitNumber }
}) => ({
    lyricSongIndex,
    dotsBitNumber
})

class AnnotationTitle extends PureComponent {

    static defaultProps = {
        isShadow: false
    }

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        updateAnnotationStore: PropTypes.func.isRequired,

        // From parent.
        isShadow: PropTypes.bool.isRequired,
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
                isShadow,
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
            <div className={cx(
                'AnnotationTitle',

                isShadow && 'AnnotationTitle__shadow',
                {
                    ...!isShadow && {
                    /**
                     * This includes transition animation, so it's always
                     * applied.
                     */
                        'bgColour__annotation': true,
                        'bgColour__annotation__pattern': true,
                        'bgColour__annotation__pattern__reverse': true,
                        'bgColour__annotation__selected': isSelected
                    },

                    ...isShadow && {
                        'boxShadow__mainCard': !isSelected,
                        'boxShadow__mainCard__selected': isSelected
                    },

                    'AnnotationTitle__dot': isDot
                },

                'fontSize__title'
            )}>
                {isDot ? (
                    <AnnotationTitleDot
                        {...{
                            isShadow,
                            isAccessed,
                            isSelected,
                            stanzaDotKeys: dotKeys,
                            handleAnchorClick: this._handleTitleClick
                        }}
                    />
                ) : (
                    <AnnotationTitleText
                        {...{
                            isShadow,
                            isAccessed,
                            isSelected,
                            text: `\u201c${title}\u201d`,
                            sequenceDotKeys: dotKeys,
                            handleAnchorClick: this._handleTitleClick
                        }}
                    />
                )}
                <AnnotationAccess {...{
                    isShadow,
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
