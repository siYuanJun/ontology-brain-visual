# Ontology-Brain Visual · 视图层

本体工程师数字员工 **Harness 团队 + Skill 工程**的对外展示层，与源码层（`ontology-brain`）分离的独立仓库。**本层可开源**，源码层（流水线代码/领域配置）保持私有。

## 展示内容

| 页面 | 路径 | 内容 |
|------|------|------|
| Dashboard 首页 | `visual/index.html` | 双能力总览（Skill + Harness）+ KPI + 时间轴 |
| Skill 工程 | `visual/skill/index.html` | business-to-ontology 四步工作流 + 三步判定矩阵 + M2 双域实测 |
| Harness 团队分析 | `visual/harness/analysis.html` | 团队架构分析（7 角色 · M2 已验收 71.2/100 B） |
| Harness 升级路线 | `visual/harness/upgrade.html` | 7 → 9 角色升级蓝图 |
| 原始蓝图资产 | `legacy/` | 迁移前的独立 HTML 报告（存档） |

## 本地预览

```bash
# 直接浏览器打开
open index.html
# 或起本地服务
python3 -m http.server 8000 --directory .
# 访问 http://localhost:8000/
```

## GitHub Pages 部署

本仓库已配置 `.github/workflows/deploy-pages.yml`（GitHub Actions 部署，上传仓库根目录）：

1. 推送 `main` 分支到 GitHub
2. 仓库 Settings → Pages → Source 选 **GitHub Actions**
3. 等待 Workflow 执行，访问 `https://<user>.github.io/ontology-brain-visual/`

根目录 `index.html` 自动跳转 `./visual/index.html`（全站相对路径，子路径部署兼容）。

## 与源码层的关系

```
ontology-brain/          # 源码层（私有）：pipeline / core / profiles / docs / .claude
ontology-brain-visual/   # 视图层（本仓库，可开源）：visual/ 展示页 + legacy 蓝图资产
```

- 视图层只含静态展示资产，不含任何流水线代码与领域配置
- 展示数据（双域评测数字等）为快照，刷新需从源码层 `pipeline/output/*/eval_result.json` 手动同步
- 团队定义源：`skills/harness/ontology-brain-team/`（Skill 工程仓库）

## 目录结构

```
ontology-brain-visual/
├── index.html                 # 入口（跳转 visual/index.html）
├── visual/                    # 展示页
│   ├── index.html             # Dashboard
│   ├── skill/index.html       # Skill 工程
│   ├── harness/               # Harness 两页
│   │   ├── analysis.html
│   │   └── upgrade.html
│   └── assets/                # shared.css + navigation.js
├── legacy/                    # 原始蓝图 HTML（存档）
└── .github/workflows/         # Pages 部署
```
