# ReportHelper
写周报这种事儿还是写个Chrome插件自己搞吧，实在是太懒。懒，人类之精华。

## 概览
* 自动化周报方案设计
* 环境依赖
* 代码安装

## 自动化周报方案设计
> 周报的生成选用[python-docx](http://python-docx.readthedocs.io/en/latest/)这个python库，首先它直接支持生成docx文件，其次API较为精简，学习成本基本为0。  然后利用linux中的crontab设定一个定时程序，每个周五自动执行用`python-docx`开发的周报生成器。这其中还有一点需要强调，周报的内容并不是随机生成的，毕竟周报多多少少还会有人看，
自己做个内容库，随机抽肯定不行。所以还得开发一个todolist插件，每天的todolist内容会自动进入mongodb数据库，周五指定时间自动从数据库中读取然后写到word文档中，最后由linux脚本自动发送给指定的接收人即可。而使用的人只需要干一件事儿，定个todolist，平时跟踪一下自己的效率即可。

```flow
st=>start: Start
e=>end
op=>operation: My Operation
cond=>condition: Yes or No?

st->op->cond
cond(yes)->e
cond(no)->op
```
