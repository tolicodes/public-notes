This would be a util to pull changes on all children of a branch recursively

Ex, the following are branched off of each other
```
fix-to-feature-1 -> feature-1 -> master
```

Running `git_pull_ancestor_tree` inside of `fix-to-feature-1` would first pull `master` into `feature-1` and then `feature-1` into `fix-to-feature-1`