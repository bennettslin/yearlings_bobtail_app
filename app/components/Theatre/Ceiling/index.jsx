// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from 'modules/Svg'
import CeilingRafter from './Rafter'

import { getRaftersRowCoordinates } from './helper'

const mapStateToProps = ({
    viewportStore: {
        windowWidth,
        stageLeft,
        stageWidth,
        theatreStore: { ceilingHeight }
    }
}) => ({
    windowWidth,
    stageLeft,
    stageWidth,
    ceilingHeight
})

class Ceiling extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired,
        stageLeft: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        ceilingHeight: PropTypes.number.isRequired
    }

    render() {
        const {
                windowWidth,
                stageLeft,
                stageWidth,
                ceilingHeight
            } = this.props,

            raftersRowCoordinates = getRaftersRowCoordinates({
                stageLeft,
                stageWidth,
                ceilingHeight
            })

        return (
            <div
                {...{
                    className: cx(
                        'Ceiling',
                        'Theatre__field'
                    ),
                    style: { height: `${ceilingHeight}px` }
                }}
            >
                <Svg
                    {...{
                        className: cx(
                            'Theatre__subfield'
                        ),
                        viewBoxWidth: windowWidth,
                        viewBoxHeight: ceilingHeight
                    }}
                >
                    {raftersRowCoordinates.map(({
                        top,
                        left,
                        width,
                        height
                    }, index) => (
                        <CeilingRafter
                            key={index}
                            {...{
                                top,
                                left,
                                width,
                                height
                            }}
                        />
                    ))}
                </Svg>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Ceiling)
