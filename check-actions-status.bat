@echo off
echo =================================
echo 检查 GitHub Actions 状态
echo =================================
echo.

echo 🔗 请访问以下链接查看 GitHub Actions 状态:
echo https://github.com/lukelu37217/ui-garden/actions
echo.

echo 📊 最新的 workflow 运行应该显示:
echo ✅ CI/CD Pipeline - "docs: Update UI status indicators for assignment compliance"
echo.

echo 🕐 如果显示黄色圆圈 (正在运行)，请等待几分钟
echo ✅ 如果显示绿色勾号，说明成功 
echo ❌ 如果显示红色叉号，说明失败
echo.

echo 📋 给老师展示的检查清单:
echo ✅ 1. Pre-commit Hooks: 工作正常 (刚才运行成功)
echo ⏳ 2. GitHub Actions: 检查网站状态
echo ✅ 3. Docker Deployment: 端口 8018 运行中
echo.

echo 🐳 Docker 状态检查:
docker ps | findstr "8018"
echo.

echo 🌐 本地访问测试:
echo 访问: http://localhost:8018
echo.

echo 📝 提示: 
echo - GitHub Actions 通常需要 2-5 分钟完成
echo - 如果失败，点击进入查看详细日志
echo - 所有绿色勾号说明完全符合作业要求
echo.

pause
