import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getClassNameForPresenceType,
    getMapForPresenceType,
    getArrangementForPresenceType
} from './helper'

// TODO: Move this to hoc helper?
import { getPresenceXYWidthAndHeight } from '../helper'

import { ACTORS } from 'constants/scene'

class PresenceHoc extends PureComponent {

    static propTypes = {
        // From parent.
        cubesKey: PropTypes.string.isRequired,
        presenceType: PropTypes.string.isRequired,
        presenceKey: PropTypes.string.isRequired,
        presenceValue: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
            PropTypes.array
        ])
    }

    render() {
        const {
                cubesKey,
                presenceType,
                presenceKey,
                presenceValue
            } = this.props,
            presencesMap = getMapForPresenceType(presenceType)

        if (presenceValue) {
            const PresenceComponent = presencesMap[presenceKey],

                arrangement = getArrangementForPresenceType({
                    presenceType,
                    presenceKey,
                    presenceValue
                }),

                {
                    yIndex,
                    arrangement: {
                        xFloat,
                        zOffset,
                        xWidth,
                        zHeight
                    }
                } = arrangement,

                xYWidthAndHeight = getPresenceXYWidthAndHeight({
                    cubesKey,
                    yIndex,
                    xFloat,
                    zOffset,
                    xWidth,
                    zHeight
                })

            return (
                <PresenceComponent
                    key={presenceKey}
                    {...{
                        className: cx(
                            getClassNameForPresenceType(presenceType),
                            'absoluteFullContainer'
                        ),
                        ...presenceType === ACTORS && {
                            instanceKey: presenceValue
                        },
                        ...xYWidthAndHeight
                    }}
                />
            )

        } else {
            return null
        }
    }
}

export default PresenceHoc
