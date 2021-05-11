import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../components/Button'
import { reloadFromRoot } from '../../../helpers/navigate'
import { ROOT_HOME_KEY } from '../../../constants/access'
import { ROOT_HOME_BUTTON_KEY } from '../../../constants/buttons'
import { ALBUM_TITLE } from '../../../constants/paths'
import './style'

const RootButton = ({ hasTitleShadowLight }) => (
    <Button
        isCustomSize
        {...{
            className: cx(
                'dramaMasks',
                'RootButton',
            ),
            buttonName: ROOT_HOME_BUTTON_KEY,
            accessKey: ROOT_HOME_KEY,
            handleButtonClick: reloadFromRoot,
            hasTitleShadowLight,
            buttonTitle: (
                <>
                    {'\u00a0back to\u00a0'}
                    <i>{ALBUM_TITLE}</i>
                    {'\u00a0album'}
                </>
            ),
        }}
    />
)

RootButton.propTypes = {
    hasTitleShadowLight: PropTypes.bool,
}

export default RootButton
