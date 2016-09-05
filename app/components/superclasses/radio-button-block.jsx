import React from 'react'
import RadioButton from './radio-button'
import TextBlock from '../text/text-block'

/*************
 * CONTAINER *
 *************/

const RadioButtonBlock = ({

    selectedButtonIndex = 0,
    buttonKeys,
    ...other }) => {

    const selectedButtonKey = selectedButtonIndex > 0 ?
        buttonKeys[selectedButtonIndex - 1] : null

    return (
        <RadioButtonBlockView {...other}
            buttonKeys={buttonKeys}
            selectedButtonKey={selectedButtonKey}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const RadioButtonBlockView = ({

    // From props.
    buttonKeys,
    onButtonClick,

    // From controller.
    selectedButtonKey

}) => (
    <div className="radio-button-block">
        {buttonKeys.map((buttonKey, buttonIndex) => {
            const isDisabled = buttonKey === selectedButtonKey
            return (
                <RadioButton
                    key={buttonIndex}
                    isDisabled={isDisabled}
                    buttonKey={buttonKey}
                    buttonIndex={buttonIndex}
                    onButtonClick={onButtonClick}
                />
            )
        })}
    </div>
)

export default RadioButtonBlock
