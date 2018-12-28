import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getParentOfVerseClassNamesForIndices } from '../helper'
import { getStanzaConfig } from 'album/api/stanzas'

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
        StanzaComponent: PropTypes.func.isRequired
    },

    StanzaHoc = memo(({
        renderedSongIndex,
        StanzaComponent,
        ...other
    }) => {

        const { stanzaIndex } = other,

            { stanzaVerseConfigs } = getStanzaConfig(
                renderedSongIndex,
                stanzaIndex
            ),

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
                {...{ logicSelectors }}
            />
        )
    })

StanzaHoc.propTypes = propTypes

export default connect(mapStateToProps)(StanzaHoc)
