/**
 * Handler for closing multiple sections. Because the logic is so similar for
 * each section, it is better for dev clarity to keep them together.
 */

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateOptionStore } from 'flux/option/action'
import { updateSessionStore } from 'flux/session/action'
import { updateSongStore } from 'flux/song/action'
import { updateToggleStore } from 'flux/toggle/action'

import {
    SHOWN,
    HIDDEN
} from '../../constants/options'

class CloseHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isSongShownOverview: PropTypes.bool.isRequired,
        isSongShownTips: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateOptionStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            closeForBodyClick: this.closeForBodyClick
        })
        this._handleOverviewShown()
        this._handleTipsShown()
    }

    componentDidUpdate(prevProps) {
        this._handleAnnotationSelect(prevProps)
        this._handleCarouselNavToggle(prevProps)
        this._handleDotsSlideOpen(prevProps)
        this._handleLyricExpand(prevProps)
        this._handleOverviewShown(prevProps)
        this._handleTipsShown(prevProps)
        this._handleVerseInteractivate(prevProps)
        this._handleScoreOpen(prevProps)
        this._handleTitleOpen(prevProps)
        this._handleWikiSelect(prevProps)
    }

    closeForBodyClick = () => {
        if (!this.closeOverlayPopups()) {
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
            this.closeOverlayPopups()
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
            this.closeOverlayPopups()
            this.closeMainSections({
                exemptAnnotation: true,
                exemptDots: true
            })
        }
    }

    _handleDotsSlideOpen(prevProps) {
        const
            { isDotsSlideShown } = this.props,
            { isDotsSlideShown: wasDotsSlideShown } = prevProps

        if (isDotsSlideShown && !wasDotsSlideShown) {
            this.closeOverlayPopups()
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
            this.closeOverlayPopups()
            this.closeMainSections({
                // Continue to show selected annotation in overlay.
                exemptAnnotation: true,
                exemptLyric: true,
                exemptInteractivatedVerse: true
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
                this.closeOverlayPopups()
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
                this.closeOverlayPopups()
                this.closeMainSections({
                    exemptTips: true,
                    exemptOverview: true
                })
            }
        }
    }

    _handleVerseInteractivate(prevProps) {
        const
            { interactivatedVerseIndex } = this.props,
            { interactivatedVerseIndex: prevVerseIndex } = prevProps

        if (interactivatedVerseIndex > -1 && prevVerseIndex === -1) {
            this.closeOverlayPopups()
            this.closeMainSections({
                exemptInteractivatedVerse: true,
                exemptLyric: true,
                exemptOverview: true,
                exemptTips: true
            })
        }
    }

    _handleScoreOpen(prevProps) {
        const
            { isScoreShown } = this.props,
            { isScoreShown: wasScoreShown } = prevProps

        if (isScoreShown && !wasScoreShown) {
            this.closeOverlayPopups({ exemptScore: true })
            this.closeMainSections({ exemptAnnotation: true })
        }
    }

    _handleTitleOpen(prevProps) {
        const
            { isTitleShown } = this.props,
            { isTitleShown: wasTitleShown } = prevProps

        if (isTitleShown && !wasTitleShown) {
            this.closeOverlayPopups({ exemptTitle: true })
            this.closeMainSections({ exemptAnnotation: true })
        }
    }

    _handleWikiSelect(prevProps) {
        const
            { selectedWikiIndex } = this.props,
            { selectedWikiIndex: prevWikiIndex } = prevProps

        if (selectedWikiIndex && !prevWikiIndex) {
            this.closeOverlayPopups({ exemptWiki: true })
            this.closeMainSections({ exemptAnnotation: true })
        }
    }

    closeOverlayPopups({
        exemptScore,
        exemptTitle,
        exemptWiki
    } = {}) {
        const {
            isScoreShown,
            isTitleShown,
            selectedWikiIndex
        } = this.props

        // If popup is open, close it and do nothing else.
        if (selectedWikiIndex && !exemptWiki) {
            this.props.updateSessionStore({ selectedWikiIndex: 0 })

        } else if (isScoreShown && !exemptScore) {
            this.props.updateToggleStore({ isScoreShown: false })

        } else if (isTitleShown && !exemptTitle) {
            this.props.updateToggleStore({ isTitleShown: false })

        } else {
            return false
        }

        return true
    }

    closeMainSections({
        exemptAnnotation,
        exemptDots,
        exemptLyric,
        exemptOverview,
        exemptTips,
        exemptInteractivatedVerse
    } = {}) {
        const {
            selectedOverviewOption,
            selectedTipsOption
        } = this.props

        if (!exemptAnnotation) {
            this.props.updateSongStore({ selectedAnnotationIndex: 0 })
        }

        if (!exemptDots) {
            this.props.updateToggleStore({ isDotsSlideShown: false })
        }

        if (!exemptLyric) {
            this.props.updateToggleStore({ isLyricExpanded: false })
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

        if (!exemptInteractivatedVerse) {
            this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption,
        isSongShownOverview,
        isSongShownTips
    },
    songStore: {
        selectedAnnotationIndex,
        selectedSongIndex
    },
    toggleStore: {
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isTitleShown
    },
    sessionStore: {
        selectedWikiIndex,
        interactivatedVerseIndex
    }
}) => ({
    selectedAnnotationIndex,
    isCarouselShown,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isTitleShown,
    selectedOverviewOption,
    selectedTipsOption,
    isSongShownOverview,
    isSongShownTips,
    selectedSongIndex,
    selectedWikiIndex,
    interactivatedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateOptionStore,
        updateSessionStore,
        updateSongStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CloseHandler)
