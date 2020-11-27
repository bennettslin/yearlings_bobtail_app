import React, { memo } from 'react'
import PropTypes from 'prop-types'
import DeviceWrapper from '../../wrappers/DeviceWrapper'
import MountWrapper from '../../wrappers/MountWrapper'
import AccessWrapper from '../../wrappers/AccessWrapper'
import PlayingWrapper from '../../wrappers/PlayingWrapper'
import ResponsiveWrapper from '../../wrappers/ResponsiveWrapper'
import ShownWrapper from '../../wrappers/ShownWrapper'
import TouchWrapper from '../../wrappers/TouchWrapper'
import TransitionWrapper from '../../wrappers/TransitionWrapper'
import LogicWrapper from '../../wrappers/LogicWrapper'

const WrapperContainer = ({ children }) => (
    <DeviceWrapper>
        <MountWrapper>
            <AccessWrapper>
                <PlayingWrapper>
                    <ResponsiveWrapper>
                        <ShownWrapper>
                            <TouchWrapper>
                                <TransitionWrapper>
                                    <LogicWrapper>
                                        {children}
                                    </LogicWrapper>
                                </TransitionWrapper>
                            </TouchWrapper>
                        </ShownWrapper>
                    </ResponsiveWrapper>
                </PlayingWrapper>
            </AccessWrapper>
        </MountWrapper>
    </DeviceWrapper>
)

WrapperContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default memo(WrapperContainer)
