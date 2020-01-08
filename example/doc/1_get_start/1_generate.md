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

