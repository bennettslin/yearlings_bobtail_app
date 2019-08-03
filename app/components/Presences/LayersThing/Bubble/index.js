// import estherSpeech from 'assets/svgs/bubbles/estherSpeech'
// import togetherSketch from 'assets/svgs/bubbles/togetherSketch'
// import apartSketch from 'assets/svgs/bubbles/apartSketch'
// import dogsSketch from 'assets/svgs/bubbles/dogsSketch'
// import escapePodSketch from 'assets/svgs/bubbles/escapePodSketch'
import sketchbook from 'assets/svgs/bubbles/sketchbook'
import bubbleSmall from 'assets/svgs/bubbles/bubbleSmall'
import bubbleMedium from 'assets/svgs/bubbles/bubbleMedium'
// import bubbleLarge from 'assets/svgs/bubbles/bubbleLarge'
// import thoughtLarge from 'assets/svgs/bubbles/thoughtLarge'
// import cinemaThoughtRecording from 'assets/svgs/bubbles/cinemaThoughtRecording'
// import cinemaThoughtBuying from 'assets/svgs/bubbles/cinemaThoughtBuying'
import goKartThought from 'assets/svgs/bubbles/goKartThought'
// import waitingThoughtWalking from 'assets/svgs/bubbles/waitingThoughtWalking'
// import waitingThoughtSinging from 'assets/svgs/bubbles/waitingThoughtSinging'
// import waitingThoughtStudying from 'assets/svgs/bubbles/waitingThoughtStudying'
import pharmacyCel from 'assets/svgs/bubbles/pharmacyCel'
// import tarpitConstellation from 'assets/svgs/bubbles/tarpitConstellation'
// import siblingConstellation from 'assets/svgs/bubbles/siblingConstellation'
// import khariAttackSpeech from 'assets/svgs/bubbles/khariAttackSpeech'
// import lizDefenceSpeech from 'assets/svgs/bubbles/lizDefenceSpeech'
// import lizThought from 'assets/svgs/bubbles/lizThought'
// import thoughtMedium from 'assets/svgs/bubbles/thoughtMedium'
// import thoughtSmall from 'assets/svgs/bubbles/thoughtSmall'

import {
    ESTHER_SPEECH,
    TOGETHER_SKETCH,
    SKETCHBOOK__TOGETHER,
    BUBBLE_SMALL__SCHOOLBUS,
    BUBBLE_MEDIUM__SCHOOLBUS,
    BUBBLE_LARGE__SCHOOLBUS,
    THOUGHT_LARGE,
    BUBBLE_SMALL__TETHERBALL,
    BUBBLE_MEDIUM__TETHERBALL,
    BUBBLE_LARGE__TETHERBALL,
    APART_SKETCH,
    SKETCHBOOK__APART,
    DOGS_SKETCH,
    SKETCHBOOK__DOGS,
    ESCAPE_POD_SKETCH,
    SKETCHBOOK__ESCAPE_POD,
    BUBBLE_SMALL__BENNETT_COUCH,
    BUBBLE_MEDIUM__BENNETT_COUCH,
    BUBBLE_LARGE__BENNETT_COUCH,
    BUBBLE_SMALL__CINEMA,
    BUBBLE_MEDIUM__CINEMA,
    BUBBLE_LARGE__CINEMA,
    CINEMA_THOUGHT_RECORDING,
    CINEMA_THOUGHT_BUYING,
    BUBBLE_SMALL__GO_KART,
    BUBBLE_MEDIUM__GO_KART,
    GO_KART_THOUGHT,
    BUBBLE_SMALL__WAITING,
    BUBBLE_MEDIUM__WAITING,
    BUBBLE_LARGE__WAITING,
    WAITING_THOUGHT_WALKING,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
    PHARMACY_CEL,
    TARPIT_CONSTELLATION,
    SIBLING_CONSTELLATION,
    BUBBLE_SMALL__LIZ_COUCH,
    BUBBLE_MEDIUM__LIZ_COUCH,
    BUBBLE_LARGE__LIZ_COUCH,
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    BUBBLE_SMALL__LIZ,
    BUBBLE_MEDIUM__LIZ,
    BUBBLE_LARGE__LIZ,
    LIZ_THOUGHT,
    BUBBLE_SMALL__DEATHBED,
    BUBBLE_MEDIUM__DEATHBED,
    BUBBLE_LARGE__DEATHBED,
    THOUGHT_MEDIUM,
    BUBBLE_SMALL__TENNIS,
    BUBBLE_MEDIUM__TENNIS,
    BUBBLE_LARGE__TENNIS,
    THOUGHT_SMALL,
    BUBBLE_SMALL__INVERSE,
    BUBBLE_MEDIUM__INVERSE,
    BUBBLE_LARGE__INVERSE
} from 'constants/scene/things/bubbles'

