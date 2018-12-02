
// TODO: Eventually turn this file into just a scroll listener.
// Component that handles all user events.

import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InteractiveContainer from '../../containers/InteractiveContainer'


class EventContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
    }

    selectSong = (wormholeObject) => {
        return this.props.selectSong(wormholeObject)
    }

    render() {

        const {
            setCarouselAnnotationRef,
            setLyricAnnotationRef,
            setVerseRef,
            setLyricParentRef,
            setCarouselParentRef,
            selectSong,
            togglePlay
        } = this.props

        return (
            <InteractiveContainer
                {...{
                    eventHandlers: {
                        setCarouselAnnotationRef,
                        setLyricAnnotationRef,
                        setVerseRef,
                        setLyricParentRef,
                        setCarouselParentRef,
                        selectSong,
                        togglePlay
                    },
                    selectSong
                }}
            />
        )
    }
}

const mapStateToProps = null

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EventContainer)
