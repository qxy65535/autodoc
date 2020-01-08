# 注意事项

## 关于自动文档生成脚本

自动文档生成脚本`main.py`所生成的静态页依赖于模板文件`template.html`和样式等资源文件夹`statics`，因此必须保证`statics`和`template.html`在同一目录下。生成文档后，它们会被拷贝到`dist`下，`template.html`重命名为`index.html`

服务器可将`dist/statics`和`index.html`放置于根目录下，直接访问`index.html`

生成`dist`中的`html`文件目录与输入`doc`中的`markdown`文件目录一致。由于页面内容通过`jquery`的`load`方法载入，因此必须通过服务器访问页面，否则产生跨域问题

## 关于样式

主页外观、样式可通过编辑`template.html`及`statics/style.css`更改，代码高亮样式可在`template.html`中修改以下内容进行选择。不同样式文件包含于`statics/styles`中

```html
<link rel="stylesheet" href="/statics/styles/github.css">
```

## 关于id和页内跳转

跳转到内部文档的某页，链接格式需写为

```markdown
[name](#/dir/doc_filename#id)
```

`pandoc`的锚点`id`默认是根据标题名字自动生成的，因此`id`为标题内容，若标题中包含空格，用`-`代替

若想使用自定义锚点`id`，`pandoc`语法为

```markdown
## 标题{#yourtitle}
```

此时请注意`id`的唯一性，否则可能造成跳转冲突

### 例子

[跳转到INTRODUCTION](#/0_introduction#introduction)

[跳转到文档生成的example](#/1_get_start/1_generate#example)

[跳转到本页的关于样式](#/1_get_start/2_note#关于样式)

[也可以不带锚点跳转到文档生成](#/1_get_start/1_generate)