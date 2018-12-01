import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSongStore } from 'flux/song/action'
import { updateSessionStore } from 'flux/session/action'

import ListenerContainer from '../ListenerContainer'

import { getTimeForVerseIndex } from '../../helpers/dataHelper'
import {
    getValidRoutingIndicesObject,
    getPathForIndices
} from './helper'

class RoutingListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateSongStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)

        const { routingParamString } = props.match.params,

            // Get whatever params the route gives us.
            routingIndicesObject =
                getValidRoutingIndicesObject(routingParamString),

            {
                routingSongIndex,
                routingVerseIndex,
                routingAnnotationIndex
            } = routingIndicesObject

        let selectedSongIndex = props.selectedSongIndex,
            selectedVerseIndex = props.selectedVerseIndex,
            selectedAnnotationIndex = props.selectedAnnotationIndex

        // If route gives us its own song index, set in store.
        if (!isNaN(routingSongIndex)) {

            selectedSongIndex = routingSongIndex
            selectedVerseIndex = routingVerseIndex
            selectedAnnotationIndex = routingAnnotationIndex

            props.updateSongStore({
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex,
                selectedTime: getTimeForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )
            })

            // Reset wiki.
            props.updateSessionStore({ selectedWikiIndex: 0 })
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

        this.props.history.replace(pathName)
    }

    render() {
        return (
            <ListenerContainer />
        )
    }
}

const mapStateToProps = ({
    songStore: {
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
        updateSongStore,
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RoutingListener)
