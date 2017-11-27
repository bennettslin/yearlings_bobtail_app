import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from './App'

import { getSongIsLogue, getSongVerseTimes } from '../helpers/data-helper'
import { getValidRoutingIndicesObject } from '../helpers/routing-helper'
import { HYPHENATED_SONG_PATHS } from '../constants/paths'

import { selectAnnotationIndex, selectSongIndex, selectTimePlayed, selectVerseIndex, selectWikiIndex } from '../redux/actions/storage'

class RoutingContainer extends Component {

    constructor(props) {
        super(props)

        const { routingParamString } = props.match.params,

            // Get whatever params the route gives us.
            routingIndicesObject =
                getValidRoutingIndicesObject(routingParamString),

            { routingSongIndex,
              routingVerseIndex } = routingIndicesObject

        let selectedSongIndex = props.selectedSongIndex,
            selectedVerseIndex = props.selectedVerseIndex

        // If route gives us its own song index, set in store.
        if (!isNaN(routingSongIndex)) {

            const songVerseTimes = getSongVerseTimes(routingSongIndex),
                routingTimePlayed = songVerseTimes[routingVerseIndex]

            selectedSongIndex = routingSongIndex
            selectedVerseIndex = routingVerseIndex

            props.selectSongIndex(routingSongIndex)

            // Store verse index and time played.
            props.selectVerseIndex(routingVerseIndex)
            props.selectTimePlayed(routingTimePlayed)

            // Reset annotation and wiki.
            props.selectAnnotationIndex(0)
            props.selectWikiIndex(0)
        }

        this.state = {
            selectedSongIndex,
            selectedVerseIndex
        }

        this.replacePath = this.replacePath.bind(this)
    }

    componentDidMount() {
        // If routing changed what was in store, set the new path name.
        this.replacePath(
            this.state.selectedSongIndex,
            this.state.selectedVerseIndex
        )
    }

    replacePath(pathSongIndex, pathVerseIndex) {

        // Path is something like 9-grasshoppers-lie-heavy-20.
        const isLogue = getSongIsLogue(pathSongIndex),

            pathName = `${pathSongIndex}-${HYPHENATED_SONG_PATHS[pathSongIndex]}${isLogue ? '' : '-' + pathVerseIndex}`

        this.props.history.replace(pathName);
    }

    render() {
        return (
            <App {...this.props}
                replacePath={this.replacePath}
            />
        )
    }
}

const mapStateToProps = ({
    selectedSongIndex, selectedVerseIndex
}) => ({
    selectedSongIndex, selectedVerseIndex
})

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectAnnotationIndex, selectSongIndex, selectTimePlayed, selectVerseIndex, selectWikiIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RoutingContainer)
