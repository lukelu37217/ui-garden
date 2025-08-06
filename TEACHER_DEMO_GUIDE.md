# Assignment 13 - Teacher Demo Guide

## 演示三个核心检查点

### 1. Commit Hook (Pre-commit 钩子) ✅

**什么是Commit Hook：**
- 在每次 `git commit` 之前自动运行的质量检查
- 阻止不符合质量标准的代码提交
- 包含 Prettier、ESLint、和测试检查

**如何演示给老师：**

```bash
# 1. 查看 pre-commit hook 配置
dir .husky
type .husky\pre-commit

# 2. 演示 hook 工作原理
# 添加一个故意的错误到代码中
echo "const badCode = 'missing semicolon'" >> src/App.tsx

# 3. 尝试提交 - 会被阻止
git add src/App.tsx
git commit -m "test commit"
# 结果：提交失败，pre-commit hook 阻止了不合格代码

# 4. 修复代码
git checkout src/App.tsx

# 5. 正常提交 - 会成功
git add .
git commit -m "docs: Add teacher demo guide"
```

**演示结果：**
- ❌ 错误代码被阻止提交
- ✅ 正确代码成功提交
- 自动运行：Prettier格式化、ESLint检查、测试

---

### 2. GitHub Actions (CI/CD 管道) ✅

**什么是GitHub Actions：**
- 在GitHub上的自动化CI/CD管道
- 每次push或PR时自动运行相同的质量检查
- 防止开发者绕过本地pre-commit hooks

**如何演示给老师：**

```bash
# 1. 查看GitHub Actions配置
type .github\workflows\ci.yml

# 2. 访问GitHub Actions页面
# 在浏览器中打开：https://github.com/lukelu37217/ui-garden/actions

# 3. 推送代码触发Actions
git push origin main

# 4. 查看实时运行状态
# GitHub界面会显示：
# - ✅ 代码质量检查 (Prettier, ESLint, Tests)
# - ✅ Docker构建测试
# - ✅ 多Node.js版本测试 (18.x, 20.x)
```

**演示要点：**
- 显示自动化质量检查运行
- 展示失败时的通知机制
- 证明无法绕过质量检查

---

### 3. Docker Deployment (Docker部署) ✅

**什么是Docker Deployment：**
- 容器化的生产环境部署
- 在构建过程中集成质量检查
- 运行在指定端口8018上

**如何演示给老师：**

```bash
# 1. 查看 Dockerfile 配置
type Dockerfile

# 2. 构建Docker镜像（包含质量检查）
docker build -t lu_luke_coding_assignment13 .

# 3. 运行容器
docker run -d -p 8018:8018 --name lu_luke_coding_assignment13 lu_luke_coding_assignment13

# 4. 验证部署
# 在浏览器访问：http://localhost:8018

# 5. 查看运行状态
docker ps

# 6. 查看容器详情
docker inspect lu_luke_coding_assignment13
```

**演示要点：**
- 容器名称：`lu_luke_coding_assignment13` ✅
- 工作目录：`/Lu_Luke_ui_garden_build_checks` ✅  
- 端口：8018 ✅
- 质量检查集成在构建过程中 ✅

---

## 作业要求符合性检查

### ✅ 所有要求已满足：

1. **Pre-commit检查**
   - ✅ Prettier：自动代码格式化
   - ✅ ESLint：代码质量检查
   - ✅ Tests：单元测试必须通过

2. **GitHub Actions工作流**
   - ✅ 每次push/PR自动运行
   - ✅ 与本地pre-commit相同的检查
   - ✅ 构建失败时通知开发者

3. **Docker部署要求**
   - ✅ 容器名称：`lu_luke_coding_assignment13`
   - ✅ 工作目录：`/Lu_Luke_ui_garden_build_checks`
   - ✅ 端口：8018
   - ✅ 质量检查集成在构建中

---

## 快速演示脚本

为了方便老师检查，可以运行以下命令：

```bash
# 完整演示脚本
echo "=== 1. Pre-commit Hook 演示 ==="
type .husky\pre-commit
echo "添加测试修改..."
echo "// test" >> src/App.tsx
git add src/App.tsx
echo "尝试提交（会被阻止）..."
git commit -m "test"
git checkout src/App.tsx

echo "=== 2. GitHub Actions 演示 ==="
echo "访问：https://github.com/lukelu37217/ui-garden/actions"

echo "=== 3. Docker 部署演示 ==="
docker build -t lu_luke_coding_assignment13 .
docker run -d -p 8018:8018 --name lu_luke_coding_assignment13 lu_luke_coding_assignment13
echo "访问：http://localhost:8018"
```

---

## 关键展示点总结

### 对老师展示时强调：

1. **Pre-commit Hook** - 本地质量保证
   - 无法提交不合格代码
   - 自动格式化和修复

2. **GitHub Actions** - 云端质量保证  
   - 防止绕过本地检查
   - 自动化CI/CD管道

3. **Docker Deployment** - 生产部署
   - 容器化应用
   - 端口8018运行
   - 质量检查集成

**这三个组件一起确保了代码质量从开发到部署的全流程保证！** 🎯
