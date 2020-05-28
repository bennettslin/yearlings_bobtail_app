// Section to show song overview.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import Texts from '../Texts'
import OverviewToggle from '../Main/OverviewToggle'
import { getOverviewForSong } from '../../album/api/songs'
import { getIsToggleInOverview } from './helper'
import { IS_HEIGHTLESS_LYRIC_SELECTOR } from '../../redux/responsive/selectors'
import {
    LYRIC_SONG_INDEX_SELECTOR,
    IS_LYRIC_LOGUE_SELECTOR
} from '../../redux/lyric/selectors'
import './style'

const mapStateToProps = state => {
    const {
            viewportStore: { isPhoneWidth }
        } = state,
        isHeightlessLyric = IS_HEIGHTLESS_LYRIC_SELECTOR(state),
        lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
        isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)

    return {
        isPhoneWidth,
        isHeightlessLyric,
        lyricSongIndex,
        isLyricLogue
    }
}

class Overview extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhoneWidth: PropTypes.bool.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        isLyricLogue: PropTypes.bool.isRequired
    }

    render() {
        const {
                isPhoneWidth,
                isHeightlessLyric,
                lyricSongIndex,
                isLyricLogue
            } = this.props,

            overviewText = getOverviewForSong(lyricSongIndex),

            isToggleInOverview = getIsToggleInOverview({
                isPhoneWidth,
                isHeightlessLyric,
                isLyricLogue
            })

        return (
            <div className={cx(
                'Overview',
                'fontSize__verse',
                isToggleInOverview &&
                    'Overview__toggleInOverview'
            )}>
                {isToggleInOverview &&
                    <div className="Overview__toggleFloatContainer">
                        <OverviewToggle isToggleInOverview />
                    </div>
                }
                <Texts {...{ text: overviewText }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Overview)
