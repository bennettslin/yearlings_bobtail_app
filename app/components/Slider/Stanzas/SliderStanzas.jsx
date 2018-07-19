// Static field that shows the song stanzas in the slider.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderStanza from './SliderStanza'

import {
    getSongTotalTime,
    getSongStanzaConfigs,
    getStanzaIndexForVerseIndex
} from '../../../helpers/dataHelper'

const mapStateToProps = ({
    canSliderRender,
    renderableStore,
    sliderStore
}) => ({
    canSliderRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableVerseIndex: renderableStore.renderableVerseIndex,
    sliderVerseIndex: sliderStore.sliderVerseIndex
})

class SliderStanzas extends Component {

    static propTypes = {
        // Through Redux.
        canSliderRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender
    }

    render() {
        const {
            renderableSongIndex,
            renderableVerseIndex,
            sliderVerseIndex
        } = this.props,
            songTotalTime = getSongTotalTime(renderableSongIndex),
            songStanzaConfigs = getSongStanzaConfigs(renderableSongIndex)

        return (
            <div className={cx(
                'SliderStanzas',
                'absoluteFullContainer'
            )}>
                {songStanzaConfigs.map((songStanzaConfig, stanzaIndex) => {

                    const
                        {
                            stanzaVerseConfigs,
                            stanzaEndTime,
                            stanzaType
                        } = songStanzaConfig,

                        isLastStanza =
                            stanzaIndex === songStanzaConfigs.length - 1,

                        /**
                         * If slider touched, compare unit to slider verse.
                         * Otherwise, compare to selected verse. Same as lyric
                         * stanza.
                         */
                        cursorVerseIndex = sliderVerseIndex > -1 ?
                            sliderVerseIndex :
                            renderableVerseIndex,

                        cursorStanzaIndex = getStanzaIndexForVerseIndex(
                            renderableSongIndex, cursorVerseIndex
                        ),

                        isBeforeCursor = stanzaIndex > cursorStanzaIndex,
                        isAfterCursor = stanzaIndex < cursorStanzaIndex,
                        isOnCursor = stanzaIndex === cursorStanzaIndex

                    return (
                        <SliderStanza
                            key={stanzaIndex}
                            {...{
                                isLastStanza,
                                songTotalTime,

                                isBeforeCursor,
                                isAfterCursor,
                                isOnCursor,

                                stanzaVerseConfigs,
                                stanzaEndTime,
                                stanzaType
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderStanzas)
