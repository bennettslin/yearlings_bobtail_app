import React from 'react';
import DotsBlock from './dots-block.jsx';

// FIXME: Have all dot keys for now.
import Constants from '../../constants/constants.js';

const defaultProps = {
    dotKeys: {}
}

class DotsSection extends React.Component {

    render() {
        const allDotKeys = {};

        Constants.allDotKeys.forEach(dotKey => {
            allDotKeys[dotKey] = true;
        });

        return (
            <div className="section dots-section">
                <h2>dots</h2>
                <DotsBlock
                    dotKeys={allDotKeys}
                    interactable={true}
                />
            </div>
        );
    }
}

DotsSection.defaultProps = defaultProps;
export default DotsSection;