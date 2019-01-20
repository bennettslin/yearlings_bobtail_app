// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

const mapStateToProps = ({
    responsiveStore: { menuHeight },
    viewportStore: {
        stageTop,
        stageLeft,
        stageWidth,
        stageHeight
    }
}) => ({
    menuHeight,
    stageTop,
    stageLeft,
    stageWidth,
    stageHeight
})

class Stage extends PureComponent {

    static propTypes = {
        // Through Redux.
        menuHeight: PropTypes.number.isRequired,
        stageTop: PropTypes.number.isRequired,
        stageLeft: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired,

        children: PropTypes.any.isRequired
    }

    render() {

        const {
            menuHeight,
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight,
            children
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'Stage',
                        'abF'
                    ),
                    style: {
                        top: `${menuHeight}px`
                    }
                }}
            >
                <div
                    {...{
                        className: cx(
                            'Stage__aspectRatioContainer',
                            'abF'
                        ),
                        style: {
                            top: `${stageTop}px`,
                            left: `${stageLeft}px`,
                            width: `${stageWidth}px`,
                            height: `${stageHeight}px`
                        }
                    }}
                >
                    {children}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Stage)
