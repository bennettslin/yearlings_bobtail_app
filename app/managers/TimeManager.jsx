import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSelectedStore } from 'flux/actions/storage'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class TimeManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        updateSelectedStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSelectedStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeManager)
