// Static field that shows the song stanzas in the slider.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import StanzaHoc from '../../Stanzas/Hoc'
import SliderStanza from './Stanza'

import { getSongStanzasCount } from 'album/api/stanzas'
import { getArrayOfLength } from '../../../helpers/general'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class SliderStanzas extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired
    }

    render() {
        const
            { lyricSongIndex } = this.props,
            songStanzasCount = getSongStanzasCount(lyricSongIndex),
            stanzaIndicesArray = getArrayOfLength(songStanzasCount)

        return (
            <div className={cx(
                'SliderStanzas',
                'abF'
            )}>
                {stanzaIndicesArray.map(stanzaIndex => {
                    const isLastStanza = stanzaIndex === songStanzasCount - 1

                    return (
                        <StanzaHoc
                            key={stanzaIndex}
                            {...{
                                stanzaIndex,
                                isLastStanza,
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
