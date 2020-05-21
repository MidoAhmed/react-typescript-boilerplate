module.exports = {
    extends: ['@commitlint/config-conventional'],
    "rules": {
        "type-enum": [
            2,
            "always",
            [
                // new feature or feature evolutions (it increases minor version)
                "feat",
                // bug fix
                "🐛",
                "fix",
                // changes that affect the build system or external dependencies
                "📦",
                "build",
                // updating configurations, tasks, no production code change
                "🔧",
                "chore",
                // documentation only changes
                "📖",
                "docs",
                // refactoring production code
                "🔨",
                "refactor",
                // changes that do not affect the meaning of the code
                // (white-space, formatting, missing semi-colons, etc)
                "🎨",
                "style",
                // adding missing tests or refactoring tests without production code changes
                "💎",
                "test"
            ]
        ]
    },
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w*|🔧|🐛|📦|🔧|📖|🔨|🎨|💎)(?:\(([\w]*)\))?!?\: +(.*)$/,
            headerCorrespondence: ["type", "scope", "subject"]
        }
    }
};