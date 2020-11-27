import React, { memo } from 'react'
import PropTypes from 'prop-types'
import DeviceWrapper from '../../wrappers/DeviceWrapper'
import ViewportWrapper from '../../wrappers/ViewportWrapper'
import AccessWrapper from '../../wrappers/AccessWrapper'
import PlayingWrapper from '../../wrappers/PlayingWrapper'
import ResponsiveWrapper from '../../wrappers/ResponsiveWrapper'
import ShownWrapper from '../../wrappers/ShownWrapper'
import TouchWrapper from '../../wrappers/TouchWrapper'
import TransitionWrapper from '../../wrappers/TransitionWrapper'
import LogicWrapper from '../../wrappers/LogicWrapper'

const WrapperContainer = ({ children }) => (
    <DeviceWrapper>
        <ViewportWrapper>
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
        </ViewportWrapper>
    </DeviceWrapper>
)

WrapperContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default memo(WrapperContainer)
