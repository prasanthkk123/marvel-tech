# PowerShell script to push MarvelTech project to GitHub

Write-Host "🚀 MarvelTech - Pushing to GitHub" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ This is not a git repository. Please initialize git first:" -ForegroundColor Red
    Write-Host "   git init" -ForegroundColor Yellow
    Write-Host "   git remote add origin https://github.com/prasanthkk123/marvel-tech.git" -ForegroundColor Yellow
    exit 1
}

# Add all changes
Write-Host "📦 Adding all changes..." -ForegroundColor Cyan
git add .

# Check if there are changes to commit
$stagedChanges = git diff --staged --name-only
if (-not $stagedChanges) {
    Write-Host "ℹ️  No changes to commit." -ForegroundColor Yellow
    exit 0
}

Write-Host "📋 Changes to be committed:" -ForegroundColor Cyan
$stagedChanges | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }

# Ask for commit message
Write-Host ""
Write-Host "💬 Enter commit message (or press Enter for default):" -ForegroundColor Yellow
$commitMessage = Read-Host

if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update project with Java 21 upgrade and improved documentation"
}

# Commit changes
Write-Host "📝 Committing changes..." -ForegroundColor Cyan
git commit -m $commitMessage

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to commit changes." -ForegroundColor Red
    exit 1
}

# Check current branch
$currentBranch = git branch --show-current
Write-Host "🌿 Current branch: $currentBranch" -ForegroundColor Cyan

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
git push origin $currentBranch

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 View your repository: https://github.com/prasanthkk123/marvel-tech" -ForegroundColor Blue
    Write-Host "⚡ Check Actions tab for automated builds: https://github.com/prasanthkk123/marvel-tech/actions" -ForegroundColor Blue
    Write-Host "🌍 Frontend will be available at: https://prasanthkk123.github.io/marvel-tech/" -ForegroundColor Blue
    Write-Host ""
    Write-Host "📊 Next Steps:" -ForegroundColor Yellow
    Write-Host "1. Monitor the Actions tab for build status" -ForegroundColor Gray
    Write-Host "2. Enable GitHub Pages if not already enabled" -ForegroundColor Gray
    Write-Host "3. Wait a few minutes for deployment to complete" -ForegroundColor Gray
} else {
    Write-Host "❌ Failed to push to GitHub. Please check your credentials and try again." -ForegroundColor Red
    Write-Host "💡 Common solutions:" -ForegroundColor Yellow
    Write-Host "   - Check if you're logged into GitHub CLI: gh auth status" -ForegroundColor Gray
    Write-Host "   - Or set up personal access token for HTTPS authentication" -ForegroundColor Gray
}

Write-Host ""
Write-Host "🎉 Done!" -ForegroundColor Green