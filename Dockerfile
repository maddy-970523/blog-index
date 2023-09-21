# 使用 Node.js 作为基础镜像
FROM node:14-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制整个项目到工作目录
COPY . .

# 构建生产环境代码
RUN npm run build

# 设置容器启动命令
CMD [ "npm", "run", "dev" ]