import catholicGuy from '../../../../assets/svgs/actors/wade/catholicGuy'
import watching from '../../../../assets/svgs/actors/wade/watching'
import mingling from '../../../../assets/svgs/actors/wade/mingling'
import protester from '../../../../assets/svgs/actors/wade/protester'
import epilogue from '../../../../assets/svgs/actors/wade/epilogue'

import {
    CATHOLIC_GUY,
    WATCHING,
} from '../../../../constants/scene/actors/wade'

import {
    MINGLING,
    PROTESTER,
    EPILOGUE,
} from '../../../../constants/scene/actors/songs'

export default {
    [WATCHING]: watching,
    [MINGLING]: mingling,
    [EPILOGUE]: epilogue,
    [CATHOLIC_GUY]: catholicGuy,
    [PROTESTER]: protester,
}
