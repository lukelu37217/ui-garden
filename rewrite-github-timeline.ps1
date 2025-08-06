# Git历史重写脚本 - 实际修改GitHub提交时间
# 警告：这将重写git历史，请确保已备份

Write-Host "开始重写Git提交历史..." -ForegroundColor Yellow
Write-Host "这将修改GitHub上显示的提交时间" -ForegroundColor Red

# 创建最终备份
git branch backup-final-$(Get-Date -Format "yyyyMMdd-HHmm")

# 设置环境变量以避免警告
$env:FILTER_BRANCH_SQUELCH_WARNING = 1

Write-Host "正在重写提交历史..." -ForegroundColor Green

# 使用git filter-branch重写历史
$filterScript = @"
if [ `$GIT_COMMIT = "e100a11" ]; then
    export GIT_AUTHOR_DATE="2025-07-01T09:00:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-01T09:00:00+08:00"
elif [ `$GIT_COMMIT = "974d4fd" ]; then
    export GIT_AUTHOR_DATE="2025-07-03T16:30:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-03T16:30:00+08:00"
elif [ `$GIT_COMMIT = "488cb55" ]; then
    export GIT_AUTHOR_DATE="2025-07-05T10:15:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-05T10:15:00+08:00"
elif [ `$GIT_COMMIT = "1242458" ]; then
    export GIT_AUTHOR_DATE="2025-07-06T14:20:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-06T14:20:00+08:00"
elif [ `$GIT_COMMIT = "b1477f9" ]; then
    export GIT_AUTHOR_DATE="2025-07-08T11:45:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-08T11:45:00+08:00"
elif [ `$GIT_COMMIT = "0af4889" ]; then
    export GIT_AUTHOR_DATE="2025-07-10T15:30:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-10T15:30:00+08:00"
elif [ `$GIT_COMMIT = "8368d4d" ]; then
    export GIT_AUTHOR_DATE="2025-07-12T13:15:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-12T13:15:00+08:00"
elif [ `$GIT_COMMIT = "5d50bc7" ]; then
    export GIT_AUTHOR_DATE="2025-07-14T16:20:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-14T16:20:00+08:00"
elif [ `$GIT_COMMIT = "131e26e" ]; then
    export GIT_AUTHOR_DATE="2025-07-16T10:40:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-16T10:40:00+08:00"
elif [ `$GIT_COMMIT = "fc5ea50" ]; then
    export GIT_AUTHOR_DATE="2025-07-18T14:50:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-18T14:50:00+08:00"
elif [ `$GIT_COMMIT = "8a72ff7" ]; then
    export GIT_AUTHOR_DATE="2025-07-22T11:30:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-22T11:30:00+08:00"
elif [ `$GIT_COMMIT = "a9f9a0e" ]; then
    export GIT_AUTHOR_DATE="2025-07-26T20:45:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-26T20:45:00+08:00"
elif [ `$GIT_COMMIT = "c382fcf" ]; then
    export GIT_AUTHOR_DATE="2025-07-27T10:30:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-27T10:30:00+08:00"
elif [ `$GIT_COMMIT = "1c3ee8c" ]; then
    export GIT_AUTHOR_DATE="2025-07-27T22:00:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-27T22:00:00+08:00"
fi
"@

# 写入临时脚本文件
$filterScript | Out-File -FilePath "filter-script.sh" -Encoding UTF8

# 执行filter-branch
try {
    git filter-branch --env-filter $filterScript --tag-name-filter cat -- --branches --tags
    Write-Host "✅ Git历史重写成功！" -ForegroundColor Green
} catch {
    Write-Host "❌ Git历史重写失败: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# 清理临时文件
Remove-Item "filter-script.sh" -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "📅 新的提交时间线:" -ForegroundColor Cyan
git log --oneline --format="%h %ad %s" --date=format:'%Y-%m-%d %H:%M' -15

Write-Host ""
Write-Host "⚠️  下一步操作:" -ForegroundColor Yellow
Write-Host "1. 检查新的提交历史是否正确"
Write-Host "2. 强制推送到GitHub: git push --force-with-lease origin main"
Write-Host "3. GitHub上的提交时间将更新为新的时间线"

Write-Host ""
Write-Host "🔄 如果需要恢复，运行:" -ForegroundColor Red
$backupBranch = "backup-final-$(Get-Date -Format 'yyyyMMdd-HHmm')"
Write-Host "git checkout $backupBranch"
