/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import VerseDispatcher from '../../dispatchers/VerseDispatcher'
import Stanza from './Stanza'
import Unit from '../Unit'
import { getStanzaIndices } from '../../album/api/stanzas'
import { getLastUnitDotCardIndex } from '../../album/api/units'
import { mapLyricSongIndex } from '../../redux/lyric/selectors'
import './logic'
import './style'

const mapStateToProps = state => {
    const lyricSongIndex = mapLyricSongIndex(state)

    return {
        lyricSongIndex
    }
}

class Stanzas extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,

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

    getDispatchVerse = dispatch => {
        this.dispatchVerse = dispatch
    }

    render() {
        const {
                lyricSongIndex,
                setLyricAnnotationElement,
                setVerseRef
            } = this.props,

            stanzaIndices = getStanzaIndices(lyricSongIndex),
            lastUnitDotCardIndex = getLastUnitDotCardIndex(lyricSongIndex)

        return stanzaIndices.length && (
            <div {...{ className: 'Stanzas' }} >
                {/* This is the unit title with first unit dot. */}
                <Unit
                    {...{
                        unitIndex: 0,
                        setLyricAnnotationElement
                    }}
                />

                {stanzaIndices.map(stanzaIndex => (
                    <Stanza
                        {...{
                            key: stanzaIndex,
                            stanzaIndex,
                            handleVerseSelect: this._handleVerseSelect,
                            setLyricAnnotationElement,
                            setVerseRef
                        }}
                    />
                ))}

                {/* This is the last unit dot card, if there is one. */}
                {lastUnitDotCardIndex > -1 && (
                    <Unit
                        {...{
                            unitIndex: lastUnitDotCardIndex,
                            setLyricAnnotationElement
                        }}
                    />
                )}
                <VerseDispatcher {...{ ref: this.getDispatchVerse }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stanzas)
