import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateOptionStore } from 'flux/option/action'

import { getNextOption } from '../../../helpers/options'

import { SHOWN } from 'constants/options'

class OverviewDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        toggleShowsOverviewImmediately: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchOverview: this.dispatchOverview
        })
    }

    dispatchOverview = ({
        isToggled,
        overviewOption
    } = {}) => {

        const {
            isSelectedLogue,
            toggleShowsOverviewImmediately,
            selectedOverviewOption: prevOverviewOption,
            selectedTipsOption
        } = this.props

        // Don't allow toggling if in logue.
        if (isSelectedLogue) {
            return false
        }

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

const mapStateToProps = ({
    songStore: { isSelectedLogue },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    transientStore: { toggleShowsOverviewImmediately }
}) => ({
    isSelectedLogue,
    selectedOverviewOption,
    selectedTipsOption,
    toggleShowsOverviewImmediately
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateOptionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(OverviewDispatcher)
