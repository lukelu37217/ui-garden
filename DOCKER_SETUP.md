# Docker Setup Guide for Assignment 13

## 1. 安装 Docker Desktop

### 下载和安装
1. 访问 [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
2. 下载 Docker Desktop for Windows
3. 运行安装程序并按照提示完成安装
4. 重启计算机（如果需要）
5. 启动 Docker Desktop

### 验证安装
打开PowerShell并运行：
```powershell
docker --version
docker-compose --version
```

## 2. 构建和运行项目

### 构建Docker镜像
```powershell
cd "c:\Users\82692\Desktop\lu_luke_coding_assignment13\ui-garden"
docker build -t lu_luke_coding_assignment13 .
```

### 运行容器
```powershell
docker run -d -p 8018:8018 --name lu_luke_coding_assignment13 lu_luke_coding_assignment13
```

### 验证运行
访问: http://localhost:8018 或 http://127.0.0.1:8018

### 查看运行状态
```powershell
docker ps
docker logs Lu_Luke_coding_assignment13
```

### 停止和清理
```powershell
docker stop lu_luke_coding_assignment13
docker rm lu_luke_coding_assignment13
```

## 3. 演示准备

### 演示流程建议：
1. 展示代码质量工具配置
2. 演示pre-commit hooks工作
3. 展示GitHub Actions CI/CD
4. 构建和运行Docker容器
5. 访问localhost:8018展示应用

### 演示命令脚本
```powershell
# 1. 检查代码质量
npm run lint
npm run format:check
npm run test:ci

# 2. 构建Docker
docker build -t lu_luke_coding_assignment13 .

# 3. 运行容器
docker run -d -p 8018:8018 --name lu_luke_coding_assignment13 lu_luke_coding_assignment13

# 4. 验证运行
curl http://localhost:8018
# 或在浏览器中访问 http://localhost:8018
```
