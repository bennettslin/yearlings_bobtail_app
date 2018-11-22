// Singleton to listen for changes that toggle doublespeaker treatment.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateTransientStore } from 'flux/transient/action'

import { getIsDoublespeakerShown } from './helper'

class DoublespeakerListener extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidUpdate() {
        this.determineIsDoublespeakerShown()
    }

    determineIsDoublespeakerShown() {
        const
            {
                deviceIndex,
                renderedSongIndex
            } = this.props,
            isDoublespeakerShown = getIsDoublespeakerShown({
                deviceIndex,
                songIndex: renderedSongIndex
            })

        this.props.updateTransientStore({
            isDoublespeakerShown
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    renderedStore: { renderedSongIndex }
}) => ({
    deviceIndex,
    renderedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateTransientStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DoublespeakerListener)
