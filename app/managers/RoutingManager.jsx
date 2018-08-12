import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StateManager from './StateManager'

import {
    selectWikiIndex,
    selectTimePlayed,
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
        selectTimePlayed: PropTypes.func.isRequired
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

            const routingTimePlayed = getTimeForVerseIndex(
                routingSongIndex,
                routingVerseIndex
            )

            selectedSongIndex = routingSongIndex
            selectedVerseIndex = routingVerseIndex
            selectedAnnotationIndex = routingAnnotationIndex

            props.updateSelectedStore({
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex
            })

            props.selectTimePlayed(routingTimePlayed)

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
        return (
            <StateManager />
        )
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
        selectWikiIndex,
        selectTimePlayed
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RoutingManager)
