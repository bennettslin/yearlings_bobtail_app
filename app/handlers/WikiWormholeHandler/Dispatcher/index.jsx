// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'

import { getWikiWormholeIndexForDirection } from './helper'

class WikiWormholeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchAccessedWikiWormhole =
            this.dispatchAccessedWikiWormhole
    }

    dispatchAccessedWikiWormhole = (direction) => {
        const {
                selectedSongIndex,
                selectedAnnotationIndex,
                selectedDotKeys,
                accessedWikiWormholeIndex: defaultWikiWormholeIndex
            } = this.props,

            initialWikiWormholeIndex =
                defaultWikiWormholeIndex ?
                    defaultWikiWormholeIndex :
                    1,

            accessedWikiWormholeIndex =
                getWikiWormholeIndexForDirection({
                    selectedSongIndex,
                    selectedAnnotationIndex,
                    selectedDotKeys,
                    initialWikiWormholeIndex,
                    direction
                })

        this.props.updateAccessStore({ accessedWikiWormholeIndex })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex
    },
    accessStore: { accessedWikiWormholeIndex },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    }
}) => ({
    selectedSongIndex,
    selectedAnnotationIndex,
    accessedWikiWormholeIndex,
    dotsBitNumber,
    selectedDotKeys
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WikiWormholeDispatcher)
