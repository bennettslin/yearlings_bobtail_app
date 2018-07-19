// Text displays to indicate time spent and remaining.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getVerseDurationForVerseIndex } from '../../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    renderableStore
}) => ({
    canLyricRender,
    renderableSongIndex: renderableStore.renderableSongIndex
})

class VerseCursor extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        isOnCursor: PropTypes.bool.isRequired,
        verseIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                renderableSongIndex,
                verseIndex,
                isOnCursor
            } = this.props,

            verseDuration = getVerseDurationForVerseIndex(
                renderableSongIndex,
                verseIndex
            )

        return (
            <div
                className={cx(
                    'VerseCursor',
                    isOnCursor && `VerseCursor__onCursor`,
                    'absoluteFullContainer'
                )}
                {
                    ...isOnCursor && {
                        style: {
                            transition: `height ${verseDuration}s linear`
                        }
                    }
                }
            />
        )
    }
}

export default connect(mapStateToProps)(VerseCursor)
