import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import VerseDispatcher from '../../../dispatchers/VerseDispatcher'
import AnnotationNavigation from './Annotation'
import DotsSlideNavigation from './DotsSlide'
import LyricNavigation from './Lyric'
import NavNavigation from './Nav'
import { populateRefs } from '../../../helpers/ref'
import { ENTER } from '../../../constants/access'
import { mapActivatedVerseIndex } from '../../../redux/activated/selectors'
import { mapIsHeightlessLyric } from '../../../redux/responsive/selectors'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selectors'
import { mapSelectedWikiIndex } from '../../../redux/session/selectors'
import {
    mapIsNavShown,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown
} from '../../../redux/toggle/selectors'

const mapStateToProps = state => {
    const
        activatedVerseIndex = mapActivatedVerseIndex(state),
        isHeightlessLyric = mapIsHeightlessLyric(state),
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state),
        isSelectedLogue = mapIsSelectedLogue(state),
        selectedWikiIndex = mapSelectedWikiIndex(state),
        isNavShown = mapIsNavShown(state),
        isDotsSlideShown = mapIsDotsSlideShown(state),
        isLyricExpanded = mapIsLyricExpanded(state),
        isScoreShown = mapIsScoreShown(state)

    return {
        isHeightlessLyric,
        isLyricExpanded,
        activatedVerseIndex,
        isScoreShown,
        selectedWikiIndex,
        isSelectedLogue,
        selectedAnnotationIndex,
        isDotsSlideShown,
        isNavShown
    }
}

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

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    getNavigateDotsSlide = dispatch => {
        this.navigateDotsSlide = dispatch
    }

    getNavigateLyric = dispatch => {
        this.navigateLyric = dispatch
    }

    getDispatchVerse = dispatch => {
        this.dispatchVerse = dispatch
    }

    render() {
        return (
            <>
                <AnnotationNavigation {...{ getRefs: this._getRefs }} />
                <DotsSlideNavigation {...{ ref: this.getNavigateDotsSlide }} />
                <LyricNavigation {...{ ref: this.getNavigateLyric }} />
                <NavNavigation {...{ getRefs: this._getRefs }} />
                <VerseDispatcher {...{ ref: this.getDispatchVerse }} />
            </>
        )
    }
}

export default connect(mapStateToProps)(NavigationManager)
