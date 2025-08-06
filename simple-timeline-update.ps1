# GitHub提交时间线更新脚本
Write-Host "开始重写GitHub提交时间线..." -ForegroundColor Yellow

# 创建备份
$backup = "backup-$(Get-Date -Format 'yyyyMMdd-HHmm')"
git branch $backup
Write-Host "备份创建: $backup" -ForegroundColor Green

# 设置环境变量
$env:FILTER_BRANCH_SQUELCH_WARNING = "1"

# 重写提交历史
Write-Host "正在重写提交历史..." -ForegroundColor Cyan

git filter-branch -f --env-filter "
if [ \`$GIT_COMMIT \` = \`"e100a11\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-01T09:00:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-01T09:00:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"974d4fd\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-03T16:30:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-03T16:30:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"488cb55\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-05T10:15:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-05T10:15:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"1242458\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-06T14:20:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-06T14:20:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"b1477f9\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-08T11:45:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-08T11:45:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"0af4889\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-10T15:30:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-10T15:30:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"8368d4d\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-12T13:15:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-12T13:15:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"5d50bc7\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-14T16:20:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-14T16:20:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"131e26e\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-16T10:40:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-16T10:40:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"fc5ea50\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-18T14:50:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-18T14:50:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"8a72ff7\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-22T11:30:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-22T11:30:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"a9f9a0e\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-26T20:45:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-26T20:45:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"c382fcf\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-27T10:30:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-27T10:30:00+08:00\`"
elif [ \`$GIT_COMMIT \` = \`"1c3ee8c\`" ]; then
    export GIT_AUTHOR_DATE=\`"2025-07-27T22:00:00+08:00\`"
    export GIT_COMMITTER_DATE=\`"2025-07-27T22:00:00+08:00\`"
fi
" --tag-name-filter cat -- --branches --tags

if ($LASTEXITCODE -eq 0) {
    Write-Host "历史重写成功!" -ForegroundColor Green
    
    Write-Host "新的提交时间线:" -ForegroundColor Cyan
    git log --format="%h %ad %s" --date=format:'%Y-%m-%d %H:%M' -10
    
    Write-Host ""
    Write-Host "推送到GitHub以更新远程历史:" -ForegroundColor Yellow
    Write-Host "git push --force-with-lease origin main"
} else {
    Write-Host "历史重写失败!" -ForegroundColor Red
}
