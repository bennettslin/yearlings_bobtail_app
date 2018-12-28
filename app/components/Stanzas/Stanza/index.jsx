/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getStanzaConfig } from 'album/api/stanzas'

import Unit from '../Unit'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex }
}) => ({
    renderedSongIndex
})

const propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        stanzaIndex: PropTypes.number.isRequired,
        logicSelectors: PropTypes.string.isRequired
    },

    Stanza = memo(({
        renderedSongIndex,
        stanzaIndex,
        logicSelectors,

        ...other
    }) => {

        const
            { stanzaUnitIndices } = getStanzaConfig(
                renderedSongIndex,
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
                            key={unitIndex}
                            {...{ unitIndex }}
                        />
                    )
                })}
            </div>
        )
    })

Stanza.propTypes = propTypes

export default connect(mapStateToProps)(Stanza)
