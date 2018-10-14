import {
    GO_KART_SEAT_LEFT,
    GO_KART_SEAT_RIGHT,
    GO_KART_DASHBOARD_LEFT,
    GO_KART_DASHBOARD_RIGHT
} from '../../../furnitureKeys'

const ARRANGEMENTS_MAP = {
    [GO_KART_SEAT_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2,
            xWidth: 1,
            zHeight: 0.5
        }
    },
    [GO_KART_SEAT_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 7,
            xWidth: 1,
            zHeight: 0.5
        }
    },
    [GO_KART_DASHBOARD_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 3.5,
            xWidth: 2,
            zHeight: 1
        }
    },
    [GO_KART_DASHBOARD_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 8.5,
            xWidth: 2,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
