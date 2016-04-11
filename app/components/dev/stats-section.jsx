import React from 'react';

const StatsHelpers = require('../helpers/stats-helpers.js');
const defaultProps = {
    annotations: {}
};

class StatsSection extends React.Component {

    _getCountRow(typeName, typeCount) {
        return (
            <div className="count-text-wrapper">
                <span className="text-cell name">
                    {typeName}
                </span>
                <span className="text-cell count">
                    {typeCount}
                </span>
            </div>
        );
    }

    render() {
        var annotationsCount = StatsHelpers.getAnnotationsCount(this.props.annotations),
            annotationsCountRow = this._getCountRow('annotations count', annotationsCount),
            annotationsWordCount = StatsHelpers.getTotalWordsInAnnotations(this.props.annotations),
            annotationsWordCountRow = this._getCountRow('annotations word count', annotationsWordCount),
            countPerAnnotation = Math.ceil(annotationsWordCount / annotationsCount),
            countPerAnnotationRow = this._getCountRow('words per annotations', countPerAnnotation);

        return (
            <div className="stats-section">
                <h2>stats</h2>
                <div className="stats-row">
                {annotationsCountRow}
                {annotationsWordCountRow}
                {countPerAnnotationRow}
                </div>
            </div>
        );
    }
}

StatsSection.defaultProps = defaultProps;
export default StatsSection;