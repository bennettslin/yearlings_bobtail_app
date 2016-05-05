import React from 'react';
import FormatUtility from '../utilities/format-utility.jsx';

const OVERVIEW_NAMES = ['narrative', 'music'];
const defaultProps = {
    overviewRichText: '',
    selectedOverviewKey: '',
    handleOverviewSelect() {}
};

class OverviewsSection extends React.Component {

    _getOverviewSelectButton(key) {
        const props = this.props,
            disabled = key === props.selectedOverviewKey,
            className = 'select-button' + (disabled ? ' disabled' : '');

        return (
            <div key={key} className={className}>
                <h2>
                    <a disabled={disabled}
                        onClick={disabled ? null : props.handleOverviewSelect.bind(null, key)}
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
                    {OVERVIEW_NAMES.map(key => {
                        return this._getOverviewSelectButton(key);
                    })}
                </div>
                <div className="overview-text">
                    {FormatUtility.getFormattedSpan(this.props.overviewRichText)}
                </div>

            </div>
        );
    }
}

OverviewsSection.defaultProps = defaultProps;
export default OverviewsSection;