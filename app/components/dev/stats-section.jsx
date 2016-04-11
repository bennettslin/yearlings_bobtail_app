import React from 'react';

const StatsHelpers = require('../helpers/stats-helpers.js');
const defaultProps = {
    annotations: {}
};

class StatsSection extends React.Component {

    _getWordCountRow(typeName, typeCount) {
        return (
            <div className="word-count-text-wrapper">
                <span className="text-cell type-name">
                    {typeName}
                </span>
                <span className="text-cell word-count">
                    {typeCount}
                </span>
            </div>
        );
    }

    render() {
        var annotationsCount = StatsHelpers.getTotalWordsInAnnotations(this.props.annotations),
            annotationsWordCountRow = this._getWordCountRow('annotations word count', annotationsCount);

        return (
            <div className="stats-section">
                <h2>stats</h2>
                <div className="stats-row">
                {annotationsWordCountRow}
                </div>
            </div>
        );
    }
}

StatsSection.defaultProps = defaultProps;
export default StatsSection;