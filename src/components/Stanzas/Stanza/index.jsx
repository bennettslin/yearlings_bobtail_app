/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import Unit from '../../Unit'
import { getUnitIndicesForStanza } from '../../../endpoint/album/stanzas'
import './style'

const Stanza = forwardRef(({
    serverClientSongIndex,
    stanzaIndex,
    ...other

}, ref) => {
    const stanzaUnitIndices = getUnitIndicesForStanza(
        serverClientSongIndex,
        stanzaIndex,
    )

    return (
        <div
            className={cx(
                'Stanza',
            )}
        >
            {stanzaUnitIndices.map(unitIndex => (
                <Unit {...other}
                    {...{
                        key: unitIndex,
                        ref,
                        unitIndex,
                    }}
                />
            ))}
        </div>
    )
})

Stanza.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
    stanzaIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(Stanza))
