import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseColour from './VerseColour'
import VerseInteractive from './VerseInteractive'

const propTypes = {
    // From parent.
        verseIndex: PropTypes.number,
        VerseComponent: PropTypes.func.isRequired,

        inUnit: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        inSlider: PropTypes.bool,

        handleLyricVerseSelect: PropTypes.func
    },

    VerseHoc = ({

        verseIndex,
        VerseComponent,
        handleLyricVerseSelect,

        ...other }) => {

        const hasVerseIndex = !isNaN(verseIndex)

        if (!hasVerseIndex) {
            return (
                <VerseComponent {...other}
                    logicSelectors="Verse__noIndexColour"
                />
            )
        }

        const {
                inUnit,
                inSlider,
                inVerseBar

            } = other,

            logicSelectors = hasVerseIndex && cx(
            // "Child verse index."
                `ChV${verseIndex}`,
                'ChV',

                // "Child in lyric."
                (inUnit || inVerseBar) && 'ChL'
            )

        return (
            <VerseComponent {...other}
                {...{
                    verseIndex,
                    logicSelectors
                }}
            >
                {inVerseBar ? (
                    <VerseColour
                        inVerseBar
                        {...{
                            verseIndex
                        }}
                    />
                ) : (
                    <VerseInteractive
                        {...{
                            verseIndex,
                            inUnit,
                            inSlider,
                            handleLyricVerseSelect
                        }}
                    />
                )}
            </VerseComponent>
        )
    }

VerseHoc.propTypes = propTypes

export default VerseHoc
