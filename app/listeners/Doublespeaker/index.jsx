// Singleton to listen for changes that toggle doublespeaker treatment.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransientStore } from 'flux/transient/action'

import { getIsDoublespeakerShown } from './helper'

class DoublespeakerListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidUpdate() {
        this._determineIsDoublespeakerShown()
    }

    _determineIsDoublespeakerShown() {
        const
            {
                deviceIndex,
                lyricSongIndex
            } = this.props,
            isEarShown = getIsDoublespeakerShown({
                deviceIndex,
                songIndex: lyricSongIndex
            })

        this.props.updateTransientStore({ isEarShown })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    lyricStore: { lyricSongIndex }
}) => ({
    deviceIndex,
    lyricSongIndex
})

export default connect(
    mapStateToProps,
    { updateTransientStore }
)(DoublespeakerListener)
