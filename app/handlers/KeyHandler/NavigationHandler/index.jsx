import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AnnotationNavigation from './AnnotationNavigation'
import DotsSlideNavigation from './DotsSlideNavigation'
import LyricNavigation from './LyricNavigation'
import NavNavigation from './NavNavigation'

import {
    ENTER
} from 'constants/access'

class NavigationHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHiddenLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,

        // From parent.
        eventHandlers: PropTypes.object.isRequired,
        accessAnnotationWithoutDirection: PropTypes.func.isRequired,
        determineVerseBarsWithParameters: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTryNavigation(this.tryNavigation)
    }

    setTryNavigateAnnotation = (tryNavigateAnnotation) => {
        this.tryNavigateAnnotation = tryNavigateAnnotation
    }

    setTryNavigateDotsSlide = (tryNavigateDotsSlide) => {
        this.tryNavigateDotsSlide = tryNavigateDotsSlide
    }

    setTryNavigateLyric = (tryNavigateLyric) => {
        this.tryNavigateLyric = tryNavigateLyric
    }

    setTryNavigateNav = (tryNavigateNav) => {
        this.tryNavigateNav = tryNavigateNav
    }

    tryNavigation = (e, keyName) => {

        const {
                isHiddenLyric,
                isLyricExpanded,
                interactivatedVerseIndex,
                isScoreShown,
                selectedWikiIndex,
                isSelectedLogue,
                selectedAnnotationIndex,
                isDotsSlideShown,
                isCarouselShown,

                eventHandlers
            } = this.props,

            isVerseInteractivated = interactivatedVerseIndex > -1

        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!isSelectedLogue && !isScoreShown && !selectedWikiIndex) {

            // We're selecting the interactivated verse.
            if (isVerseInteractivated && keyName === ENTER) {

                keyWasRegistered =
                    eventHandlers.handleLyricVerseSelect(
                        e, interactivatedVerseIndex
                    )

                this.props.accessAnnotationWithoutDirection(
                    interactivatedVerseIndex
                )
                annotationIndexWasAccessed = true

            // We're in annotation.
            } else if (selectedAnnotationIndex) {
                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.tryNavigateAnnotation(e, keyName))

            // We're in dots section.
            } else if (isDotsSlideShown) {
                keyWasRegistered = this.tryNavigateDotsSlide(e, keyName)

            // We're in nav section.
            } else if (
                !isCarouselShown &&
                !isLyricExpanded &&
                !isVerseInteractivated
            ) {

                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.tryNavigateNav(e, keyName))

            // We're in lyrics section.
            } else if (!isHiddenLyric || isLyricExpanded) {
                keyWasRegistered = this.tryNavigateLyric(e, keyName)

                // If key was registered, then annotation index was accessed.
                annotationIndexWasAccessed = keyWasRegistered
            }
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    render() {
        const {
            eventHandlers: {
                handleAnnotationPrevious,
                handleAnnotationNext,
                handleAnnotationAnchorAccess,
                handleAnnotationWikiSelect,
                handleAnnotationWormholeSelect,
                handleDotAccess,
                handleDotSelect,
                handleLyricAnnotationSelect,
                handleAnnotationAccess,
                handleVerseInteractivate,
                handleNavSongSelect,
                handleNavBookSelect,
                handleSongAccess
            },
            determineVerseBarsWithParameters
        } = this.props

        return (
            <___>
                <AnnotationNavigation
                    {...{
                        getTryNavigateAnnotation: this.setTryNavigateAnnotation,
                        handleAnnotationPrevious,
                        handleAnnotationNext,
                        handleAnnotationAnchorAccess,
                        handleAnnotationWikiSelect,
                        handleAnnotationWormholeSelect,
                        determineVerseBarsWithParameters
                    }}
                />
                <DotsSlideNavigation
                    {...{
                        getTryNavigateDotsSlide: this.setTryNavigateDotsSlide,
                        handleDotAccess,
                        handleDotSelect
                    }}
                />
                <LyricNavigation
                    {...{
                        getTryNavigateLyric: this.setTryNavigateLyric,
                        handleLyricAnnotationSelect,
                        handleAnnotationAccess,
                        handleVerseInteractivate,
                        determineVerseBarsWithParameters
                    }}
                />
                <NavNavigation
                    {...{
                        getTryNavigateNav: this.setTryNavigateNav,
                        handleNavSongSelect,
                        handleNavBookSelect,
                        handleSongAccess
                    }}
                />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: {
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown
    },
    responsiveStore: { isHiddenLyric },
    songStore: {
        selectedAnnotationIndex,
        isSelectedLogue
    },
    selectedWikiIndex,
    interactivatedVerseIndex
}) => ({
    isHiddenLyric,
    isLyricExpanded,
    interactivatedVerseIndex,
    isScoreShown,
    selectedWikiIndex,
    isSelectedLogue,
    selectedAnnotationIndex,
    isDotsSlideShown,
    isCarouselShown
})
export default connect(mapStateToProps)(NavigationHandler)
