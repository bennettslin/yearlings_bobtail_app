import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import isNumber from 'lodash.isnumber'

import { getParentOfVerseClassNamesForIndices } from '../helper'
import { getStanzaConfig } from 'album/api/stanzas'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

const propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,

        // From parent.
        stanzaIndex: PropTypes.number.isRequired,
        StanzaComponent: PropTypes.func.isRequired
    },

    StanzaHoc = ({
        lyricSongIndex,
        StanzaComponent,
        ...other
    }) => {

        const { stanzaIndex } = other,

            { stanzaVerseConfigs } = getStanzaConfig(
                lyricSongIndex,
                stanzaIndex
            ),

            logicSelectors = cx(
            // "Child component stanza index."

                // Aligned selector when on cursor.
                isNumber(stanzaIndex) &&
                `ChS${stanzaIndex}`,

                /**
                 * General selector when before cursor, general
                 * sibling selector when after cursor.
                 */
                isNumber(stanzaIndex) &&
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
    }

StanzaHoc.propTypes = propTypes

export default connect(mapStateToProps)(memo(StanzaHoc))
