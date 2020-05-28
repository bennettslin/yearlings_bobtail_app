// Child that knows rules to toggle admin.
import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { getWikiWormholeIndexForDirection } from './helper'
import { getDotKeysFromBitNumber } from '../../../helpers/dot'
import { ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR } from '../../../redux/access/selectors'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../../redux/dots/selectors'

const mapStateToProps = state => {
    const {
            selectedStore: {
                selectedSongIndex,
                selectedAnnotationIndex
            }
        } = state,
        accessedWikiWormholeIndex = ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR(state),
        dotsBitNumber = DOTS_BIT_NUMBER_SELECTOR(state)

    return {
        selectedSongIndex,
        selectedAnnotationIndex,
        accessedWikiWormholeIndex,
        dotsBitNumber
    }
}

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

    dispatchAccessedWikiWormhole = ({
        selectedAnnotationIndex = this.props.selectedAnnotationIndex,
        direction
    } = {}) => {
        const {
                selectedSongIndex,
                dotsBitNumber,
                accessedWikiWormholeIndex: prevWikiWormholeIndex
            } = this.props,
            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            initialWikiWormholeIndex =
                // If no direction is given, reset the index.
                !Number.isFinite(direction) ?
                    1 :
                    prevWikiWormholeIndex,

            accessedWikiWormholeIndex = getWikiWormholeIndexForDirection({
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

export default connect(
    mapStateToProps,
    { updateAccessStore }
)(WikiWormholeDispatcher)
