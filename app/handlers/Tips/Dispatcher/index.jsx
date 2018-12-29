import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from 'flux/option/action'

import { getNextOption } from '../../../helpers/options'

class TipsDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        toggleShowsTipsImmediately: PropTypes.bool.isRequired,
        updateOptionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchTips: this.dispatchTips
        })
    }

    dispatchTips = ({
        isToggled,
        tipsOption
    } = {}) => {

        const {
            isSelectedLogue,
            toggleShowsTipsImmediately
        } = this.props

        // Don't allow toggling if in logue.
        if (isSelectedLogue) {
            return false
        }

        const selectedTipsOption = getNextOption({
            isToggled,
            toggleShows: toggleShowsTipsImmediately,
            prevOption: this.props.selectedTipsOption,
            nextOption: tipsOption
        })

        this.props.updateOptionStore({ selectedTipsOption })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: { isSelectedLogue },
    optionStore: { selectedTipsOption },
    transientStore: { toggleShowsTipsImmediately }
}) => ({
    isSelectedLogue,
    selectedTipsOption,
    toggleShowsTipsImmediately
})

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(TipsDispatcher)
