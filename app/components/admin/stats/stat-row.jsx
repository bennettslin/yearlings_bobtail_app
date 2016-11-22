import React from 'react'
import StatsHelper from 'helpers/stats-helper'
import { LYRIC_TEXT_KEYS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsWordCountRow = ({ lyrics }) => {
    const lyricsWordCount = StatsHelper.getTotalWords(lyrics, LYRIC_TEXT_KEYS)

    return (
        <StatRowView
            typeName="lyrics word count"
            typeCount={lyricsWordCount}
        />
    )
}

const AnnotationsCountRow = ({ annotations }) => {
    const todoCount = StatsHelper.getTodoCount(annotations),
        annotationsCount = StatsHelper.getCount(annotations),
        annotationsRatioCount = todoCount ?
            `${annotationsCount - todoCount}/${annotationsCount}` :
            annotationsCount

    return (
        <StatRowView
            typeName="annotations count"
            typeCount={annotationsRatioCount}
        />
    )
}

const WordsPerAnnotationRow = ({ annotations }) => {
    const annotationsCount = StatsHelper.getCount(annotations),
        annotationsWordCount = StatsHelper.getSumOfTotalWordsInAnnotations(annotations),
        annotationAverageWordCount = annotationsWordCount ?
            Math.ceil(annotationsWordCount / annotationsCount) :
            '--'

    return (
        <StatRowView
            typeName="words per annotation"
            typeCount={annotationAverageWordCount}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const StatRowView = ({

    // From controller.
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
)

export {
    LyricsWordCountRow,
    AnnotationsCountRow,
    WordsPerAnnotationRow
}
