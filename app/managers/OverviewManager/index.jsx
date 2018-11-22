import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectOverviewIndex } from 'flux/actions/storage'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getShouldSkipHiddenStatus } from 'helpers/logicHelper'

import {
    SHOWN,
    HIDDEN,
    OVERVIEW_OPTIONS
} from 'constants/options'

class OverviewManager extends Component {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isTitleShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        selectOverviewIndex: PropTypes.func.isRequired,

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
        this.selectOverview({
            justShowIfHidden: !selectedAnnotationIndex,
            justHideIfShown: selectedAnnotationIndex
        })
    }

    selectOverview({
        clickToggle,
        justHideIfShown,
        justShowIfHidden
    }) {

        // We shouldn't be able to change overview it's a logue.
        if (this.props.isSelectedLogue) {
            return false
        }

        let selectedOverviewIndex = this.props.selectedOverviewIndex

        // If called from body click, hide if shown.
        if (justHideIfShown) {
            if (OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN) {
                selectedOverviewIndex = 2 // Hidden.
            }

        // If called from song select, show if hidden.
        } else if (justShowIfHidden) {
            if (OVERVIEW_OPTIONS[selectedOverviewIndex] === HIDDEN) {
                selectedOverviewIndex = 0 // Shown.
            }

        } else {
            /**
             * If called when something else is visible, skip hidden option and
             * show immediately.
             */
            if (getShouldSkipHiddenStatus({
                ...this.props,
                calledByOverview: true
            })) {
                selectedOverviewIndex = 0

            } else {
                do {
                    // If it's a keydown event, cycle through all three options.
                    selectedOverviewIndex = (selectedOverviewIndex + 1) % OVERVIEW_OPTIONS.length

                    // If it's a click event, skip hidden.
                } while (clickToggle && OVERVIEW_OPTIONS[selectedOverviewIndex] === HIDDEN)
            }
        }

        // Overview options are shown, disabled, hidden.
        if (selectedOverviewIndex !== this.props.selectedOverviewIndex) {
            this.props.selectOverviewIndex(selectedOverviewIndex)
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
        isScoreShown,
        isTitleShown,
        isLyricExpanded
    },
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex,
        isSelectedLogue
    },
    selectedOverviewIndex,
    selectedTipsIndex,
    selectedWikiIndex
}) => ({
    isScoreShown,
    isTitleShown,
    isLyricExpanded,
    selectedAnnotationIndex,
    isSelectedLogue,
    isCarouselShown,
    isDotsSlideShown,
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTipsIndex,
    selectedWikiIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectOverviewIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(OverviewManager)
