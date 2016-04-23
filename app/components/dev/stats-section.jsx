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
            annotationsCount = StatsHelper.getCount(this.props.annotations),
            annotationsCountRow = this._getCountRow('annotations count', annotationsCount),
            annotationsWordCount = StatsHelper.getSumOfTotalWords(this.props.annotations),
            countPerAnnotation = annotationsCount ? Math.ceil(annotationsWordCount / annotationsCount) : '--',
            countPerAnnotationRow = this._getCountRow('words per annotation', countPerAnnotation);

        return (
            <div className="section stats-section">
                <h2>stats</h2>
                <div className="row primary-row">
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