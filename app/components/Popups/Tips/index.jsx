// Popup container for tips section.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'
import { getShowTipForDevice } from '../../../album/api/tips'
import { SHOWN } from '../../../constants/options'
import {
    LYRIC_SONG_INDEX_SELECTOR,
    IS_LYRIC_LOGUE_SELECTOR
} from '../../../redux/lyric/selectors'
import './style'

const mapStateToProps = state => {
    const {
            entranceStore: { canLyricCarouselEnter },
            optionStore: { selectedTipsOption },
            viewportStore: {
                isPhoneWidth,
                isTabletWidth,
                isDesktopWidth
            }
        } = state,
        lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
        isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)

    return {
        canLyricCarouselEnter,
        isLyricLogue,
        lyricSongIndex,
        selectedTipsOption,
        isPhoneWidth,
        isTabletWidth,
        isDesktopWidth
    }
}

class TipsPopup extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired,
        isLyricLogue: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isPhoneWidth: PropTypes.bool.isRequired,
        isTabletWidth: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired
    }

    render() {
        const
            {
                canLyricCarouselEnter,
                isLyricLogue,
                lyricSongIndex,
                selectedTipsOption,
                isPhoneWidth,
                isTabletWidth,
                isDesktopWidth
            } = this.props,

            isVisible =
                canLyricCarouselEnter &&
                !isLyricLogue &&
                selectedTipsOption === SHOWN &&

                // Ensure this song's tip can be shown for this viewport width.
                getShowTipForDevice({
                    songIndex: lyricSongIndex,
                    isPhoneWidth,
                    isTabletWidth,
                    isDesktopWidth
                })

        return (
            <Popup
                doMountonEnter
                doUnmountOnExit
                isCardSize
                bounceAnimate
                hasNarrowPadding
                noAbsoluteFull
                {...{
                    popupName: 'TipsPopup',
                    isVisible
                }}
            >
                <Tips />
            </Popup>
        )
    }
}

export default connect(mapStateToProps)(TipsPopup)
