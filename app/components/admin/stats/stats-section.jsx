import React from 'react'
import { DotStanzasRow,
         LyricsWordCountRow,
         AnnotationsCountRow,
         WordsPerAnnotationRow } from './stat-row'

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
    dotStanzas,
    lyrics,
    annotations

}) => (
    <div className="section stats-section">
        <h2>stats</h2>
        <div className="row">
            <DotStanzasRow dotStanzas={dotStanzas} />
            <LyricsWordCountRow lyrics={lyrics} />
            <AnnotationsCountRow annotations={annotations} />
            <WordsPerAnnotationRow annotations={annotations} />
        </div>
    </div>
)

export default StatsSection
