import React from 'react';
import { LyricsWordCountRow,
         AnnotationsCountRow,
         WordsPerAnnotationRow } from './stat-row.jsx';

/*************
 * CONTAINER *
 *************/

const StatsSection = (props) => (
    <StatsSectionView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const StatsSectionView = ({

    // From props.
    lyrics,
    annotations

}) => (

    <div className="section stats-section">
        <h2>stats</h2>
        <div className="row">
            <LyricsWordCountRow lyrics={lyrics} />
            <AnnotationsCountRow annotations={annotations} />
            <WordsPerAnnotationRow annotations={annotations} />
        </div>
    </div>
);

export default StatsSection;