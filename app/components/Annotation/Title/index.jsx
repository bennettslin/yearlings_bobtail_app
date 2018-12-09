import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAnnotationStore } from 'flux/annotation/action'

import AnnotationTitleDot from './TitleDot'
import AnnotationTitleText from './TitleText'

import AnnotationAccess from './Access'

import { getDotKeysFromBitNumber } from 'helpers/dot'
import { getPropsAreShallowEqual } from 'helpers/general'
import { IS_DOT_CARD } from 'constants/lyrics'

import { getAnnotationTitleData } from './helper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex },
    dotsStore: { dotsBitNumber }
}) => ({
    canCarouselRender,
    renderedSongIndex,
    dotsBitNumber
})

class AnnotationTitle extends Component {

    static defaultProps = {
        isShadow: false
    }

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        updateAnnotationStore: PropTypes.func.isRequired,

        // From parent.
        isShadow: PropTypes.bool.isRequired,
        isAccessed: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        annotationIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canCarouselRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleTitleClick = () => {
        if (!this.props.isSelected) {
            const { annotationIndex } = this.props

            this.props.updateAnnotationStore({
                queuedAnnotationIndex: annotationIndex,
                queuedAnnotationFromCarousel: true
            })
        }
    }

    render() {
        const {
                isShadow,
                isAccessed,
                isSelected,
                renderedSongIndex,
                annotationIndex,
                dotsBitNumber
            } = this.props,

            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            {
                dotKeys,
                title,
                accessibleWikiWormholesLength

            } = getAnnotationTitleData({
                songIndex: renderedSongIndex,
                annotationIndex,
                selectedDotKeys
            }),

            showUpDown = isSelected && accessibleWikiWormholesLength > 1,

            isDot = title === IS_DOT_CARD

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
                        'boxShadow__annotation': !isSelected,
                        'boxShadow__annotation__selected': isSelected
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

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAnnotationStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AnnotationTitle)
