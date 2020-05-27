/**
 * Handler for closing multiple sections. Because the logic is so similar for
 * each section, it is better for dev clarity to keep them together.
 */

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateOptionStore } from '../../redux/option/action'
import { resetWiki } from '../../redux/session/action'
import { updateSelectedStore } from '../../redux/selected/action'
import {
    updateToggleStore,
    updateIsAboutShown
} from '../../redux/toggle/action'
import {
    SHOWN,
    HIDDEN
} from '../../constants/options'
import { IS_ACTIVATED_SELECTOR } from '../../redux/activated/selectors'

const mapStateToProps = state => {
    const {
            optionStore: {
                selectedOverviewOption,
                selectedTipsOption,
                isSongShownOverview,
                isSongShownTips
            },
            selectedStore: { selectedAnnotationIndex },
            sliderStore: { isSliderMoving },
            toggleStore: {
                isCarouselShown,
                isDotsSlideShown,
                isLyricExpanded,
                isScoreShown,
                isAboutShown
            },
            sessionStore: { selectedWikiIndex }
        } = state,
        isActivated = IS_ACTIVATED_SELECTOR(state)

    return {
        selectedAnnotationIndex,
        isSliderMoving,
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isAboutShown,
        selectedOverviewOption,
        selectedTipsOption,
        isSongShownOverview,
        isSongShownTips,
        selectedWikiIndex,
        isActivated
    }
}

class CloseHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isAboutShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSongShownOverview: PropTypes.bool.isRequired,
        isSongShownTips: PropTypes.bool.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,
        updateIsAboutShown: PropTypes.func.isRequired,
        updateActivatedStore: PropTypes.func.isRequired,
        resetWiki: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({ closeForBodyClick: this.closeForBodyClick })
    }

    componentDidUpdate(prevProps) {
        this._handleAboutOpen(prevProps)
        this._handleAnnotationSelect(prevProps)
        this._handleCarouselNavToggle(prevProps)
        this._handleDotsSlideOpen(prevProps)
        this._handleLyricExpand(prevProps)
        this._handleLyricsLocked(prevProps)
        this._handleOverviewShown(prevProps)
        this._handleTipsShown(prevProps)
        this._handleScoreOpen(prevProps)
        this._handleWikiSelect(prevProps)
    }

    closeForBodyClick = () => {
        if (!this.closeMainPopups()) {
            this.closeMainSections({
                exemptLyric: true,

                // If clicking to dismiss tips, leave overview shown.
                exemptOverview: this.props.selectedTipsOption === SHOWN
            })
        }
    }

    _handleAnnotationSelect(prevProps) {
        const
            { selectedAnnotationIndex } = this.props,
            { selectedAnnotationIndex: prevAnnotationIndex } = prevProps

        if (selectedAnnotationIndex && !prevAnnotationIndex) {
            this.closeMainPopups()
            this.closeMainSections({
                exemptAnnotation: true,
                exemptLyric: true
            })
        }
    }

    _handleCarouselNavToggle(prevProps) {
        const
            { isCarouselShown } = this.props,
            { isCarouselShown: wasCarouselShown } = prevProps

        if (isCarouselShown !== wasCarouselShown) {
            this.closeMainPopups()
            this.closeMainSections({
                exemptAnnotation: true,
                exemptDots: true,
                exemptNav: true
            })
        }
    }

    _handleDotsSlideOpen(prevProps) {
        const
            { isDotsSlideShown } = this.props,
            { isDotsSlideShown: wasDotsSlideShown } = prevProps

        if (isDotsSlideShown && !wasDotsSlideShown) {
            this.closeMainPopups()
            this.closeMainSections({
                exemptDots: true
            })
        }
    }

    _handleLyricExpand(prevProps) {
        const
            { isLyricExpanded } = this.props,
            { isLyricExpanded: wasLyricExpanded } = prevProps

        if (isLyricExpanded && !wasLyricExpanded) {
            this.closeMainPopups()
            this.closeMainSections({
                // Continue to show selected annotation in overlay.
                exemptAnnotation: true,
                exemptLyric: true,
                exemptActivatedVerse: true
            })
        }
    }

    _handleLyricsLocked(prevProps) {
        const
            {
                isActivated,
                isSliderMoving
            } = this.props,
            {
                isActivated: wasActivated,
                isSliderMoving: wasSliderMoving
            } = prevProps

        if (
            (isSliderMoving && !wasSliderMoving) ||
            (isActivated && !wasActivated)
        ) {
            this.closeMainPopups()
            this.closeMainSections({
                exemptActivatedVerse: true,
                exemptLyric: true
            })
        }
    }

    _handleOverviewShown(prevProps = {}) {
        const
            { selectedOverviewOption } = this.props,
            { selectedOverviewOption: prevOverviewOption } = prevProps,
            isOverviewShown = selectedOverviewOption === SHOWN,
            wasOverviewShown = prevOverviewOption === SHOWN

        if (isOverviewShown) {
            const { isSongShownOverview } = this.props

            // Cheesy way to ignore when overview is shown from song change.
            if (isSongShownOverview) {
                this.props.updateOptionStore({ isSongShownOverview: false })
            }

            if (!wasOverviewShown) {
                this.closeMainPopups()
                this.closeMainSections({
                    exemptOverview: true,
                    ...isSongShownOverview && {
                        exemptTips: true
                    }
                })
            }
        }
    }

    _handleTipsShown(prevProps = {}) {
        const
            { selectedTipsOption } = this.props,
            { selectedTipsOption: prevTipsOption } = prevProps,
            isTipsShown = selectedTipsOption === SHOWN,
            wasTipsShown = prevTipsOption === SHOWN

        if (isTipsShown) {
            const { isSongShownTips } = this.props

            // Cheesy way to ignore when tips is shown from song change.
            if (isSongShownTips) {
                this.props.updateOptionStore({ isSongShownTips: false })
            }

            if (!wasTipsShown) {
                this.closeMainPopups()
                this.closeMainSections({
                    exemptTips: true,
                    exemptOverview: true
                })
            }
        }
    }

    _handleScoreOpen(prevProps) {
        const
            { isScoreShown } = this.props,
            { isScoreShown: wasScoreShown } = prevProps

        if (isScoreShown && !wasScoreShown) {
            this.closeMainPopups({ exemptScore: true })
            this.closeMainSections({ exemptAnnotation: true })
        }
    }

    _handleAboutOpen(prevProps) {
        const
            { isAboutShown } = this.props,
            { isAboutShown: wasAboutShown } = prevProps

        if (isAboutShown && !wasAboutShown) {
            this.closeMainPopups({ exemptAbout: true })
            this.closeMainSections({ exemptAnnotation: true })
        }
    }

    _handleWikiSelect(prevProps) {
        const
            { selectedWikiIndex } = this.props,
            { selectedWikiIndex: prevWikiIndex } = prevProps

        if (selectedWikiIndex && !prevWikiIndex) {
            this.closeMainPopups({ exemptWiki: true })
            this.closeMainSections({ exemptAnnotation: true })
        }
    }

    closeMainPopups({
        exemptScore,
        exemptAbout,
        exemptWiki
    } = {}) {
        const {
            isScoreShown,
            isAboutShown,
            selectedWikiIndex
        } = this.props

        // If popup is open, close it and do nothing else.
        if (selectedWikiIndex && !exemptWiki) {
            this.props.resetWiki()

        } else if (isScoreShown && !exemptScore) {
            this.props.updateToggleStore({ isScoreShown: false })

        } else if (isAboutShown && !exemptAbout) {
            this.props.updateIsAboutShown()

        } else {
            return false
        }

        return true
    }

    closeMainSections({
        exemptAnnotation,
        exemptDots,
        exemptLyric,
        exemptNav,
        exemptOverview,
        exemptTips,
        exemptActivatedVerse
    } = {}) {
        const {
            selectedOverviewOption,
            selectedTipsOption
        } = this.props

        if (!exemptAnnotation) {
            this.props.updateSelectedStore({ selectedAnnotationIndex: 0 })
        }

        if (!exemptDots) {
            this.props.updateToggleStore({ isDotsSlideShown: false })
        }

        if (!exemptLyric) {
            this.props.updateToggleStore({ isLyricExpanded: false })
        }

        if (!exemptNav) {
            this.props.updateToggleStore({ isNavShown: false })
        }

        if (!exemptOverview) {
            // Just hide overview when opening other sections.
            if (selectedOverviewOption === SHOWN) {
                this.props.updateOptionStore({
                    selectedOverviewOption: HIDDEN
                })
            }
        }

        if (!exemptTips) {
            // Just hide tips when opening other sections.
            if (selectedTipsOption === SHOWN) {
                this.props.updateOptionStore({
                    selectedTipsOption: HIDDEN
                })
            }
        }

        if (!exemptActivatedVerse) {
            this.props.updateActivatedStore()
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateOptionStore,
        updateSelectedStore,
        updateToggleStore,
        updateIsAboutShown,
        updateActivatedStore,
        resetWiki
    }
)(CloseHandler)
