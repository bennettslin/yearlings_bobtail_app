// Static field that shows the song stanzas in the slider.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import StanzaHoc from '../../Stanzas/Hoc'
import SliderStanza from './Stanza'

import { getSongTotalTime } from 'album/api/time'
import { getSongStanzaConfigs } from 'album/api/stanzas'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex }
}) => ({
    renderedSongIndex
})

class SliderStanzas extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired
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
                'abF'
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
