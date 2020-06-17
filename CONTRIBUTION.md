# Contributing to Utilities
Please always keep the below rules and guidance for contributing any code to the package.

## Conventional Commits
The commit messages should be structured as follows:
```
<TYPE>[optional scope]: <description>
```
**Type** must be one of the following:
- **BUILD**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **CI**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **DOCS**: Documentation only changes
- **FEAT**: A new feature
- **FIX**: A bug fix
- **PERF**: A code change that improves performance
- **REFACTOR**: A code change that neither fixes a bug nor adds a feature
- **STYLE**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **TEST**: Adding missing tests or correcting existing tests

A **scope** may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis

Examples:
```
FEAT(parser): add ability to parse arrays
REFACTOR: drop support for Node 6
```

## Add an util
1. Add the util as the *src/utilName.ts* file
2. Add **unit tests** to the corresponding *\_\_tests\_\_/utilName.spec.ts* file
3. Run the linter before pr: **npm run lint**
