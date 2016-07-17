import React from 'react';
import StatsHelper from '../../helpers/stats-helper.js';

/*************
 * CONTAINER *
 *************/

const LyricsWordCountRow = ({
    lyrics
}) => {
    const lyricsWordCount = StatsHelper.getTotalWords(lyrics);
    return (
        <StatRowView
            typeName="lyrics word count"
            typeCount={lyricsWordCount}
        />
    );
}

const AnnotationsCountRow = ({
    annotations
}) => {
    const todoCount = StatsHelper.getTodoCount(annotations),
        annotationsCount = StatsHelper.getCount(annotations),
        annotationsRatioCount = todoCount ?
            (annotationsCount - todoCount) + '/' + annotationsCount :
            annotationsCount;
    return (
        <StatRowView
            typeName="annotations count"
            typeCount={annotationsRatioCount}
        />
    );
}

const WordsPerAnnotationRow = ({
    annotations
}) => {
    const annotationsCount = StatsHelper.getCount(annotations),
        annotationsWordCount = StatsHelper.getSumOfTotalWords(annotations),
        annotationAverageWordCount = annotationsWordCount ?
            Math.ceil(annotationsWordCount / annotationsCount) :
            '--';
    return (
        <StatRowView
            typeName="words per annotation"
            typeCount={annotationAverageWordCount}
        />
    );
}

/********
 * VIEW *
 ********/

const StatRowView = ({
    typeName,
    typeCount
}) => (
    <div className="text-cell-wrapper">
        <span className="text-cell text">
            {typeName}
        </span>
        <span className="text-cell figure">
            {typeCount}
        </span>
    </div>
);

export {
    LyricsWordCountRow,
    AnnotationsCountRow,
    WordsPerAnnotationRow
};