import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getParentOfVerseClassNamesForIndices } from '../helper'
import { getVerseIndicesForStanza } from '../../../album/api/stanzas'

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
        StanzaComponent: PropTypes.object.isRequired
    },

    StanzaHoc = ({
        lyricSongIndex,
        StanzaComponent,
        ...other
    }) => {

        const { stanzaIndex } = other,

            logicSelectors = cx(
            // "Child component stanza index."

                // Aligned selector when on cursor.
                Number.isFinite(stanzaIndex) &&
                `ChS${stanzaIndex}`,

                /**
                 * General selector when before cursor, general
                 * sibling selector when after cursor.
                 */
                Number.isFinite(stanzaIndex) &&
                'ChS',

                // "Parent of verse index."
                getParentOfVerseClassNamesForIndices({
                    entities: getVerseIndicesForStanza(
                        lyricSongIndex,
                        stanzaIndex
                    )
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
