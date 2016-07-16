import React from 'react';

const defaultProps = {
    titleText: '',
    onClick() {}
}

class TitleSection extends React.Component {
    render() {
        return <TitleSectionView {...this.props} />;
    }
}

const TitleSectionView = ({
    titleText,
    onClick
}) => (
    <div className="section title-section">
        <h1>
            <a onClick={onClick}>
                {titleText}
            </a>
        </h1>
    </div>
);

TitleSection.defaultProps = defaultProps;
export default TitleSection;