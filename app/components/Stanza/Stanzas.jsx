/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Stanza from './Stanza'
import StanzaHoc from './Hoc/StanzaHoc'
import Unit from './Unit/Unit'

const propTypes = {
    // From parent.
    songStanzaConfigs: PropTypes.array.isRequired,
    lastUnitDotCardIndex: PropTypes.number.isRequired
},

Stanzas = ({

    songStanzaConfigs,
    lastUnitDotCardIndex,

...other }) => {

    return songStanzaConfigs.length && (
        <div className={cx(
            'LyricScroll'
        )}>

            {/* This is the title. */}
            <Unit {...other}
                {...{
                    unitIndex: 0
                }}
            />

            {songStanzaConfigs.map((stanzaConfig, stanzaIndex) => {

                const isLastStanza =
                    stanzaIndex === songStanzaConfigs.length - 1

                return (
                    <StanzaHoc {...other}
                        key={stanzaIndex}
                        {...{
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
        </div>
    )
}

Stanzas.propTypes = propTypes

export default Stanzas
