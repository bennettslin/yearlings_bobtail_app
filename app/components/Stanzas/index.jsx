/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import StanzaHoc from './Hoc'
import Stanza from './Stanza'
import Unit from './Unit'

class Stanzas extends PureComponent {

    static propTypes = {
        // From parent.
        songStanzaConfigs: PropTypes.array.isRequired,
        lastUnitDotCardIndex: PropTypes.number.isRequired
    }

    render() {
        const {
            songStanzaConfigs,
            lastUnitDotCardIndex,
            ...other
        } = this.props

        return songStanzaConfigs.length && (
            <div className={cx(
                'Stanzas'
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
}

export default Stanzas
