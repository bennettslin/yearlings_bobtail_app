// Static field that shows the song stanzas in the slider.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import StanzaHoc from '../../Stanzas/Hoc'
import SliderStanza from './Stanza'

import { getStanzaIndicesArray } from '../../../album/api/stanzas'

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
            stanzaIndicesArray = getStanzaIndicesArray(lyricSongIndex)

        return (
            <div className={cx(
                'SliderStanzas',
                'abF'
            )}>
                {stanzaIndicesArray.map(stanzaIndex => (
                    <StanzaHoc
                        {...{
                            key: stanzaIndex,
                            stanzaIndex,
                            StanzaComponent: SliderStanza
                        }}
                    />
                ))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderStanzas)
