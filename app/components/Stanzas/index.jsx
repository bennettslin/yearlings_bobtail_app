/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import VerseDispatcher from '../../dispatchers/VerseDispatcher'
import StanzaHoc from './Hoc'
import Stanza from './Stanza'
import Unit from './Unit'

import { getSongStanzaConfigs } from 'helpers/data'
import { populateRefs } from 'helpers/ref'
import { getLastUnitDotCardIndex } from './helper'

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
        setLyricAnnotationElement: PropTypes.func.isRequired
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
                ...other
            } = this.props,

            songStanzaConfigs = getSongStanzaConfigs(
                renderedSongIndex
            ),

            lastUnitDotCardIndex = getLastUnitDotCardIndex(
                renderedSongIndex
            )

        return songStanzaConfigs.length && (
            <div className={cx(
                'Stanzas'
            )}>

                {/* This is the title. */}
                <Unit {...other}
                    {...{ unitIndex: 0 }}
                />

                {songStanzaConfigs.map((stanzaConfig, stanzaIndex) => {

                    const isLastStanza =
                    stanzaIndex === songStanzaConfigs.length - 1

                    return (
                        <StanzaHoc {...other}
                            key={stanzaIndex}
                            {...{
                                handleVerseSelect: this._handleVerseSelect,
                                stanzaConfig,
                                stanzaIndex,
                                isLastStanza,
                                StanzaComponent: Stanza
                            }}
                        />
                    )
                })}

                {/* This is the last unit dot card, if there is one. */}
                {lastUnitDotCardIndex > -1 && (
                    <Unit {...other}
                        {...{
                            unitIndex: lastUnitDotCardIndex
                        }}
                    />
                )}
                <VerseDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stanzas)
