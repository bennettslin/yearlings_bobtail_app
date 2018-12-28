/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import VerseDispatcher from '../../dispatchers/VerseDispatcher'
import StanzaHoc from './Hoc'
import Stanza from './Stanza'
import Unit from './Unit'

import { getSongStanzaConfigs } from 'album/api/stanzas'
import { getLastUnitDotCardIndex } from 'album/api/units'
import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex }
}) => ({
    renderedSongIndex
})

class Stanzas extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        setLyricAnnotationElement: PropTypes.func.isRequired,
        setVerseRef: PropTypes.func.isRequired
    }

    _handleVerseSelect = ({
        selectedVerseIndex,
        scrollLog
    }) => {
        this.dispatchVerse({
            selectedVerseIndex,
            scrollLog
        })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                renderedSongIndex,
                setLyricAnnotationElement,
                setVerseRef
            } = this.props,

            songStanzaConfigs = getSongStanzaConfigs(renderedSongIndex),
            lastUnitDotCardIndex = getLastUnitDotCardIndex(renderedSongIndex)

        return songStanzaConfigs.length && (
            <div
                {...{ className: 'Stanzas' }}
            >

                {/* This is the first unit dot card. There always is one. */}
                <Unit
                    {...{
                        unitIndex: 0,
                        setLyricAnnotationElement
                    }}
                />

                {songStanzaConfigs.map((stanzaConfig, stanzaIndex) => {

                    const isLastStanza =
                    stanzaIndex === songStanzaConfigs.length - 1

                    return (
                        <StanzaHoc
                            key={stanzaIndex}
                            {...{
                                stanzaConfig,
                                stanzaIndex,
                                isLastStanza,
                                StanzaComponent: Stanza,
                                handleVerseSelect: this._handleVerseSelect,
                                setLyricAnnotationElement,
                                setVerseRef
                            }}
                        />
                    )
                })}

                {/* This is the last unit dot card, if there is one. */}
                {lastUnitDotCardIndex > -1 && (
                    <Unit
                        {...{
                            unitIndex: lastUnitDotCardIndex,
                            setLyricAnnotationElement
                        }}
                    />
                )}
                <VerseDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stanzas)
