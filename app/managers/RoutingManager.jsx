import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    selectWikiIndex,
    updateSelectedStore
} from 'flux/actions/storage'

import { getTimeForVerseIndex } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import {
    getValidRoutingIndicesObject,
    getPathForIndices
} from 'helpers/routingHelper'

class RoutingManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        updateSelectedStore: PropTypes.func.isRequired,
        selectWikiIndex: PropTypes.func.isRequired,

        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)

        const { routingParamString } = props.match.params,

            // Get whatever params the route gives us.
            routingIndicesObject =
                getValidRoutingIndicesObject(routingParamString),

            { routingSongIndex,
              routingVerseIndex,
              routingAnnotationIndex } = routingIndicesObject

        let selectedSongIndex = props.selectedSongIndex,
            selectedVerseIndex = props.selectedVerseIndex,
            selectedAnnotationIndex = props.selectedAnnotationIndex

        // If route gives us its own song index, set in store.
        if (!isNaN(routingSongIndex)) {

            selectedSongIndex = routingSongIndex
            selectedVerseIndex = routingVerseIndex
            selectedAnnotationIndex = routingAnnotationIndex

            props.updateSelectedStore({
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex,
                selectedTime: getTimeForVerseIndex(
                    routingSongIndex,
                    routingVerseIndex
                )
            })

            // Reset wiki.
            props.selectWikiIndex(0)
        }

        this.state = {
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex
        }
    }

    componentDidMount() {
        // If routing changed what was in store, set the new path name.
        this.replacePath(
            this.state.selectedSongIndex,
            this.state.selectedVerseIndex,
            this.state.selectedAnnotationIndex
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.state,
            nextProps: nextState
        })
    }

    componentDidUpdate(prevProps) {
        const {
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedVerseIndex: prevVerseIndex,
                selectedAnnotationIndex: prevAnnotationIndex
            } = prevProps

        // Only update path if it has changed.
        if (
            prevSongIndex !== selectedSongIndex ||
            prevVerseIndex !== selectedVerseIndex ||
            prevAnnotationIndex !== selectedAnnotationIndex
        ) {
            this.replacePath(
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex
            )
        }
    }

    replacePath(pathSongIndex, pathVerseIndex, pathAnnotationIndex) {

        const pathName = getPathForIndices(
            pathSongIndex, pathVerseIndex, pathAnnotationIndex
        )

        this.props.history.replace(pathName);
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex
})

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSelectedStore,
        selectWikiIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RoutingManager)
