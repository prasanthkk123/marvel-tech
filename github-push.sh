#!/bin/bash
# Git push helper script for MarvelTech project

echo "🚀 MarvelTech - Pushing to GitHub"
echo "=================================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ This is not a git repository. Please initialize git first:"
    echo "   git init"
    echo "   git remote add origin https://github.com/prasanthkk123/marvel-tech.git"
    exit 1
fi

# Add all changes
echo "📦 Adding all changes..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
    exit 0
fi

# Ask for commit message
echo "💬 Enter commit message (or press Enter for default):"
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update project with Java 21 upgrade and improved documentation"
fi

# Commit changes
echo "📝 Committing changes..."
git commit -m "$commit_message"

# Check current branch
current_branch=$(git branch --show-current)
echo "🌿 Current branch: $current_branch"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin $current_branch

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 View your repository: https://github.com/prasanthkk123/marvel-tech"
    echo "⚡ Check Actions tab for automated builds: https://github.com/prasanthkk123/marvel-tech/actions"
    echo "🌍 Frontend will be available at: https://prasanthkk123.github.io/marvel-tech/"
else
    echo "❌ Failed to push to GitHub. Please check your credentials and try again."
fi

echo "🎉 Done!"