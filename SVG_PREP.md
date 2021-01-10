# Preparing SVGs

## Illustrator

1. Fit artboard to artwork bounds. (Command-Shift-F)
    * This is also needed to avoid extraneous transform attributes.
2. Save. (Command-S)
3. Export as... (Command-Shift-E)
    * Choose SVG format, obviously.
    * Save in the appropriate folder under "assets/svgs."
    * Approve replacing the existing file.
        * If warning doesn't show, correct folder location wasn't selected.
    * SVG options:
        * Styling: Internal CSS
        * Font: doesn't matter
        * Images: doesn't matter
        * Object IDs: Layer Names
        * Decimal: 2
        * Responsive [x]

## VS Code
* This section is completely handled by the *prepSvg* macro.
    * Apply macro in file. (Command-Shift-Option-J)

1. Delete *id* and *xmlns* attributes in top-level <svg> tag.
2. Delete entire *<defs>* style section.
3. Delete all *class* attributes.
    * Select all occurrences of find... (Command-Shift-L)
    * Be careful not to select any closing angle brackets.
4. Change all *id* attributes to *class*.
5. If there are *data-name* attributes, delete them.
    * Also delete numeric suffix in preceding *class*.