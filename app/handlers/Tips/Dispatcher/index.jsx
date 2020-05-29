import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateOptionStore } from '../../../redux/option/action'
import { IS_LYRIC_LOGUE_SELECTOR } from '../../../redux/lyric/selectors'
import {
    IS_TIPS_SHOWABLE_SELECTOR,
    TOGGLE_SHOWS_TIPS_IMMEDIATELY_SELECTOR
} from '../../../redux/transient/selectors'
import { getNextOption } from '../../../helpers/options'

const mapStateToProps = state => {
    const {
            optionStore: { selectedTipsOption }
        } = state,
        isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state),
        isTipsShowable = IS_TIPS_SHOWABLE_SELECTOR(state),
        toggleShowsTipsImmediately = TOGGLE_SHOWS_TIPS_IMMEDIATELY_SELECTOR(state)

    return {
        isLyricLogue,
        selectedTipsOption,
        isTipsShowable,
        toggleShowsTipsImmediately
    }
}

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

export default connect(
    mapStateToProps,
    { updateOptionStore }
)(TipsDispatcher)
