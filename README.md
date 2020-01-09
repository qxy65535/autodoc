# INTRODUCTION
这是一个markdown文档自动生产html静态页的工具

# 准备

## need list

1. python(>=3)
2. BeautifulSoup(>=4)
3. pandoc

## Autodoc目录结构

`styles`：生成的html静态页需要的图片、样式和js

`main.py`：自动文档生成脚本

`template.html`：主页模板，可在header、footer标签中修改页首页脚内容

# 文档生成

## 使用方法
```bash
qxy@ubuntu:~/autodoc$ python3 main.py -h
usage: main.py [-h] [-doc DOC] [-dist DIST]

optional arguments:
  -h, --help            show this help message and exit
  -doc DOC, --doc-dir DOC
                        input dir for markdowns, default: $(pwd)/doc
  -dist DIST, --dist-dir DIST
                        output dist for htmls, default: $(pwd)/dist
```
## example

```bash
qxy@ubuntu:~/autodoc$ python3 main.py -doc example/doc/ -dist example/dist/
```

[演示地址](https://qxy65535.github.io/autodoc-demo/)