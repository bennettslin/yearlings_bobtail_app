import React from 'react'
import PropTypes from 'prop-types'
import DeviceWrapper from '../../wrappers/DeviceWrapper'
import LogicWrapper from '../../wrappers/LogicWrapper'
import PlayingWrapper from '../../wrappers/PlayingWrapper'
import ResponsiveWrapper from '../../wrappers/ResponsiveWrapper'
import ShownWrapper from '../../wrappers/ShownWrapper'
import TouchWrapper from '../../wrappers/TouchWrapper'
import TransitionWrapper from '../../wrappers/TransitionWrapper'

const WrapperContainer = ({ children }) => (
    <DeviceWrapper>
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
    </DeviceWrapper>
)

WrapperContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default WrapperContainer
