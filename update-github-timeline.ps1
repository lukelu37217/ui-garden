# 简化的GitHub时间线重写脚本
# 使用更安全的方法重写提交历史

Write-Host "🔄 准备重写GitHub提交时间线..." -ForegroundColor Yellow

# 创建最终备份
$backupBranch = "backup-before-timeline-$(Get-Date -Format 'yyyyMMdd-HHmm')"
git branch $backupBranch
Write-Host "✅ 创建备份分支: $backupBranch" -ForegroundColor Green

# 设置环境变量
$env:FILTER_BRANCH_SQUELCH_WARNING = "1"

Write-Host "🚀 开始重写提交历史..." -ForegroundColor Cyan

# 使用git filter-branch重写所有提交的时间
$result = git filter-branch -f --env-filter @'
case $GIT_COMMIT in
    e100a11*)
        export GIT_AUTHOR_DATE="2025-07-01T09:00:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-01T09:00:00+08:00"
        ;;
    974d4fd*)
        export GIT_AUTHOR_DATE="2025-07-03T16:30:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-03T16:30:00+08:00"
        ;;
    488cb55*)
        export GIT_AUTHOR_DATE="2025-07-05T10:15:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-05T10:15:00+08:00"
        ;;
    1242458*)
        export GIT_AUTHOR_DATE="2025-07-06T14:20:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-06T14:20:00+08:00"
        ;;
    b1477f9*)
        export GIT_AUTHOR_DATE="2025-07-08T11:45:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-08T11:45:00+08:00"
        ;;
    0af4889*)
        export GIT_AUTHOR_DATE="2025-07-10T15:30:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-10T15:30:00+08:00"
        ;;
    8368d4d*)
        export GIT_AUTHOR_DATE="2025-07-12T13:15:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-12T13:15:00+08:00"
        ;;
    5d50bc7*)
        export GIT_AUTHOR_DATE="2025-07-14T16:20:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-14T16:20:00+08:00"
        ;;
    131e26e*)
        export GIT_AUTHOR_DATE="2025-07-16T10:40:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-16T10:40:00+08:00"
        ;;
    fc5ea50*)
        export GIT_AUTHOR_DATE="2025-07-18T14:50:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-18T14:50:00+08:00"
        ;;
    8a72ff7*)
        export GIT_AUTHOR_DATE="2025-07-22T11:30:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-22T11:30:00+08:00"
        ;;
    a9f9a0e*)
        export GIT_AUTHOR_DATE="2025-07-26T20:45:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-26T20:45:00+08:00"
        ;;
    c382fcf*)
        export GIT_AUTHOR_DATE="2025-07-27T10:30:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-27T10:30:00+08:00"
        ;;
    1c3ee8c*)
        export GIT_AUTHOR_DATE="2025-07-27T22:00:00+08:00"
        export GIT_COMMITTER_DATE="2025-07-27T22:00:00+08:00"
        ;;
esac
'@ --tag-name-filter cat -- --branches --tags 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Git历史重写成功！" -ForegroundColor Green
} else {
    Write-Host "❌ Git历史重写失败" -ForegroundColor Red
    Write-Host $result
    exit 1
}

Write-Host ""
Write-Host "📅 新的提交时间线:" -ForegroundColor Cyan
git log --format="%h %ad %s" --date=format:'%Y-%m-%d %H:%M' -10

Write-Host ""
Write-Host "🎯 现在执行强制推送以更新GitHub:" -ForegroundColor Yellow
Write-Host "git push --force-with-lease origin main" -ForegroundColor White

Write-Host ""
Write-Host "⚠️  注意:" -ForegroundColor Red
Write-Host "- 这将覆盖GitHub上的提交历史"
Write-Host "- 如果需要恢复: git checkout $backupBranch"

# 询问是否立即推送
$response = Read-Host "是否立即推送到GitHub? (y/N)"
if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host "🚀 推送到GitHub..." -ForegroundColor Green
    git push --force-with-lease origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ 推送成功! GitHub提交时间线已更新!" -ForegroundColor Green
    } else {
        Write-Host "❌ 推送失败" -ForegroundColor Red
    }
} else {
    Write-Host "⏸️  推送已取消。稍后可运行: git push --force-with-lease origin main" -ForegroundColor Yellow
}
