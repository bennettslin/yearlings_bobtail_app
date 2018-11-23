import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import { getShouldSkipHiddenStatus } from 'helpers/logicHelper'

import {
    SHOWN,
    HIDDEN,
    TIPS_OPTIONS
} from 'constants/options'

class TipsManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)

        this._showOrHideForNewSong()
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this._showOrHideForNewSong()
        }
    }

    _showOrHideForNewSong() {
        const { selectedAnnotationIndex } = this.props

        // Show if hidden. But if there's a selected annotation, hide if shown.
        this.selectTips({
            justShowIfHidden: !selectedAnnotationIndex,
            justHideIfShown: selectedAnnotationIndex
        })
    }

    selectTips({
        clickToggle,
        justHideIfShown,
        justShowIfHidden
    }) {
        // We shouldn't be able to change tips if it's a logue.
        if (this.props.isSelectedLogue) {
            return false
        }

        let selectedTipsIndex = this.props.selectedTipsIndex

        // If called from body click, hide if shown.
        if (justHideIfShown) {
            if (TIPS_OPTIONS[selectedTipsIndex] === SHOWN) {
                selectedTipsIndex = 2 // Hidden.
            }

        // If called from song select, show if hidden.
        } else if (justShowIfHidden) {
            if (TIPS_OPTIONS[selectedTipsIndex] === HIDDEN) {
                selectedTipsIndex = 0 // Shown.
            }

        } else {
            /**
             * If called when something else is visible, skip hidden option and
             * show immediately.
             */
            if (getShouldSkipHiddenStatus({
                ...this.props,
                calledByTips: true
            })) {
                selectedTipsIndex = 0

            } else {
                do {
                    // If it's a keydown event, cycle through all three options.
                    selectedTipsIndex = (selectedTipsIndex + 1) % TIPS_OPTIONS.length

                    // If it's a click event, skip hidden.
                } while (clickToggle && TIPS_OPTIONS[selectedTipsIndex] === HIDDEN)
            }
        }

        // Overview options are shown, disabled, hidden.
        if (selectedTipsIndex !== this.props.selectedTipsIndex) {
            this.props.updateSessionStore({ selectedTipsIndex })
        }
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: {
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded,
        isScoreShown,
        isTitleShown
    },
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex,
        isSelectedLogue
    },
    sessionStore: {
        selectedOverviewIndex,
        selectedTipsIndex,
        selectedWikiIndex
    }
}) => ({
    isCarouselShown,
    isDotsSlideShown,
    isLyricExpanded,
    isScoreShown,
    isTitleShown,
    selectedAnnotationIndex,
    isSelectedLogue,
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTipsIndex,
    selectedWikiIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TipsManager)
