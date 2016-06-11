import React from 'react';

const defaultProps = {
    titleText: '',
    handleSongReset() {}
}

class TitleSection extends React.Component {

    render() {
        return (
            <div className="section title-section">
                <h1>
                    <a onClick={this.props.handleSongReset.bind(null, 0, 'selected', true)}>
                        {this.props.titleText}
                    </a>
                </h1>
            </div>
        );
    }
}

TitleSection.defaultProps = defaultProps;
export default TitleSection;