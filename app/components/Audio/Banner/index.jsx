// Component to show played song title, time played, and slider interface.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Slider from '../../Slider'
import AudioTimer from '../Timer'

import { getSongTitle } from 'helpers/data'

const mapStateToProps = ({
    responsiveStore: { isTwoRowMenu },
    songStore: { selectedSongIndex }
}) => ({
    isTwoRowMenu,
    selectedSongIndex
})

class AudioBanner extends PureComponent {

    static propTypes = {
        // Through Redux.
        isTwoRowMenu: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired
    }

    render() {
        const {

                /* eslint-disable no-unused-vars */
                dispatch,
                /* eslint-enable no-unused-vars */

                isTwoRowMenu,
                selectedSongIndex,

                ...other
            } = this.props,

            songTitle = getSongTitle({
                songIndex: selectedSongIndex
            })

        return (
            <div className={cx(
                'AudioBanner',
                'absoluteFullContainer',

                isTwoRowMenu ?
                    'AudioBanner__belowMenu' :
                    'Audio__child'
            )}>

                <div className={cx(
                    'AudioBannerDisplay',
                    'absoluteFullContainer',
                    'flexAlignContainer'
                )}>
                    {songTitle}
                    <AudioTimer />
                </div>

                <Slider {...other} />

            </div>
        )
    }
}

export default connect(mapStateToProps)(AudioBanner)
