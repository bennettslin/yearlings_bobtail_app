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
import { ACTIVATED_VERSE_INDEX_SELECTOR } from '../../../redux/activated/selectors'
import { IS_HEIGHTLESS_LYRIC_SELECTOR } from '../../../redux/responsive/selectors'

const mapStateToProps = state => {
    const {
            toggleStore: {
                isNavShown,
                isDotsSlideShown,
                isLyricExpanded,
                isScoreShown
            },
            selectedStore: {
                selectedAnnotationIndex,
                isSelectedLogue
            },
            sessionStore: { selectedWikiIndex }
        } = state,
        activatedVerseIndex = ACTIVATED_VERSE_INDEX_SELECTOR(state),
        isHeightlessLyric = IS_HEIGHTLESS_LYRIC_SELECTOR(state)

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

    render() {
        return (
            <>
                <AnnotationNavigation {...{ getRefs: this._getRefs }} />
                <DotsSlideNavigation {...{ getRefs: this._getRefs }} />
                <LyricNavigation {...{ getRefs: this._getRefs }} />
                <NavNavigation {...{ getRefs: this._getRefs }} />
                <VerseDispatcher {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

export default connect(mapStateToProps)(NavigationManager)
