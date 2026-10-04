# 本地家政服务平台

面向社区居民，提供保洁、保姆、月嫂等家政服务的在线预约与撮合平台。

## Docker Compose 快速启动

首次启动前复制环境变量文件：

```bash
cp .env.example .env
docker compose up -d
```

访问地址：

- 前端：http://localhost:28511
- 后端健康检查：http://localhost:29511/health
- API 示例：http://localhost:28511/api/overview

## 项目主要功能

- 阿姨/师傅档案与技能标签：录入家政服务人员信息（姓名、年龄、籍贯、工作经验），设置技能标签（保洁/做饭/育儿/老人护理），上传健康证和资质证书。
- 服务分类与预约时段：划分服务类型（日常保洁/深度保洁/保姆/月嫂/家电清洗），用户选择服务类型后查看可约阿姨和时段，在线下单预约。
- 订单管理与派单：用户下单后管理员根据服务类型、地址和阿姨档期进行派单，阿姨接单后上门服务，服务完成后用户确认验收并结算。
- 用户评价与信誉分：服务完成后用户对阿姨进行评分和文字评价，系统自动计算阿姨信誉分，高分阿姨优先推荐，差评触发管理员复核。
- 薪资结算与提现：记录阿姨每笔订单收入，支持按周/月汇总结算，阿姨可申请提现到银行卡，管理员审核后打款，全程留痕。

## 本地开发方式

前端：

```bash
cd frontend
npm install
npm run dev
```

后端：

```bash
cd backend
npm install
npm run dev
```

## 技术栈

| 分层 | 技术 |
| --- | --- |
| 前端 | React 18 + TypeScript、Ant Design、Vite |
| 后端 | NestJS + TypeScript |
| 数据库 | MySQL 8.0 |
| 认证 | JWT |
| 依赖 | TypeORM、class-validator |

## 项目目录结构

```text
.
├── backend/              # 后端服务
├── database/             # 数据库脚本
├── frontend/             # 前端应用
├── docker-compose.yml    # 一键部署编排
├── .env.example          # 环境变量示例
└── README.md
```

## 环境变量说明

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| COMPOSE_PROJECT_NAME | Compose 项目名，避免中文目录名导致项目名为空 | lphomecare |
| DB_NAME | 数据库名称 | app |
| DB_USER | 数据库用户 | app |
| DB_PASSWORD | 数据库密码 | app_pwd |
| DB_ROOT_PASSWORD | 数据库 root 密码 | root_pwd |
| JWT_SECRET | JWT 签名密钥 | change_me_to_a_long_random_string |
| FRONTEND_PORT | 前端宿主机端口 | 28511 |
| BACKEND_PORT | 后端宿主机端口 | 29511 |
| DB_PORT | 数据库宿主机端口 | 3306 |

## Docker 部署说明

- 使用 `docker compose up -d` 启动，不需要额外传入 `-p`。
- `docker-compose.yml` 顶层已声明 `name: lphomecare`，并且 `.env` 包含 `COMPOSE_PROJECT_NAME=lphomecare`，可在中文目录名下启动。
- 数据库数据保存在命名卷 `db_data` 中，不依赖当前目录名。
- 前端容器由 Nginx 托管静态资源，并把 `/api/` 反向代理到 `backend:29511`。
- 若本地端口冲突，可修改 `.env` 中的 `FRONTEND_PORT`、`BACKEND_PORT`、`DB_PORT`。

常用命令：

```bash
docker compose config --quiet
docker compose ps
docker compose down
```

## License

MIT
