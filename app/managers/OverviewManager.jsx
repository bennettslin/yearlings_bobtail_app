import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectOverviewIndex } from '../redux/actions/storage'

import { getSongIsLogue } from '../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../helpers/generalHelper'
import { getShouldSkipHidden } from '../helpers/logicHelper'

import { SHOWN,
         HIDDEN,
         DISABLED,
         OVERVIEW_OPTIONS } from '../constants/options'

class OverviewManager extends Component {

    static propTypes = {
        // Through Redux.
        isLyricExpanded: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedScoreIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedTitleIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        selectDotsExpand: PropTypes.func.isRequired,
        selectLyricExpand: PropTypes.func.isRequired,
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
        if (getSongIsLogue(this.props.selectedSongIndex)) {
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

            /**
             * If overview is being shown, collapse lyric column and hide dots
             * section.
             */
            if (OVERVIEW_OPTIONS[selectedOverviewIndex] !== DISABLED) {
                this.props.selectDotsExpand(false)
                this.props.selectLyricExpand(false)
            }

        } else {
            /**
             * If called when something else is visible, skip hidden option and
             * show immediately.
             */
            if (getShouldSkipHidden({
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
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedOverviewIndex,
    selectedScoreIndex,
    selectedSongIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedOverviewIndex,
    selectedScoreIndex,
    selectedSongIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    selectedWikiIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectOverviewIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(OverviewManager)
