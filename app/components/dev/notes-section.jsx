import React from 'react';

const defaultProps = {
}

class TitleSection extends React.Component {

    render() {
        return (
            <div className="section notes-section">
                <h2>scrap notes</h2>
                <div
                    className="text-cell-wrapper">
                    <span className="text-cell text">
                        Figure out em-dash rules
                    </span>
                </div>
                <div
                    className="text-cell-wrapper">
                    <span className="text-cell text">
                        Put colour codes in annotations (put data under annotations, not lyrics?)
                    </span>
                </div>
                <div
                    className="text-cell-wrapper">
                    <span className="text-cell text">
                        Scrolling annotations
                    </span>
                </div>
                <div
                    className="text-cell-wrapper">
                    <span className="text-cell text">
                        Use gradient on anchor tags, not border bottom. And use colour constants.
                    </span>
                </div>
            </div>
        );
    }
}

TitleSection.defaultProps = defaultProps;
export default TitleSection;