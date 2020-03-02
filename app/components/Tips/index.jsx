// Section to show song tip.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TipsToggle from './Toggle'
import Texts from '../Texts'
import TipImage from './Image'

import { getSongTip } from './helper'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class Tips extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired
    }

    render() {
        const { lyricSongIndex } = this.props,
            tipText = getSongTip(lyricSongIndex)

        return (
            <div className={cx(
                'Tips'
            )}>
                <div className={cx(
                    'Tips__textContainer',
                    'fontSize__verse'
                )}>
                    <div className="Tips__toggleFloatContainer">
                        <TipsToggle />
                    </div>

                    {tipText && (
                        <Texts {...{ text: tipText }} />
                    )}
                </div>

                <TipImage {...{ songIndex: lyricSongIndex }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Tips)
