import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { PARENT_ACCESS_PREFIX } from 'constants/prefixes'

class PlayingWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        isLyricLogue: PropTypes.bool.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        accessedKey: PropTypes.string.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
            isLyricLogue,
            isPlaying,
            isAccessOn,
            accessedKey,
            children
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'PlayingWrapper',

                        isLyricLogue ?
                            'SW__logue' :
                            'SW__song',
                        isPlaying ?
                            'SW__isPlaying' :
                            'SW__isPaused',

                        isAccessOn ?
                            'SW__accessOn' :
                            'SW__accessOff',

                        accessedKey &&
                            `${PARENT_ACCESS_PREFIX}${accessedKey}`
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    audioStore: { isPlaying },
    lyricStore: { isLyricLogue },
    toggleStore: { isAccessOn },
    accessStore: { accessedKey }
}) => ({
    isPlaying,
    isLyricLogue,
    isAccessOn,
    accessedKey
})

export default connect(mapStateToProps)(PlayingWrapper)
