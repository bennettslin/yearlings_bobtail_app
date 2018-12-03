import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import AnnotationDispatcher from '../../../handlers/AnnotationHandler/Dispatcher'
import AnchorDot from '../../Anchor/AnchorDot'
import AnchorText from '../../Anchor/AnchorText'
import AnnotationAccess from './Access'

import { getPropsAreShallowEqual } from 'helpers/general'
import { IS_DOT_CARD } from 'constants/lyrics'

import { getAnnotationTitleData } from './helper'

const mapStateToProps = ({
    renderStore: { canCarouselRender },
    renderedStore: { renderedSongIndex },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    }
}) => ({
    canCarouselRender,
    renderedSongIndex,
    dotsBitNumber,
    selectedDotKeys
})

class AnnotationTitle extends Component {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,

        // From parent.
        isShadow: PropTypes.bool,
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

            this.dispatchAnnotationIndex({
                selectedAnnotationIndex: annotationIndex,
                fromCarousel: true
            })
        }
    }

    render() {
        const {
            // TODO: Make sure this is necessary.
                isShadow,

                isAccessed,
                isSelected,
                renderedSongIndex,
                annotationIndex,
                selectedDotKeys
            } = this.props,

            {
                dotKeys,
                title,
                accessibleWikiWormholesLength

            } = getAnnotationTitleData({
                songIndex: renderedSongIndex,
                annotationIndex,
                selectedDotKeys
            }),

            showUpDown = isSelected && accessibleWikiWormholesLength > 1

        return (
            <div className={cx(
                'AnnotationTitle',

                isShadow && 'AnnotationTitle__shadow',

                {
                    ...!isShadow && {
                    // This includes transition animation, so it's always applied.
                        'bgColour__annotation': true,
                        'bgColour__annotation__selected': isSelected
                    },

                    ...isShadow && {
                        'boxShadow__annotation': !isSelected,
                        'boxShadow__annotation__selected': isSelected
                    }
                },

                'fontSize__title'
            )}>
                {title === IS_DOT_CARD ? (
                    <AnchorDot
                        inAnnotation
                        {...{
                            isAccessed,
                            isSelected,
                            stanzaDotKeys: dotKeys,
                            handleAnchorClick: this._handleTitleClick
                        }}
                    />
                ) : (
                    <AnchorText
                        {...{
                            isAccessed,
                            isSelected,
                            text: `\u201c${title}\u201d`,
                            sequenceDotKeys: dotKeys,
                            handleAnchorClick: this._handleTitleClick
                        }}
                    />
                )}
                <AnnotationAccess {...{ showUpDown }} />
                <AnnotationDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnnotationTitle)
