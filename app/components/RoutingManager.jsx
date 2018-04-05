import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppManager from './AppManager'

import { getSongVerseTimes } from '../helpers/dataHelper'
import { getValidRoutingIndicesObject, getPathForIndices } from '../helpers/routingHelper'

import { selectAnnotationIndex, selectSongIndex, selectTimePlayed, selectVerseIndex, selectWikiIndex } from '../redux/actions/storage'

class RoutingManager extends Component {

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

            const songVerseTimes = getSongVerseTimes(routingSongIndex),
                routingTimePlayed = songVerseTimes[routingVerseIndex]

            selectedSongIndex = routingSongIndex
            selectedVerseIndex = routingVerseIndex
            selectedAnnotationIndex = routingAnnotationIndex

            props.selectSongIndex(routingSongIndex)

            // Store verse index and time played.
            props.selectVerseIndex(routingVerseIndex)
            props.selectTimePlayed(routingTimePlayed)

            // Store annotation index.
            props.selectAnnotationIndex(routingAnnotationIndex)

            // Reset wiki.
            props.selectWikiIndex(0)
        }

        this.state = {
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex
        }

        this.updatePath = this.updatePath.bind(this)
    }

    componentDidMount() {
        // If routing changed what was in store, set the new path name.
        this.replacePath(
            this.state.selectedSongIndex,
            this.state.selectedVerseIndex,
            this.state.selectedAnnotationIndex
        )
    }

    replacePath(pathSongIndex, pathVerseIndex, pathAnnotationIndex) {

        const pathName = getPathForIndices(
            pathSongIndex, pathVerseIndex, pathAnnotationIndex
        )

        this.props.history.replace(pathName);
    }

    updatePath({
        props,
        selectedSongIndex,
        selectedVerseIndex = props.selectedVerseIndex,
        selectedAnnotationIndex = props.selectedAnnotationIndex
    }) {
        // Only update path if it has changed.
        if (
            props.selectedSongIndex !== selectedSongIndex ||
            props.selectedVerseIndex !== selectedVerseIndex ||
            props.selectedAnnotationIndex !== selectedAnnotationIndex
        ) {
            this.replacePath(
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex
            )
        }
    }

    render() {
        return (
            <AppManager {...this.props}
                updatePath={this.updatePath}
            />
        )
    }
}

const mapStateToProps = ({
    selectedSongIndex, selectedVerseIndex, selectedAnnotationIndex
}) => ({
    selectedSongIndex, selectedVerseIndex, selectedAnnotationIndex
})

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectAnnotationIndex, selectSongIndex, selectTimePlayed, selectVerseIndex, selectWikiIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RoutingManager)
