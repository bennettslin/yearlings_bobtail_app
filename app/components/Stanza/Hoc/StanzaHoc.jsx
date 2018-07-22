import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getParentOfVerseClassNamesForIndices } from '../stanzaHelper'

const propTypes = {
    // From parent.
    stanzaIndex: PropTypes.number.isRequired,
    stanzaConfig: PropTypes.shape({
        stanzaVerseConfigs: PropTypes.array.isRequired
    }).isRequired,
    StanzaComponent: PropTypes.func.isRequired
},

StanzaHoc = ({

    StanzaComponent,

...other }) => {

    const {
            stanzaIndex,
            stanzaConfig
        } = other,
        {
            stanzaVerseConfigs
        } = stanzaConfig,

        logicSelectors = cx(
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

            // "Parent of verse index."
            getParentOfVerseClassNamesForIndices({
                entities: stanzaVerseConfigs
            })
        )

    return (
        <StanzaComponent {...other}
            {...{
                logicSelectors
            }}
        />
    )
}

StanzaHoc.propTypes = propTypes

export default StanzaHoc
