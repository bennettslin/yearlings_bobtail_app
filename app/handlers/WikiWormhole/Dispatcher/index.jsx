// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from 'flux/access/action'

import { getWikiWormholeIndexForDirection } from './helper'

import { getDotKeysFromBitNumber } from 'helpers/dot'

class WikiWormholeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,
        updateAccessStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchAccessedWikiWormhole: this.dispatchAccessedWikiWormhole
        })
    }

    dispatchAccessedWikiWormhole = (direction) => {
        const {
                selectedSongIndex,
                selectedAnnotationIndex,
                dotsBitNumber,
                accessedWikiWormholeIndex: defaultWikiWormholeIndex
            } = this.props,
            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

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
    selectedStore: {
        selectedSongIndex,
        selectedAnnotationIndex
    },
    accessStore: { accessedWikiWormholeIndex },
    dotsStore: { dotsBitNumber }
}) => ({
    selectedSongIndex,
    selectedAnnotationIndex,
    accessedWikiWormholeIndex,
    dotsBitNumber
})

export default connect(
    mapStateToProps,
    { updateAccessStore }
)(WikiWormholeDispatcher)
