/**
 * The stage floor. Nested under Scene because it needs to show below Cubes.
 * But renders with Theatre, not Scene.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

const mapStateToProps = ({
    canTheatreRender
}) => ({
    canTheatreRender
})

class Wood extends Component {

    static propTypes = {
        canTheatreRender: PropTypes.bool.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canTheatreRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canTheatreRender && !prevProps.canTheatreRender) {
            logger.warn('Wood rendered.')
        }
    }

    render() {
        return (
            <div
                className={cx(
                    'Wood',
                    'absoluteFullContainer'
                )}
            />
        )
    }
}
export default connect(mapStateToProps)(Wood)
