/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'

import {
    LyricDotStanzasRow,
    LyricsWordCountRow,
    AnnotationsCountRow,
    WordsPerAnnotationRow,
    StatRowView
} from './stat-row'

const StatsSection = ({

    // From props.
    adminDotUnitsCount,
    lyricUnits,
    annotations,
    adminPluralCardsCount

}) => (
    <div className="stats-section">
        <h2>stats</h2>
        <div className="row">
            <LyricDotStanzasRow adminDotUnitsCount={adminDotUnitsCount} />
            <LyricsWordCountRow lyricUnits={lyricUnits} />
            <AnnotationsCountRow annotations={annotations} />
            <WordsPerAnnotationRow annotations={annotations} />
            <StatRowView
                typeName="multiple card annotations count"
                typeCount={adminPluralCardsCount}
            />
        </div>
    </div>
)

export default StatsSection
