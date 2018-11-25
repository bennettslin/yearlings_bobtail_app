import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AnnotationNavigation from './AnnotationNavigation'
import DotsSlideNavigation from './DotsSlideNavigation'
import LyricNavigation from './LyricNavigation'
import NavNavigation from './NavNavigation'

import { ENTER } from 'constants/access'

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
        getHandle: PropTypes.object.isRequired,
        eventHandlers: PropTypes.object.isRequired,
        determineVerseBarsWithParameters: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getHandle.handleNavigation = this.handleNavigation
    }

    handleNavigation = (e, keyName) => {

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

                annotationIndexWasAccessed = true

            // We're in annotation.
            } else if (selectedAnnotationIndex) {
                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.navigateAnnotation(e, keyName))

            // We're in dots section.
            } else if (isDotsSlideShown) {
                keyWasRegistered = this.navigateDotsSlide(e, keyName)

            // We're in nav section.
            } else if (
                !isCarouselShown &&
                !isLyricExpanded &&
                !isVerseInteractivated
            ) {

                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.navigateNav(e, keyName))

            // We're in lyrics section.
            } else if (!isHiddenLyric || isLyricExpanded) {
                keyWasRegistered = this.navigateLyric(e, keyName)

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
                handleAnnotationWormholeSelect,
                handleLyricAnnotationSelect,
                handleAnnotationAccess,
                handleNavSongSelect
            },
            determineVerseBarsWithParameters
        } = this.props

        return (
            <___>
                <AnnotationNavigation
                    {...{
                        getNavigation: this,
                        handleAnnotationPrevious,
                        handleAnnotationNext,
                        handleAnnotationWormholeSelect,
                        determineVerseBarsWithParameters
                    }}
                />
                <DotsSlideNavigation {...{ getNavigation: this }} />
                <LyricNavigation
                    {...{
                        getNavigation: this,
                        handleLyricAnnotationSelect,
                        handleAnnotationAccess,
                        determineVerseBarsWithParameters
                    }}
                />
                <NavNavigation
                    {...{
                        getNavigation: this,
                        handleNavSongSelect
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
    sessionStore: {
        interactivatedVerseIndex,
        selectedWikiIndex
    }
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
