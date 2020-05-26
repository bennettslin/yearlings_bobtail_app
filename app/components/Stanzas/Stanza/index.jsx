/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getUnitIndicesForStanza } from '../../../album/api/stanzas'

import Unit from '../Unit'

const mapStateToProps = state => {
    const {
        lyricStore: { lyricSongIndex }
    } = state

    return {
        lyricSongIndex
    }
}

const propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,

        // From parent.
        stanzaIndex: PropTypes.number.isRequired,
        logicSelectors: PropTypes.string.isRequired
    },

    Stanza = ({
        lyricSongIndex,
        stanzaIndex,
        logicSelectors,

        ...other
    }) => {

        const stanzaUnitIndices = getUnitIndicesForStanza(
            lyricSongIndex,
            stanzaIndex
        )

        return (
            <div
                className={cx(
                    'Stanza',
                    logicSelectors
                )}
            >
                {stanzaUnitIndices.map(unitIndex => {
                    return (
                        <Unit {...other}
                            {...{
                                key: unitIndex,
                                unitIndex
                            }}
                        />
                    )
                })}
            </div>
        )
    }

Stanza.propTypes = propTypes

export default connect(mapStateToProps)(memo(Stanza))
