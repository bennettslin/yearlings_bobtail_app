// Singleton to watch for non-toggle events that require collapsing lyric.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateSelectedStore } from '../../redux/selected/action'

class EarColumnDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isEarShown: PropTypes.bool.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,

        updateSelectedStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchEarColumn: this.dispatchEarColumn
        })
    }

    dispatchEarColumn = ({
        earColumnIndex = (this.props.earColumnIndex + 1) % 2
    } = {}) => {
        const {
            isEarShown,
            isSelectedLogue
        } = this.props

        /**
         * We shouldn't be able to select lyric column if not in a song that
         * has ear toggle, or if in a logue.
         */
        if (!isEarShown || isSelectedLogue) {
            return false
        }

        this.props.updateSelectedStore({ earColumnIndex })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    transientStore: { isEarShown },
    selectedStore: {
        isSelectedLogue,
        earColumnIndex
    }
}) => ({
    isEarShown,
    earColumnIndex,
    isSelectedLogue
})

export default connect(
    mapStateToProps,
    { updateSelectedStore }
)(EarColumnDispatcher)
