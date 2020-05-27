// Singleton to listen for non-toggle events that require turning off score.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'

const mapStateToProps = state => {
    const {
        mountStore: { canScoreMount },
        selectedStore: { isSelectedLogue }
    } = state

    return {
        canScoreMount,
        isSelectedLogue
    }
}

class ScoreListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        canScoreMount: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._closeScoreIfNeeded(prevProps)
    }

    _closeScoreIfNeeded(prevProps) {
        const
            {
                canScoreMount,
                isSelectedLogue
            } = this.props,
            {
                canScoreMount: wasScoreShowable,
                isSelectedLogue: wasSelectedLogue
            } = prevProps

        if (
            (isSelectedLogue && !wasSelectedLogue) ||
            (!canScoreMount && wasScoreShowable)
        ) {
            this.props.updateToggleStore({ isScoreShown: false })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(ScoreListener)
