# CS 561 Lab 3: Branch `<<feature/mode-tabs-navigation-js>>`

## Branch Author
Hao Jun Chen RayHao2 

## Summary of Work Done in this Branch
Add feature for modeTabs.js

## Commits

| Commit ID | Commit Message | # Lines Changed |
|-----------|---------------|-----------------|
| 5d1ca87 | Add mode name and route maps to main.js | 17 |
| a385226 | Add mode tab state stores to main.js | 16 |
| e4ee987 | Add mode tab DOM references to main.js | 4 |
| 0c25223 | add switchMode function to modeTabs.js | 21 |
| a3c7242 | add Bind switchMode() to each tab button's click handler to modeTabs.js | 2 |
| 525143a | add KeyDownModeTabFocused function to modeTabs.js | 29 |

### Total Commits Made in this Branch: 6


### cherry-pick
In this branch, I cherry-picked three commits (8b0f3b5, 555d982, and 66a9822) from the feature/main-mode-tabs-state branch into the feature/mode-tabs-navigation-js branch. These commits added the mode tab name and route mappings, the mode tab state stores, and the DOM references required for implementing the mode tab functionality. I performed the cherry-pick so that I could selectively reuse the necessary main.js setup for modeTabs.js without merging the entire feature/main-mode-tabs-state branch into main at that point. No conflicts occurred during the cherry-pick process.
