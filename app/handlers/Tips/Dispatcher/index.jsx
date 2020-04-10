import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from 'flux/option/action'

import { getNextOption } from '../../../helpers/options'

class TipsDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isTipsShowable: PropTypes.bool.isRequired,
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
            isLyricLogue,
            isTipsShowable,
            toggleShowsTipsImmediately
        } = this.props

        // Don't allow toggling in logue, or if no tip for this device width.
        if (isLyricLogue || !isTipsShowable) {
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
    lyricStore: { isLyricLogue },
    optionStore: { selectedTipsOption },
    transientStore: {
        isTipsShowable,
        toggleShowsTipsImmediately
    }
}) => ({
    isLyricLogue,
    selectedTipsOption,
    isTipsShowable,
    toggleShowsTipsImmediately
})

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(TipsDispatcher)
