import bennettKeyboard from '../../../../assets/svgs/actors/stephanie/bennettKeyboard'
import flapper from '../../../../assets/svgs/actors/stephanie/flapper'
import mingling from '../../../../assets/svgs/actors/stephanie/mingling'
import bennettDefiant from '../../../../assets/svgs/actors/stephanie/bennettDefiant'
import bennettRecording from '../../../../assets/svgs/actors/stephanie/bennettRecording'
import protester from '../../../../assets/svgs/actors/stephanie/protester'
import epilogue from '../../../../assets/svgs/actors/stephanie/epilogue'

import {
    BENNETT_KEYBOARD,
    FLAPPER,
    BENNETT_DEFIANT,
    BENNETT_RECORDING
} from 'constants/scene/actors/stephanie'

import {
    MINGLING,
    PROTESTER,
    EPILOGUE
} from 'constants/scene/actors/songs'

export default {
    [BENNETT_KEYBOARD]: bennettKeyboard,
    [FLAPPER]: flapper,
    [MINGLING]: mingling,
    [BENNETT_DEFIANT]: bennettDefiant,
    [BENNETT_RECORDING]: bennettRecording,
    [PROTESTER]: protester,
    [EPILOGUE]: epilogue
}
