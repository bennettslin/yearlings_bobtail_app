// Static field that shows the song stanzas in the slider.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import StanzaHoc from '../../Stanzas/Hoc'
import SliderStanza from './Stanza'

import {
    getSongTotalTime,
    getSongStanzaConfigs
} from 'helpers/data'

const mapStateToProps = ({
    renderStore: { canVerseRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canVerseRender,
    renderedSongIndex
})

class SliderStanzas extends Component {

    static propTypes = {
        // Through Redux.
        canVerseRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canVerseRender
    }

    render() {
        const {
                renderedSongIndex
            } = this.props,
            songTotalTime = getSongTotalTime(renderedSongIndex),
            songStanzaConfigs = getSongStanzaConfigs(renderedSongIndex)

        return (
            <div className={cx(
                'SliderStanzas',
                'absoluteFullContainer'
            )}>
                {songStanzaConfigs.map((stanzaConfig, stanzaIndex) => {

                    const isLastStanza =
                        stanzaIndex === songStanzaConfigs.length - 1

                    return (
                        <StanzaHoc
                            key={stanzaIndex}
                            {...{
                                stanzaIndex,
                                isLastStanza,
                                songTotalTime,
                                stanzaConfig,
                                StanzaComponent: SliderStanza
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderStanzas)
