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

AccessIcons (/)
Admin
Anchor (/)
Annotation (Waiting on carousel rework.)
Audio (Waiting on button icons.)
Button (/)
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
Nav (Need to consider last title margin, panels, and consolidate responsive, nav button sizing and panels.)
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
Verse (/)
Wiki (/)

AccessManager
AppManager
RootManager
EventManager
RoutingManager
SwitchManager

### Done
