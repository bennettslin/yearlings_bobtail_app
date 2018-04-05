// Webview to show song score.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setIsScoreLoaded } from '../../redux/actions/player'
import { getSongScore } from '../../helpers/dataHelper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

class Score extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,

        // From parent.
        scoreSectionRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.onWebviewLoad = this.onWebviewLoad.bind(this)
    }

    onWebviewLoad() {
        this.props.setIsScoreLoaded(true)
    }

    render() {
        const { renderReadySongIndex } = this.props,
            score = getSongScore(renderReadySongIndex)

        return (
            <div
                ref={this.props.scoreSectionRef}
                className={cx(
                    'Score',
                    'section'
                )}
                onKeyDown={this.hi}
                tabIndex="1"
            >
                <iframe
                    ref={(node) => (this.myWebview = node)}
                    className={`webview`}
                    src={score}
                    onLoad={this.onWebviewLoad}
                    tabIndex="2"
                />
            </div>
        )
    }
}

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setIsScoreLoaded
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Score)
