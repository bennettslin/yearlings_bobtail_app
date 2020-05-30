// Section to show the stage illustrations.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import CeilingRafter from './Rafter'
import { getRaftersRowCoordinates } from './helper'
import './style'

const mapStateToProps = state => {
    const {
        prosceniumStore: {
            prosceniumLeft,
            prosceniumWidth
        },
        theatreStore: { ceilingHeight },
        viewportStore: { windowWidth }
    } = state

    return {
        windowWidth,
        prosceniumLeft,
        prosceniumWidth,
        ceilingHeight
    }
}

class Ceiling extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired,
        prosceniumLeft: PropTypes.number.isRequired,
        prosceniumWidth: PropTypes.number.isRequired,
        ceilingHeight: PropTypes.number.isRequired
    }

    render() {
        const {
                windowWidth,
                prosceniumLeft,
                prosceniumWidth,
                ceilingHeight
            } = this.props,

            raftersRowCoordinates = getRaftersRowCoordinates({
                prosceniumLeft,
                prosceniumWidth,
                ceilingHeight
            })

        return (
            <div
                {...{
                    className: cx(
                        'Ceiling',
                        'Theatre__field'
                    ),
                    style: {
                        width: `${windowWidth}px`,
                        height: `${ceilingHeight}px`
                    }
                }}
            >
                {raftersRowCoordinates.map(({
                    top,
                    left,
                    width,
                    height
                }, index) => (
                    <CeilingRafter
                        {...{
                            key: index,
                            top,
                            left,
                            width,
                            height
                        }}
                    />
                ))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Ceiling)
