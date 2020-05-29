// Singleton to watch for non-toggle events that require collapsing lyric.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSelectedStore } from '../../redux/selected/action'
import { IS_EAR_SHOWN_SELECTOR } from '../../redux/transient/selectors'
import {
    IS_SELECTED_LOGUE_SELECTOR,
    EAR_COLUMN_INDEX_SELECTOR
} from '../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        isEarShown = IS_EAR_SHOWN_SELECTOR(state),
        isSelectedLogue = IS_SELECTED_LOGUE_SELECTOR(state),
        earColumnIndex = EAR_COLUMN_INDEX_SELECTOR(state)

    return {
        isEarShown,
        earColumnIndex,
        isSelectedLogue
    }
}

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

export default connect(
    mapStateToProps,
    { updateSelectedStore }
)(EarColumnDispatcher)
