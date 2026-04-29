# CS 561 Lab 3: Branch `feature/mode-action-dialogs`

## Branch Author
Predrag Despotović

## Summary of Work Done in this Branch
Add modal dialog HTML and JavaScript interaction behavior for the SpeedScore app's four modes (Feed, Rounds, Courses, Buddies). Add floating action button handlers, dialog handlers, and keyboard focus trapping within dialogs

## Commits

| Commit ID | Commit Message | # Lines Changed |
|-----------|---------------|-----------------|
| a168135 | Add floating action button click handler with dialog HTML for all modes | 137 |
| ebe91bb | Add dialog action button click handler to confirm and close dialogs | 37 |
| 58eb6c5 | Add dialog cancel button click handler | 37 |
| 7db9c3d | Add keyboard focus trapping for dialog navigation | 39 |

### Total Commits Made in this Branch: 4

## Cherry Pick
- Cherry-picked 7db9c3d from feature/mode-action-dialogs to main
  ```
  git checkout main
  git cherry-pick 7db9c3d
  ```
- Conflict occured during cherry-pick, file scripts/modeActions.js
- Accepted the incoming file content with `git add scripts/modeActions.js`, then completed the cherry-pick with `git cherry-pick --continue`
