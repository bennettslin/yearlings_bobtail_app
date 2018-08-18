import React from 'react'
import { connect } from 'react-redux'

/*************
 * CONTAINER *
 *************/

const DevSection = (props) => (
    <DevSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DevSectionView = ({

    // From props.

    selectedVerseIndex

}) => (
    <div className="dev-section">
        <h2>dev</h2>
        <div className="row">
            selected verse index: {selectedVerseIndex}
        </div>
    </div>
)

export default connect(({
    songStore: { selectedVerseIndex }
}) => ({
    selectedVerseIndex
}))(DevSection)
