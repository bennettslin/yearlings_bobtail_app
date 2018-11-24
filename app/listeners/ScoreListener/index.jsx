// Singleton to listen for non-toggle events that require turning off score.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class ScoreListener extends Component {

    static propTypes = {
        // Through Redux.
        isScoreShowable: PropTypes.bool.isRequired,
        isScoreShown: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this.closeScoreIfNeeded(prevProps)
    }

    closeScoreIfNeeded(prevProps) {
        const
            {
                isScoreShowable,
                isSelectedLogue
            } = this.props,
            {
                isScoreShowable: wasScoreShowable,
                isSelectedLogue: wasSelectedLogue
            } = prevProps

        if (
            (isSelectedLogue && !wasSelectedLogue) ||
            !isScoreShowable && wasScoreShowable
        ) {
            this.props.updateToggleStore({ isScoreShown: false })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    responsiveStore: { isScoreShowable },
    toggleStore: { isScoreShown },
    songStore: { isSelectedLogue }
}) => ({
    isScoreShowable,
    isScoreShown,
    isSelectedLogue
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScoreListener)
