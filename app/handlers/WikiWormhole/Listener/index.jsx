// Singleton to listen for song change.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WikiWormholeDispatcher from '../Dispatcher'

import { populateRefs } from '../../../helpers/ref'

class WikiWormholeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired
    }

    componentDidMount() {
        this._accessWikiWormhole()
    }

    componentDidUpdate(prevProps) {
        this._accessWikiWormhole(prevProps)
    }

    _accessWikiWormhole(prevProps = {}) {
        const
            {
                selectedSongIndex,
                selectedAnnotationIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedAnnotationIndex: prevAnnotationIndex
            } = prevProps

        if (
            selectedSongIndex !== prevSongIndex ||
            selectedAnnotationIndex !== prevAnnotationIndex
        ) {
            this.dispatchAccessedWikiWormhole({ selectedAnnotationIndex })
        }
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <WikiWormholeDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = state => {
    const {
        selectedStore: {
            selectedSongIndex,
            selectedAnnotationIndex
        }
    } = state

    return {
        selectedSongIndex,
        selectedAnnotationIndex
    }
}

export default connect(mapStateToProps)(WikiWormholeListener)
