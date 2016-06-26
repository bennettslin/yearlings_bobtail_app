import React from 'react';
import Constants from '../constants/constants.js';
import FormatUtility from '../utilities/format-utility.jsx';

const defaultProps = {
    overviewRichText: '',
    selectedOverviewIndex: 0,
    handleOverviewSelect() {}
};

class OverviewsSection extends React.Component {

    _getOverviewSelectButton(key, index) {
        const props = this.props,

            // Overview indices begin at 1.
            disabled = key === Constants.overviewKeys[props.selectedOverviewIndex - 1],
            className = 'select-button' + (disabled ? ' disabled' : '');

        return (
            <div key={key} className={className}>
                <h2>
                    <a disabled={disabled}
                        onClick={disabled ? null : () => props.handleOverviewSelect(index + 1)}
                    >
                        {key}
                    </a>
                </h2>
            </div>
        );
    }

    render() {
        return (
            <div className="section overviews-section">
                <div className="button-block">
                    {Constants.overviewKeys.map((key, index) => {
                        return this._getOverviewSelectButton(key, index);
                    })}
                </div>
                <div className="overview-text">
                    {FormatUtility.getFormattedTextElement(false, this.props.overviewRichText)}
                </div>

            </div>
        );
    }
}

OverviewsSection.defaultProps = defaultProps;
export default OverviewsSection;