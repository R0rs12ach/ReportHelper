# ReportHelper
写周报这种事儿还是写个Chrome插件自己搞吧，实在是太懒。懒，人类之精华。

## 概览
* 自动化周报方案设计
* 环境依赖
* 代码安装

## 自动化周报方案设计
> 周报的生成选用[python-docx](http://python-docx.readthedocs.io/en/latest/)这个python库，首先它直接支持生成docx文件，其次API较为精简，学习成本基本为0。  然后利用linux中的crontab设定一个定时程序，每个周五自动执行用`python-docx`开发的周报生成器。这其中还有一点需要强调，周报的内容并不是随机生成的，毕竟周报多多少少还会有人看，
自己做个内容库，随机抽肯定不行。所以还得开发一个todolist插件，每天的todolist内容会自动进入mongodb数据库，周五指定时间自动从数据库中读取然后写到word文档中，最后由linux脚本自动发送给指定的接收人即可。而使用的人只需要干一件事儿，定个todolist，平时跟踪一下自己的效率即可。

## 环境依赖
* 选用`centos7`作为系统环境
* 安装`lxml`(`python-docx`的基本依赖)
    * `lxml`的安装出错率非常高，请务必安装如下基本库`sudo yum install libxml2 libxml2 libxml2-devel libxml2-python libxslt libxslt-devel`
    * `yum install python-lxml`
    * 不用再去使用`pip install lxml`，因为执行过了上一步就相当于安装了`lxml`的python库
* 安装`python-docx`,使用`easy_install python-docx`即可完成安装
* 执行`python report_document.py`即可生成一个以docx为后缀的周报文档模板，可供用户酌情修改
* 需要配置`crond`，这样就可以直接使用CentOS自带的定时器在指定时间执行发送周报的脚本
* 执行`crontab -e`后，配置如下内容即可[注意：**其中的4表示周五，absolute_path需要用户自己填写**]
    ```
    SHELL=/bin/bash
    PATH=/etc:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin
    MAILTO=root
    20 17 * * 4 sh /absolute_path/email_auto_send.sh
    ``` 

## 代码安装
待续……
