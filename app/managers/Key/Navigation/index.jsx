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
        activatedVerseIndex: PropTypes.number.isRequired,
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

    handleNavigation = (keyName) => {

        const {
                isHeightlessLyric,
                isLyricExpanded,
                activatedVerseIndex,
                isScoreShown,
                selectedWikiIndex,
                isSelectedLogue,
                selectedAnnotationIndex,
                isDotsSlideShown,
                isNavShown
            } = this.props,

            isVerseActivated = activatedVerseIndex > -1

        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!isSelectedLogue && !isScoreShown && !selectedWikiIndex) {

            // We're selecting the activated verse.
            if (isVerseActivated && keyName === ENTER) {

                keyWasRegistered = this.dispatchVerse({
                    selectedVerseIndex: activatedVerseIndex,
                    scrollLog: `Key select activated verse ${activatedVerseIndex}.`
                })

                annotationIndexWasAccessed = true

            // We're in annotation.
            } else if (selectedAnnotationIndex) {
                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.navigateAnnotation(keyName))

            // We're in dots section.
            } else if (isDotsSlideShown) {
                keyWasRegistered = this.navigateDotsSlide(keyName)

            // We're in nav section.
            } else if (
                isNavShown &&
                !isLyricExpanded &&
                !isVerseActivated
            ) {

                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = this.navigateNav(keyName))

            // We're in lyrics section.
            } else if (!isHeightlessLyric || isLyricExpanded) {
                keyWasRegistered = this.navigateLyric(keyName)

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
        activatedVerseIndex,
        selectedWikiIndex
    }
}) => ({
    isHeightlessLyric,
    isLyricExpanded,
    activatedVerseIndex,
    isScoreShown,
    selectedWikiIndex,
    isSelectedLogue,
    selectedAnnotationIndex,
    isDotsSlideShown,
    isNavShown
})
export default connect(mapStateToProps)(NavigationManager)
