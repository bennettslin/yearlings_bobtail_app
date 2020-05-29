import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import { getNextOption } from '../../../helpers/options'
import { SHOWN } from '../../../constants/options'
import {
    IS_LOGUE_OVERVIEW_SHOWN_SELECTOR,
    SELECTED_OVERVIEW_OPTION_SELECTOR,
    SELECTED_TIPS_OPTION_SELECTOR
} from '../../../redux/option/selectors'
import { IS_HEIGHTLESS_LYRIC_SELECTOR } from '../../../redux/responsive/selectors'
import { TOGGLE_SHOWS_OVERVIEW_IMMEDIATELY_SELECTOR } from '../../../redux/transient/selectors'

const mapStateToProps = state => {
    const {
            selectedStore: { isSelectedLogue }
        } = state,
        isHeightlessLyric = IS_HEIGHTLESS_LYRIC_SELECTOR(state),
        toggleShowsOverviewImmediately = TOGGLE_SHOWS_OVERVIEW_IMMEDIATELY_SELECTOR(state),
        isLogueOverviewShown = IS_LOGUE_OVERVIEW_SHOWN_SELECTOR(state),
        selectedOverviewOption = SELECTED_OVERVIEW_OPTION_SELECTOR(state),
        selectedTipsOption = SELECTED_TIPS_OPTION_SELECTOR(state)

    return {
        isSelectedLogue,
        isHeightlessLyric,
        isLogueOverviewShown,
        selectedOverviewOption,
        selectedTipsOption,
        toggleShowsOverviewImmediately
    }
}

class OverviewDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isLogueOverviewShown: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        toggleShowsOverviewImmediately: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({ dispatchOverview: this.dispatchOverview })
    }

    dispatchOverview = ({
        isToggled,
        overviewOption
    } = {}) => {
        const { isSelectedLogue } = this.props

        return isSelectedLogue ?
            this._dispatchLogueOverview() :
            this._dispatchSongOverview({
                isToggled,
                overviewOption
            })

    }

    _dispatchLogueOverview({
        isLogueOverviewShown = !this.props.isLogueOverviewShown
    } = {}) {
        const { isHeightlessLyric } = this.props

        // Don't allow overview to be toggled if not heightless.
        if (!isHeightlessLyric) {
            return false
        }

        this.props.updateOptionStore({ isLogueOverviewShown })
        return true
    }

    _dispatchSongOverview({
        isToggled,
        overviewOption
    }) {
        const {
            toggleShowsOverviewImmediately,
            selectedOverviewOption: prevOverviewOption,
            selectedTipsOption
        } = this.props

        const selectedOverviewOption = getNextOption({
                isToggled,
                toggleShows: toggleShowsOverviewImmediately,
                prevOption: this.props.selectedOverviewOption,
                nextOption: overviewOption
            }),

            /**
             * If both overview and tips are shown, user may try to show the
             * overview by pressing key. This is the only way to handle it.
             */
            bothOverviewAndTipsShown =
                selectedOverviewOption === SHOWN &&
                prevOverviewOption === SHOWN &&
                selectedTipsOption === SHOWN

        this.props.updateOptionStore({
            selectedOverviewOption,
            ...bothOverviewAndTipsShown && {
                isForcedShownOverview: true
            }
        })
        return true
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(OverviewDispatcher)
