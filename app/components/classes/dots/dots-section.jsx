import React from 'react';
import DotsBlock from './dots-block.jsx';

const defaultProps = {
    dotKeys: {}
}

class DotsSection extends React.Component {

    render() {
        return (
            <div className="section dots-section">
                <h2>dots</h2>
                <DotsBlock
                    dotKeys={this.props.dotKeys}
                    interactable={true}
                />
            </div>
        );
    }
}

DotsSection.defaultProps = defaultProps;
export default DotsSection;