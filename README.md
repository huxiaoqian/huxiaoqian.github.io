# 胡晓倩个人学术主页

这是一个受 [al-folio](https://github.com/alshedivat/al-folio) 启发、面向 GitHub Pages 的轻量学术主页。页面内容来自首都经济贸易大学管理工程学院的公开教师主页，采用数据与样式分离的结构，便于后续维护。

## 修改内容

个人资料、经历、项目、论文和荣誉均在 [`_data/profile.yml`](./_data/profile.yml) 中。没有公开信息的字段已经保留为空字符串或空列表，页面不会显示空字段。

- 替换头像：覆盖 `assets/images/profile.jpeg`
- 修改文字：编辑 `_data/profile.yml`
- 修改配色和版式：编辑 `assets/css/main.css`
- 添加 DOI：在相应论文的 `doi` 字段中填入完整链接
- 添加学术链接：在 `links` 中补充 Google Scholar、ORCID、GitHub 或简历地址

## 发布到 GitHub Pages

1. 在 GitHub 新建一个空仓库。用户主页可命名为 `你的用户名.github.io`；项目主页也可使用其他名称。
2. 将本仓库添加为远程并推送 `main` 分支。
3. 在仓库 **Settings → Pages → Build and deployment** 中把 Source 设为 **GitHub Actions**。
4. 等待 `Deploy Jekyll site to Pages` 工作流完成。

示例命令：

```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

## 本地预览

安装 Jekyll 后，在仓库目录运行：

```bash
bundle exec jekyll serve
```

也可以直接推送到 GitHub，使用仓库自带的 Pages 工作流构建。

## License

站点代码采用 MIT License。个人照片与履历信息不在代码许可范围内。
