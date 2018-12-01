// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateToggleStore } from 'flux/toggle/action'

class ScrollVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedVerseIndex: PropTypes.number.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchScrollVerse = this.dispatchScrollVerse
    }

    dispatchScrollVerse = (isAutoScroll) => {
        const { selectedVerseIndex } = this.props

        this.props.updateScrollLyricStore({
            scrollLyricLog: 'Scroll back to selected verse.',
            doScrollLyricByVerse: true,
            scrollLyricIndex: selectedVerseIndex
        })

        this.props.updateToggleStore({
            isVerseBarAbove: false,
            isVerseBarBelow: false,
            ...isAutoScroll && { isAutoScroll }
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { selectedVerseIndex }
}) => ({
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollLyricStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScrollVerseDispatcher)
