import React from 'react';
import StatsHelper from '../helpers/stats-helper.js';

const defaultProps = {
    lyrics: {},
    annotations: {}
};

class StatsSection extends React.Component {

    _getCountRow(typeName, typeCount) {
        return (
            <div key={typeName}
                className="text-cell-wrapper">
                <span className="text-cell text">
                    {typeName}
                </span>
                <span className="text-cell figure">
                    {typeCount}
                </span>
            </div>
        );
    }

    render() {
        const lyricsWordCount = StatsHelper.getTotalWords(this.props.lyrics),
            lyricsCountRow = this._getCountRow('lyrics word count', lyricsWordCount),
            todoCount = StatsHelper.getTodoCount(this.props.annotations),
            annotationsCount = StatsHelper.getCount(this.props.annotations),
            annotationsCountText = todoCount ?
                (annotationsCount - todoCount) + '/' + annotationsCount :
                annotationsCount,
            annotationsCountRow = this._getCountRow('annotations count', annotationsCountText),
            annotationsWordCount = StatsHelper.getSumOfTotalWords(this.props.annotations),
            countPerAnnotation = annotationsCount ? Math.ceil(annotationsWordCount / annotationsCount) : '--',
            countPerAnnotationRow = this._getCountRow('words per annotation', countPerAnnotation);

        return (
            <div className="section stats-section">
                <h2>stats</h2>
                <div className="row">
                    {lyricsCountRow}
                    {annotationsCountRow}
                    {countPerAnnotationRow}
                </div>
            </div>
        );
    }
}

StatsSection.defaultProps = defaultProps;
export default StatsSection;