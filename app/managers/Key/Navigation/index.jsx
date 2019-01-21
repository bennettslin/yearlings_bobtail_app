import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import VerseDispatcher from '../../../dispatchers/VerseDispatcher'
import AnnotationNavigation from './Annotation'
import DotsSlideNavigation from './DotsSlide'
import LyricNavigation from './Lyric'
import NavNavigation from './Nav'

import { populateRefs } from 'helpers/ref'

import { ENTER } from 'constants/access'

class NavigationManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            handleNavigation: this.handleNavigation
        })
    }

    handleNavigation = (e, keyName) => {

        const {
                isHeightlessLyric,
                isLyricExpanded,
                interactivatedVerseIndex,
                isScoreShown,
                selectedWikiIndex,
                isSelectedLogue,
                selectedAnnotationIndex,
                isDotsSlideShown,
                isNavShown
            } = this.props,

            isVerseInteractivated = interactivatedVerseIndex > -1

        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!isSelectedLogue && !isScoreShown && !selectedWikiIndex) {

            // We're selecting the interactivated verse.
            if (isVerseInteractivated && keyName === ENTER) {

                keyWasRegistered = this.dispatchVerse({
                    selectedVerseIndex: interactivatedVerseIndex,
                    scrollLog: `Key select interactivated verse ${interactivatedVerseIndex}.`
                })

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
                isNavShown &&
                !isLyricExpanded &&
                !isVerseInteractivated
            ) {

                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.navigateNav(e, keyName))

            // We're in lyrics section.
            } else if (!isHeightlessLyric || isLyricExpanded) {
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

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <___>
                <AnnotationNavigation {...{ getRefs: this._getRefs }} />
                <DotsSlideNavigation {...{ getRefs: this._getRefs }} />
                <LyricNavigation {...{ getRefs: this._getRefs }} />
                <NavNavigation {...{ getRefs: this._getRefs }} />
                <VerseDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: {
        isNavShown,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown
    },
    responsiveStore: { isHeightlessLyric },
    selectedStore: {
        selectedAnnotationIndex,
        isSelectedLogue
    },
    sessionStore: {
        interactivatedVerseIndex,
        selectedWikiIndex
    }
}) => ({
    isHeightlessLyric,
    isLyricExpanded,
    interactivatedVerseIndex,
    isScoreShown,
    selectedWikiIndex,
    isSelectedLogue,
    selectedAnnotationIndex,
    isDotsSlideShown,
    isNavShown
})
export default connect(mapStateToProps)(NavigationManager)
