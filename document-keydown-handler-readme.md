# CS 561 Lab 3: Branch `feature/document-keydown-handler`

## Branch Author
Predrag Despotović

## Summary of Work Done in this Branch
Add a document-level keydown event listener that routes keyboard events to the appropriate handler based on which UI element currently has focus (menu button, menu items, mode tabs, or action dialogs).

## Commits

| Commit ID | Commit Message | # Lines Changed |
|-----------|---------------|-----------------|
| 38453d4 | Add document keydown listener for menu and tab keyboard routing | 27 |
| 112eb72 | Add keyboard routing for action dialog focus | 3 |

### Total Commits Made in this Branch: 2

## Rebase
- Rebased feature/document-keydown-handler onto updated main
- Reason: main advanced with commits 8b3eba1 (Add main.js script reference) and 2f92279 (Update commit statistics) after the branch was created
- Commands used:
  ```
  git checkout feature/document-keydown-handler
  git rebase main
  ```
- Rebase applied cleanly with no conflicts

## Merge Conflict
- Artificially created a conflict in the README.md on merge of feature/document-keydown-handler into main
- Both main and the feature branch updated the Merge Conflicts Resolved table with different values
- Kept the branch's version with the correct count of 1 and the branch name `feature/document-keydown-handler`
- Commands used:
  ```
  git checkout main
  git merge feature/document-keydown-handler
  # resolved conflict in README.md, clicked accept incoming in VS Code
  git add README.md
  git commit -m "Merge feature/document-keydown-handler with conflict resolution"
  ```
