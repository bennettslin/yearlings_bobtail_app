import {
    GO_KART_EXTERIOR,
    ARRANGEMENT_GO_KART_LEFT,
    ARRANGEMENT_GO_KART_RIGHT
} from '../../../panelKeys'

const ARRANGEMENTS_MAP = {
    [GO_KART_EXTERIOR]: {
        [ARRANGEMENT_GO_KART_LEFT]: {
            yIndex: 3,
            arrangement: {
                xFloat: 2.5,
                xWidth: 5,
                zHeight: 2
            }
        },
        [ARRANGEMENT_GO_KART_RIGHT]: {
            yIndex: 3,
            arrangement: {
                xFloat: 8.5,
                xWidth: 5,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_MAP
