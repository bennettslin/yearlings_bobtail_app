/**
 * The stage floor. Nested under Scene because it needs to show below Cubes.
 * But renders with Theatre, not Scene.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

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
            console.warn('Wood rendered.')
        }
    }

    render() {
        return (
            <DynamicSvg
                className={cx(
                    'Wood'
                )}
            >
                <rect
                    className={cx(
                        'absoluteFullContainer'
                    )}
                />
            </DynamicSvg>
        )
    }
}
export default connect(mapStateToProps)(Wood)
