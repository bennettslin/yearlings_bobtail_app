import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTipsIndex } from 'flux/actions/storage'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getShouldSkipHiddenStatus } from 'helpers/logicHelper'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
    TIPS_OPTIONS
} from 'constants/options'

class TipsManager extends Component {

    static propTypes = {
        // Through Redux.
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        selectDotsExpand: PropTypes.func.isRequired,
        selectLyricExpand: PropTypes.func.isRequired,
        selectTipsIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)

        this._showOrHideForNewSong()
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
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
        // We shouldn't be able to change overview if it's a logue.
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

            /**
             * If tip is being shown, collapse lyric column and hide dots
             * section.
             */
            if (TIPS_OPTIONS[selectedTipsIndex] !== DISABLED) {
                this.props.selectDotsExpand(false)
                this.props.selectLyricExpand(false)
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
            this.props.selectTipsIndex(selectedTipsIndex)
        }
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: {
        isScoreShown,
        isTitleShown,
        isLyricExpanded
    },
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex,
        isSelectedLogue
    },
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex
}) => ({
    isScoreShown,
    isTitleShown,
    isLyricExpanded,
    selectedAnnotationIndex,
    isSelectedLogue,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTipsIndex,
    selectedWikiIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectTipsIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TipsManager)
