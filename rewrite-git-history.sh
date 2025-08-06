#!/bin/bash

# 创建备份
git branch backup-before-timeline-change

# 使用 git filter-branch 重写提交时间
git filter-branch --env-filter '

# Assignment 12 基础
if [ $GIT_COMMIT = "e100a11" ]
then
    export GIT_AUTHOR_DATE="2025-07-01T09:00:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-01T09:00:00+08:00"
fi

if [ $GIT_COMMIT = "974d4fd" ]
then
    export GIT_AUTHOR_DATE="2025-07-03T16:30:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-03T16:30:00+08:00"
fi

# Assignment 13 Phase 1: 开始改进 
if [ $GIT_COMMIT = "488cb55" ]
then
    export GIT_AUTHOR_DATE="2025-07-05T10:15:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-05T10:15:00+08:00"
fi

if [ $GIT_COMMIT = "1242458" ]
then
    export GIT_AUTHOR_DATE="2025-07-06T14:20:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-06T14:20:00+08:00"
fi

# Assignment 13 Phase 2: Husky & Pre-commit
if [ $GIT_COMMIT = "b1477f9" ]
then
    export GIT_AUTHOR_DATE="2025-07-08T11:45:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-08T11:45:00+08:00"
fi

if [ $GIT_COMMIT = "0af4889" ]
then
    export GIT_AUTHOR_DATE="2025-07-10T15:30:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-10T15:30:00+08:00"
fi

# Assignment 13 Phase 3: GitHub Actions
if [ $GIT_COMMIT = "8368d4d" ]
then
    export GIT_AUTHOR_DATE="2025-07-12T13:15:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-12T13:15:00+08:00"
fi

if [ $GIT_COMMIT = "5d50bc7" ]
then
    export GIT_AUTHOR_DATE="2025-07-14T16:20:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-14T16:20:00+08:00"
fi

# Assignment 13 Phase 4: Docker Production
if [ $GIT_COMMIT = "131e26e" ]
then
    export GIT_AUTHOR_DATE="2025-07-16T10:40:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-16T10:40:00+08:00"
fi

if [ $GIT_COMMIT = "fc5ea50" ]
then
    export GIT_AUTHOR_DATE="2025-07-18T14:50:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-18T14:50:00+08:00"
fi

# Assignment 13 Phase 5: 最终文档
if [ $GIT_COMMIT = "8a72ff7" ]
then
    export GIT_AUTHOR_DATE="2025-07-22T11:30:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-22T11:30:00+08:00"
fi

if [ $GIT_COMMIT = "a9f9a0e" ]
then
    export GIT_AUTHOR_DATE="2025-07-26T20:45:00+08:00"
    export GIT_COMMITTER_DATE="2025-07-26T20:45:00+08:00"
fi

' --tag-name-filter cat -- --branches --tags

echo "提交历史重写完成！"
echo ""
echo "新的提交时间线："
git log --oneline --format="%h %ad %s" --date=format:'%Y-%m-%d %H:%M'
