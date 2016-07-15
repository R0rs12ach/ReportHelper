#! /bin/bash
SENDDATE=`date +%Y%m%d`R0rs12ach工作周报
# 如果你使用crontab，那么请像如下这样配置绝对路径
/usr/bin/python /absolute_path/report_document.py
# 如果你只是单纯使用自动邮件发送脚本，不依赖定时器，那么请使用相对路径
# /usr/bin/python report_document.py

# 注意配置下面的邮件地址为你想要发送和抄送的地址
# -c 后面跟的是接收方的邮件地址
# -a attachment附件
# chaosong@xx.com 是你想抄送的邮箱地址
# email_content.txt 是你邮件的内容
# 如果你使用的是crontab，下面需要填写的是绝对路径
/bin/mail -s "邮件主题 - $SENDDATE" -c "target@xx.com" -a /absolute_path/R0rs12ach的工作周报.docx chaosong@xx.com < /absolute_path/email_content.txt
# 如果你只是想利用当前脚本发送一个带有附件的邮件，那么直接填相对路径即可
# /bin/mail -s "邮件主题 - $SENDDATE" -c "target@xx.com" -a R0rs12ach的工作周报.docx chaosong@xx.com < email_content.txt