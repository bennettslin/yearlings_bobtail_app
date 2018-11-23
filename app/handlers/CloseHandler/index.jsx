// Dispatcher and listener for closing multiple sections.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import {
    SHOWN,
    OVERVIEW_OPTIONS,
    TIPS_OPTIONS
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
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        // TODO: Eventually call these through Redux.
        selectAnnotation: PropTypes.func.isRequired,
        selectCarouselNav: PropTypes.func.isRequired,
        selectOverview: PropTypes.func.isRequired,
        selectTips: PropTypes.func.isRequired,
        getCloseSections: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getCloseSections(this.closeSections)
    }

    componentDidUpdate(prevProps) {
        this._handleAnnotationSelect(prevProps)
        this._handleCarouselNavToggle(prevProps)
        this._handleDotsSlideOpen(prevProps)
        this._handleLyricExpand(prevProps)
        this._handleOverviewShown(prevProps)
        this._handleTipsShown(prevProps)
        this._handleScoreOpen(prevProps)
        this._handleTitleOpen(prevProps)
        this._handleWikiSelect(prevProps)
        this._handleVerseInteractivate(prevProps)
    }

    _handleAnnotationSelect(prevProps) {
        const
            { selectedAnnotationIndex } = this.props,
            { selectedAnnotationIndex: prevAnnotationIndex } = prevProps

        if (selectedAnnotationIndex && !prevAnnotationIndex) {
            this.closeSections({
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
            this.closeSections({
                exemptAnnotation: true,
                exemptDots: true,
                exemptInteractivatedVerse: true,
                continuePastClosingPopups: true
            })
        }
    }

    _handleDotsSlideOpen(prevProps) {
        const
            { isDotsSlideShown } = this.props,
            { isDotsSlideShown: wasDotsSlideShown } = prevProps

        if (isDotsSlideShown && !wasDotsSlideShown) {
            this.closeSections({
                exemptDots: true,
                continuePastClosingPopups: true
            })
        }
    }

    _handleLyricExpand(prevProps) {
        const
            { isLyricExpanded } = this.props,
            { isLyricExpanded: wasLyricExpanded } = prevProps

        if (isLyricExpanded && !wasLyricExpanded) {
            this.closeSections({
                // Continue to show selected annotation in overlay.
                exemptAnnotation: true,
                exemptLyric: true,
                continuePastClosingPopups: true
            })
        }
    }

    _handleOverviewShown(prevProps) {
        const
            { selectedOverviewIndex } = this.props,
            { selectedOverviewIndex: prevOverviewIndex } = prevProps,
            isOverviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
            wasOverviewShown = OVERVIEW_OPTIONS[prevOverviewIndex] === SHOWN

        if (isOverviewShown && !wasOverviewShown) {
            this.closeSections({
                exemptOverview: true,
                continuePastClosingPopups: true
            })
        }
    }

    _handleTipsShown(prevProps) {
        const
            { selectedTipsIndex } = this.props,
            { selectedTipsIndex: prevTipsIndex } = prevProps,
            isTipsShown = TIPS_OPTIONS[selectedTipsIndex] === SHOWN,
            wasTipsShown = TIPS_OPTIONS[prevTipsIndex] === SHOWN

        if (isTipsShown && !wasTipsShown) {
            this.closeSections({
                exemptOverview: true,
                exemptTips: true,
                continuePastClosingPopups: true
            })
        }
    }

    _handleScoreOpen(prevProps) {
        const
            { isScoreShown } = this.props,
            { isScoreShown: wasScoreShown } = prevProps

        if (isScoreShown && !wasScoreShown) {
            this.closeSections({
                justClosePopups: true,
                exemptScore: true
            })
        }
    }

    _handleTitleOpen(prevProps) {
        const
            { isTitleShown } = this.props,
            { isTitleShown: wasTitleShown } = prevProps


        if (isTitleShown && !wasTitleShown) {
            this.closeSections({
                justClosePopups: true,
                exemptTitle: true
            })
        }
    }

    _handleWikiSelect(prevProps) {
        const
            { selectedWikiIndex } = this.props,
            { selectedWikiIndex: prevWikiIndex } = prevProps


        if (selectedWikiIndex && !prevWikiIndex) {
            this.closeSections({
                justClosePopups: true,
                exemptWiki: true
            })
        }
    }

    _handleVerseInteractivate(prevProps) {
        const
            { interactivatedVerseIndex } = this.props,
            { interactivatedVerseIndex: prevVerseIndex } = prevProps

        if (interactivatedVerseIndex > -1 && prevVerseIndex === -1) {
            this.closeSections({
                exemptInteractivatedVerse: true,
                exemptDots: true,
                exemptLyric: true,
                exemptOverview: true,
                exemptTips: true
            })
        }
    }

    // TODO: Refactor, as this is kind of confusing.
    closeSections = ({
        exemptAnnotation,
        forceCarousel,
        exemptDots,
        exemptLyric,
        exemptOverview,
        exemptScore,
        exemptTitle,
        exemptTips,
        exemptWiki,
        exemptInteractivatedVerse,

        continuePastClosingPopups,
        justClosePopups,
        leaveOpenPopups

    }) => {
        const {
            isScoreShown,
            isTitleShown,
            selectedWikiIndex
        } = this.props

        if (!leaveOpenPopups) {

            // If popup is open, close it and do nothing else.
            if (selectedWikiIndex && !exemptWiki) {
                this.props.updateSessionStore({
                    selectedWikiIndex: 0,
                    carouselAnnotationIndex: 0
                })
                if (!continuePastClosingPopups) {
                    return
                }

            } else if (isScoreShown && !exemptScore) {
                this.props.updateToggleStore({ isScoreShown: false })
                if (!continuePastClosingPopups) {
                    return
                }

            } else if (isTitleShown && !exemptTitle) {
                this.props.updateToggleStore({ isTitleShown: false })
                if (!continuePastClosingPopups) {
                    return
                }
            }
        }

        if (justClosePopups) {
            return
        }

        if (!exemptAnnotation) {
            this.props.selectAnnotation()
        }

        if (forceCarousel) {
            this.props.selectCarouselNav(true)
        }

        if (!exemptDots) {
            this.props.updateToggleStore({ isDotsSlideShown: false })
        }

        if (!exemptLyric) {
            this.props.updateToggleStore({ isLyricExpanded: false })
        }

        if (!exemptOverview) {
            this.props.selectOverview({
                justHideIfShown: true
            })
        }

        if (!exemptTips) {
            this.props.selectTips({
                justHideIfShown: true
            })
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
    songStore: {
        selectedAnnotationIndex
    },
    toggleStore: {
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isTitleShown
    },
    sessionStore: {
        selectedOverviewIndex,
        selectedTipsIndex,
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
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex,
    interactivatedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CloseHandler)
