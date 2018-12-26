/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Unit from '../Unit'

const propTypes = {
    // From parent.
        logicSelectors: PropTypes.string.isRequired,
        isLastStanza: PropTypes.bool.isRequired,
        stanzaConfig: PropTypes.shape({
            stanzaUnitIndices: PropTypes.array.isRequired
        }).isRequired
    },

    Stanza = memo(({
        logicSelectors,
        stanzaConfig,

        ...other
    }) => {

        const {
            stanzaUnitIndices
        } = stanzaConfig

        return (
            <div
                className={cx(
                    logicSelectors,
                    'Stanza'
                )}
            >
                {stanzaUnitIndices.map(unitIndex => {
                    return (
                        <Unit {...other}
                            key={unitIndex}
                            {...{
                                unitIndex
                            }}
                        />
                    )
                })}
            </div>
        )
    })

Stanza.propTypes = propTypes

export default Stanza
