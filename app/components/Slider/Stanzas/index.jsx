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
        const
            { renderedSongIndex } = this.props,
            songStanzasCount = getSongStanzasCount(renderedSongIndex),
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
