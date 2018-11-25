/**
 * Listener for closing multiple sections. Because the logic is so similar for
 * each section, it is better for dev clarity to keep them together.
 */

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEventStore } from 'flux/event/action'
import { updateSessionStore } from 'flux/session/action'
import { updateSongStore } from 'flux/song/action'
import { updateToggleStore } from 'flux/toggle/action'

import {
    SHOWN,
    HIDDEN
} from '../../constants/options'

class CloseListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        bodyClicked: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateEventStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleBodyClick(prevProps)
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

    _handleBodyClick(prevProps) {
        const
            { bodyClicked } = this.props,
            { bodyClicked: prevBodyClicked } = prevProps

        if (bodyClicked && !prevBodyClicked) {
            this.closeSections({
                exemptLyric: true,

                // If clicking to dismiss tips, leave overview shown.
                exemptOverview: this.props.selectedTipsOption === SHOWN

            })

            this.props.updateEventStore({ bodyClicked: false })
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
                exemptDots: true,
                exemptInteractivatedVerse: true
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
                exemptLyric: true
            })
        }
    }

    _handleOverviewShown(prevProps) {
        const
            { selectedOverviewOption } = this.props,
            { selectedOverviewOption: prevOverviewOption } = prevProps,
            isOverviewShown = selectedOverviewOption === SHOWN,
            wasOverviewShown = prevOverviewOption === SHOWN

        if (isOverviewShown && !wasOverviewShown) {
            this.closeMainSections({
                exemptOverview: true
            })
        }
    }

    _handleTipsShown(prevProps) {
        const
            { selectedTipsOption } = this.props,
            { selectedTipsOption: prevTipsOption } = prevProps,
            isTipsShown = selectedTipsOption === SHOWN,
            wasTipsShown = prevTipsOption === SHOWN

        if (isTipsShown && !wasTipsShown) {
            this.closeMainSections({
                exemptOverview: true,
                exemptTips: true
            })
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
                exemptDots: true,
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
            this.closeMainSections()
        }
    }

    _handleTitleOpen(prevProps) {
        const
            { isTitleShown } = this.props,
            { isTitleShown: wasTitleShown } = prevProps

        if (isTitleShown && !wasTitleShown) {
            this.closeOverlayPopups({ exemptTitle: true })
            this.closeMainSections()
        }
    }

    _handleWikiSelect(prevProps) {
        const
            { selectedWikiIndex } = this.props,
            { selectedWikiIndex: prevWikiIndex } = prevProps

        if (selectedWikiIndex && !prevWikiIndex) {
            this.closeOverlayPopups({ exemptWiki: true })
            this.closeMainSections()
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
        }
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
                this.props.updateSessionStore({
                    selectedOverviewOption: HIDDEN
                })
            }
        }

        if (!exemptTips) {
            // Just hide tips when opening other sections.
            if (selectedTipsOption === SHOWN) {
                this.props.updateSessionStore({
                    selectedTipsOption: HIDDEN
                })
            }
        }

        if (!exemptInteractivatedVerse) {
            this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
        }
    }

    // TODO: Refactor, as this is kind of confusing.
    closeSections = ({
        exemptAnnotation,
        exemptDots,
        exemptLyric,
        exemptOverview,
        exemptScore,
        exemptTitle,
        exemptTips,
        exemptWiki,
        exemptInteractivatedVerse,

        continuePastClosingPopups,
        justClosePopups

    }) => {
        const {
            isScoreShown,
            isTitleShown,
            selectedOverviewOption,
            selectedTipsOption,
            selectedWikiIndex
        } = this.props

        // If popup is open, close it and do nothing else.
        if (selectedWikiIndex && !exemptWiki) {
            this.props.updateSessionStore({ selectedWikiIndex: 0 })
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

        if (justClosePopups) {
            return
        }

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
                this.props.updateSessionStore({
                    selectedOverviewOption: HIDDEN
                })
            }
        }

        if (!exemptTips) {
            // Just hide tips when opening other sections.
            if (selectedTipsOption === SHOWN) {
                this.props.updateSessionStore({
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
    eventStore: {
        bodyClicked
    },
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
        selectedOverviewOption,
        selectedTipsOption,
        selectedWikiIndex,
        interactivatedVerseIndex
    }
}) => ({
    bodyClicked,
    selectedAnnotationIndex,
    isCarouselShown,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isTitleShown,
    selectedOverviewOption,
    selectedTipsOption,
    selectedWikiIndex,
    interactivatedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateEventStore,
        updateSessionStore,
        updateSongStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CloseListener)
