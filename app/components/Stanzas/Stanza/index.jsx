/**
 * A stanza encompasses all the units grouped under a single stanza type and
 * optional index, such as Verse 1 or Bridge.
 */
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getFinalSideHoc from '../../FinalSideHoc'
import Unit from '../../Unit'
import { getUnitIndicesForStanza } from '../../../api/album/stanzas'
import './style'

const Stanza = forwardRef(({
    finalSideSongIndex,
    stanzaIndex,
    ...other

}, ref) => {
    const stanzaUnitIndices = getUnitIndicesForStanza(
        finalSideSongIndex,
        stanzaIndex
    )

    return (
        <div
            className={cx(
                'Stanza'
            )}
        >
            {stanzaUnitIndices.map(unitIndex => (
                <Unit {...other}
                    {...{
                        key: unitIndex,
                        ref,
                        unitIndex
                    }}
                />
            ))}
        </div>
    )
})

Stanza.propTypes = {
    finalSideSongIndex: PropTypes.number.isRequired,
    stanzaIndex: PropTypes.number.isRequired
}

export default memo(getFinalSideHoc(Stanza))
