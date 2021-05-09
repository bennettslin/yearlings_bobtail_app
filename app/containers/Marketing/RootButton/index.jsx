import React from 'react'
import cx from 'classnames'
import Button from '../../../components/Button'
import ButtonTitle from '../../../components/Button/Title'
import { reloadFromRoot } from '../../../helpers/navigate'
import { ROOT_HOME_KEY } from '../../../constants/access'
import { ROOT_HOME_BUTTON_KEY } from '../../../constants/buttons'
import './style'

const RootButton = () => (
    <Button
        isCustomSize
        hoverOnParent
        {...{
            className: cx(
                'dramaMasks',
                'RootButton',
            ),
            buttonName: ROOT_HOME_BUTTON_KEY,
            accessKey: ROOT_HOME_KEY,
            handleButtonClick: reloadFromRoot,
            inanimateChild: (
                <ButtonTitle
                    {...{
                        title: '\u00a0back to album',
                    }}
                />
            ),
        }}
    />
)

export default RootButton
