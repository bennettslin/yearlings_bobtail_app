/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Unit from './Unit/Unit'

const propTypes = {
    // From parent.
    isLastStanza: PropTypes.bool.isRequired,
    stanzaIndex: PropTypes.number.isRequired,
    stanzaConfig: PropTypes.object.isRequired
},

Stanza = ({

    stanzaConfig,
    stanzaIndex,
    isLastStanza,

...other }) => {

    const { stanzaUnitIndices } = stanzaConfig

    return (
        <div
            className={cx(
                // "Child component stanza index."

                // Aligned selector when on cursor.
                !isNaN(stanzaIndex) &&
                    `ChS${stanzaIndex}`,

                /**
                 * General selector when before cursor, general
                 * sibling selector when after cursor.
                 */
                !isNaN(stanzaIndex) &&
                    'ChS',

                'Stanza'
            )}
        >
            {stanzaUnitIndices.map(unitIndex => {
                const isLastUnit =
                    isLastStanza &&
                    unitIndex === stanzaUnitIndices.length - 1

                return (
                    <Unit {...other}
                        key={unitIndex}
                        {...{
                            unitIndex,
                            isLastUnit
                        }}
                    />
                )
            })}
        </div>
    )
}

Stanza.propTypes = propTypes

export default Stanza