export default {
    [ESTHER_SPEECH]: false,
    [TOGETHER_SKETCH]: false,
    [SKETCHBOOK__TOGETHER]: sketchbook,
    [BUBBLE_SMALL__SCHOOLBUS]: false,
    [BUBBLE_MEDIUM__SCHOOLBUS]: false,
    [BUBBLE_LARGE__SCHOOLBUS]: false,
    [THOUGHT_LARGE]: false,
    [BUBBLE_SMALL__TETHERBALL]: false,
    [BUBBLE_MEDIUM__TETHERBALL]: false,
    [BUBBLE_LARGE__TETHERBALL]: false,
    [APART_SKETCH]: false,
    [SKETCHBOOK__APART]: sketchbook,
    [DOGS_SKETCH]: false,
    [SKETCHBOOK__DOGS]: sketchbook,
    [ESCAPE_POD_SKETCH]: false,
    [SKETCHBOOK__ESCAPE_POD]: sketchbook,
    [BUBBLE_SMALL__BENNETT_COUCH]: false,
    [BUBBLE_MEDIUM__BENNETT_COUCH]: false,
    [BUBBLE_LARGE__BENNETT_COUCH]: false,
    [BUBBLE_SMALL__CINEMA]: false,
    [BUBBLE_MEDIUM__CINEMA]: false,
    [BUBBLE_LARGE__CINEMA]: false,
    [CINEMA_THOUGHT_RECORDING]: false,
    [CINEMA_THOUGHT_BUYING]: false,
    [BUBBLE_SMALL__GO_KART]: bubbleSmall,
    [BUBBLE_MEDIUM__GO_KART]: bubbleMedium,
    [GO_KART_THOUGHT]: goKartThought,
    [BUBBLE_SMALL__WAITING]: false,
    [BUBBLE_MEDIUM__WAITING]: false,
    [BUBBLE_LARGE__WAITING]: false,
    [WAITING_THOUGHT_WALKING]: false,
    [WAITING_THOUGHT_SINGING]: false,
    [WAITING_THOUGHT_STUDYING]: false,
    [PHARMACY_CEL]: pharmacyCel,
    [TARPIT_CONSTELLATION]: false,
    [SIBLING_CONSTELLATION]: false,
    [BUBBLE_SMALL__LIZ_COUCH]: false,
    [BUBBLE_MEDIUM__LIZ_COUCH]: false,
    [BUBBLE_LARGE__LIZ_COUCH]: false,
    [KHARI_ATTACK_SPEECH]: false,
    [LIZ_DEFENCE_SPEECH]: false,
    [BUBBLE_SMALL__LIZ]: false,
    [BUBBLE_MEDIUM__LIZ]: false,
    [BUBBLE_LARGE__LIZ]: false,
    [LIZ_THOUGHT]: false,
    [BUBBLE_SMALL__DEATHBED]: false,
    [BUBBLE_MEDIUM__DEATHBED]: false,
    [BUBBLE_LARGE__DEATHBED]: false,
    [THOUGHT_MEDIUM]: false,
    [BUBBLE_SMALL__TENNIS]: false,
    [BUBBLE_MEDIUM__TENNIS]: false,
    [BUBBLE_LARGE__TENNIS]: false,
    [THOUGHT_SMALL]: false,
    [BUBBLE_SMALL__INVERSE]: false,
    [BUBBLE_MEDIUM__INVERSE]: false,
    [BUBBLE_LARGE__INVERSE]: false
}
