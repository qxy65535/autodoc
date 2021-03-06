# 样式演示

## Markdown的练习示例

### 目录  
1. 标题设置  
2. 块注释  
3. 斜体  
4. 粗体  
5. 无序列表  
6. 有序列表  
7. 链接（Links）  
8. 图片（Images）  
9. 代码（HTML中所谓的Code）  
10. 脚注（footnote）  
11. 下划线  
12. 段落换行问题  
13. 表单

### 1. 标题设置  
在Markdown当中设置标题，有两种方式：
第一种：通过在文字下方添加“=”和“-”，他们分别表示一级标题和二级标题。
第二种：在文字开头加上 “#”，通过“#”数量表示几级标题。（一共只有1~6级标题，1级标题字体最大）

一级标题
===
二级标题
-----  

```markdown
一级标题
===
二级标题
-----  
```

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 2. 块注释 

通过在文字开头添加“>”表示块注释。（当>和文字之间添加五个blank时，块注释的文字会有变化。） 

<blockquote>
<p>块引用</p>
</blockquote> 

```markdown
<blockquote>
<p>块引用</p>
</blockquote> 
```

> 内容1
> 内容2
> 内容3

> 内容一
>
> > 内容1
> > 
> > > 内容2
> > >
> > > > 内容3

```markdown
> 内容1
> 内容2
> 内容3

> 内容一
>
> > 内容1
> > 
> > > 内容2
> > >
> > > > 内容3
```

### 3. 斜体 
将需要设置为斜体的文字两端使用1个“*”或者“_”夹起来 

*斜体1* 
_斜体2_

```markdown
*斜体1* 
_斜体2_
```

### 4. 粗体 
将需要设置为斜体的文字两端使用2个“*”或者“_”夹起来 

**粗体1** 
__粗体2__

```markdown
**粗体1** 
__粗体2__
```

### 5. 无序列表 
在文字开头添加(*, +, -)实现无序列表。但是要注意在(*, +, -)和文字之间需要添加空格。（建议：一个文档中只是用一种无序列表的表示方式） 

* 内容1
* 内容2
    * aaa
        * bbb
* 内容3

```markdown
* 内容1
* 内容2
    * aaa
        * bbb
* 内容3
```

+ 内容1
+ 内容2
+ 内容3

```markdown
+ 内容1
+ 内容2
+ 内容3
```

- 内容1
- 内容2
- 内容3


```markdown
- 内容1
- 内容2
- 内容3
```


### 6. 有序列表  
使用数字后面跟上英文句号。（还要有空格）

1. abc
2. def
3. ghi

```markdown
1. abc
2. def
3. ghi
```

### 7. 链接（Links）  
Markdown中有两种方式，实现链接，分别为内联方式和引用方式。

内联方式：This is an example link to [baidu](http://baidu.com/).  
引用方式：
I get 10 times more traffic from [Google][1] than from [Yahoo][2] or [MSN][3].  

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"

```markdown
内联方式：This is an example link to [baidu](http://baidu.com/).  
引用方式：
I get 10 times more traffic from [Google][1] than from [Yahoo][2] or [MSN][3].  

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"
```

### 8. 图片（Images）  
图片的处理方式和链接的处理方式，非常的类似。  
内联方式： ![](assets/cloud_storage-1578543507538.png)
引用方式：
![本地图片][id]

[id]: http://qsaltedfish.cn/images/20180327232719104249.jpg "Title"

```markdown
内联方式： ![](assets/cloud_storage-1578543507538.png)
引用方式：
![本地图片][id]

[id]: http://qsaltedfish.cn/images/20180327232719104249.jpg "Title"
```

### 9. 代码（HTML中所谓的Code） 
实现方式有两种： 
第一种：简单文字出现一个代码框。使用\``<blockquote>`\`。（\`不是单引号而是左上角的ESC下面~中的\`） 

第二种：大片文字需要实现代码框。使用Tab和四个空格。

### 10. 脚注（footnote） 
实现方式如下：
hello[^hello]

[^hello]: hi

```markdown
hello[^hello]

[^hello]: hi
```

最下面会有个脚注，但目前不能点击脚注以及点击返回

### 11. 下划线  

在空白行下方添加三条“-”横线。（前面讲过在文字下方添加“-”，实现的2级标题）

### 12. 段落换行问题  
如果真的想要插入`<br />`标签，在行尾加上两个以上的空白，然后按 enter。

### 13. 表格
标题| 主要内容
-------|----------
关于Markdown | 简介Markdown，Markdown的优缺点
Markdown基础 | Markdown的**基本语法**，格式化文本、代码、列表、链接和图片、分割线、转义符等
Markdown表格和公式 | Markdown的**扩展语法**，表格、公式

```markdown
标题| 主要内容
-------|----------
关于Markdown | 简介Markdown，Markdown的优缺点
Markdown基础 | Markdown的**基本语法**，格式化文本、代码、列表、链接和图片、分割线、转义符等
Markdown表格和公式 | Markdown的**扩展语法**，表格、公式
```

*注：特殊字符会自动转换，如(&)在链接中连接参数，应该通过`&amp`重新转化成`&`，进行连接。还有很多类似的，如(<)=>`&lt`;都有可以能产生自动转化。*  
*本内容总结，有不正确的地方。请提出谢谢！*