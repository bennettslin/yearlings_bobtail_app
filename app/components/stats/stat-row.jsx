import React from 'react'
import StatsHelper from '../../helpers/stats-helper.js'
import { LYRIC_TEXT_KEYS } from '../../helpers/constants.js'

/*************
 * CONTAINER *
 *************/

const LyricsWordCountRow = (props) => {

    const { lyrics } = props,

        lyricsWordCount = StatsHelper.getTotalWords(lyrics, LYRIC_TEXT_KEYS)

    return (
        <StatRowView
            typeName="lyrics word count"
            typeCount={lyricsWordCount}
        />
    )
}

const AnnotationsCountRow = (props) => {

    const { annotations } = props,

        todoCount = StatsHelper.getTodoCount(annotations),
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

const WordsPerAnnotationRow = (props) => {
    // FIXME: This is broken.
    const { annotations } = props,

        annotationsCount = StatsHelper.getCount(annotations),
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
