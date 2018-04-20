# Refactor notes
First wave of components to refactor.
(Delete when no longer needed.)

Folder/file structure organised
    Single word is top level class and component

Less constants
    All renamed, or accounted for elsewhere in a comment.
    Prefixed with JS if needed, make sure consistent

Class names optimised for clarity
    Favour appending more style-specific classes

Consolidate styles for child with parent selector nesting

### Remaining

AccessIcons (take in array, handle not last child, refactor all clients as well.)
Admin
Anchor (/)
Annotation (Waiting on carousel rework.)
Audio (Waiting on button icons.)
Button

    Client handles how it's positioned in parent container

    handles its own hover and active animation
    Has default size that can be overridden by props
    Child icons inherit default size of parent
    Handles positioning of its child icons (get rid of position: inherit weirdness)
    Renders access icon by taking in keyChar as string
    Background and foreground icons are passed in directly as children components.

Carousel (Waiting on carousel rework to finalise. Revert dots when done.)
Dot (Waiting on button.)
Dots (Revisit with Button.)
DynamicSvg
Icon
Live
    Menu (/)
    OverviewLogue
    PopupOverlaid
Lyric (Just waiting on taking care of dots for LyricStanzaDot.)
LyricColumn (Waiting on access.)
Main
    LeftShelf (do with overviewToggle, dotsToggle, and scoresTips)
    DotsSlideToggle
    OverviewToggle
Nav (Need to consider last title margin, panels, and consolidate responsive)
Overview (Waiting on overview in phone and heightless.)
Players (/)
Popup (Waiting on popup rework to finalise.)
Popups
    AnnotationPopup
    OverviewPopup
    ScorePopup
    TipsPopup
    TitlePopup
    WikiPopup
Score (/)
ScoresTips (Move to Main.)
Slider (Now just waiting on rework.)
Stage (/) (Just rename stuff when picking back up again.)
Text (Fix bugs.)
Theatre (/) (Just rename stuff when picking back up again.)
Tips (/)
Title (/)
Verse (Consolidate VerseAudio into single component, revisit with Button.)
Wiki (/)

AccessManager
AppManager
RootManager
EventManager
RoutingManager
SwitchManager

### Done
