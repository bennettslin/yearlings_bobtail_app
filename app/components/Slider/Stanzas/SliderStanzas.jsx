// Static field that shows the song stanzas in the slider.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderStanza from './SliderStanza'
import StanzaHoc from '../../Stanza/Hoc/StanzaHoc'

import {
    getSongTotalTime,
    getSongStanzaConfigs
} from 'helpers/dataHelper'

const mapStateToProps = ({
    canSliderRender,
    renderableStore
}) => ({
    canSliderRender,
    renderableSongIndex: renderableStore.renderableSongIndex
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
            renderableSongIndex
        } = this.props,
            songTotalTime = getSongTotalTime(renderableSongIndex),
            songStanzaConfigs = getSongStanzaConfigs(renderableSongIndex)

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
