// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

const mapStateToProps = ({
    deviceStore: {
        stageTop,
        stageLeft,
        stageWidth,
        stageHeight
    }
}) => ({
    stageTop,
    stageLeft,
    stageWidth,
    stageHeight
})

class Stage extends PureComponent {

    static propTypes = {
        // Through Redux.
        stageTop: PropTypes.number.isRequired,
        stageLeft: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired,

        children: PropTypes.any.isRequired
    }

    render() {

        const {
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight,
            children
        } = this.props

        return (
            <div className={cx(
                'Stage',

                /**
                 * Not the most elegant solution. Moving stage from Main to
                 * Live means it is no longer positioned to accommodate the
                 * menu. This positions it as if it were still a child of Main.
                 */
                'position__mainColumn'
            )}>
                <div
                    {...{
                        className: cx(
                            'Stage__aspectRatioContainer',
                            'absoluteFullContainer'
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
