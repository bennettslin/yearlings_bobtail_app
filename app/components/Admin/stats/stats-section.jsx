import React from 'react'
import { LyricDotStanzasRow,
         LyricsWordCountRow,
         AnnotationsCountRow,
         WordsPerAnnotationRow,
         StatRowView } from './stat-row'

/*************
 * CONTAINER *
 *************/

const StatsSection = (props) => (
    <StatsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const StatsSectionView = ({

    // From props.
    adminDotStanzas,
    lyrics,
    annotations,
    adminPluralCardsCount

}) => (
    <div className="section stats-section">
        <h2>stats</h2>
        <div className="row">
            <LyricDotStanzasRow adminDotStanzas={adminDotStanzas} />
            <LyricsWordCountRow lyrics={lyrics} />
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
