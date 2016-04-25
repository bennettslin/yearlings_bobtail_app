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
                        Format annotation header
                    </span>
                </div>
                <div
                    className="text-cell-wrapper">
                    <span className="text-cell text">
                        Scrolling annotations
                    </span>
                </div>
            </div>
        );
    }
}

TitleSection.defaultProps = defaultProps;
export default TitleSection;