// Singleton to listen for changes that toggle doublespeaker treatment.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransientStore } from 'flux/transient/action'

import { getIsDoublespeakerShown } from './helper'

class DoublespeakerListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceWidthIndex: PropTypes.number.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        updateTransientStore: PropTypes.func.isRequired
    }

    componentDidUpdate() {
        this._determineIsDoublespeakerShown()
    }

    _determineIsDoublespeakerShown() {
        const
            {
                deviceWidthIndex,
                lyricSongIndex
            } = this.props,
            isEarShown = getIsDoublespeakerShown({
                deviceWidthIndex,
                songIndex: lyricSongIndex
            })

        this.props.updateTransientStore({ isEarShown })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    viewportStore: { deviceWidthIndex },
    lyricStore: { lyricSongIndex }
}) => ({
    deviceWidthIndex,
    lyricSongIndex
})

export default connect(
    mapStateToProps,
    { updateTransientStore }
)(DoublespeakerListener)
