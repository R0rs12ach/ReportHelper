#! /bin/bash
SENDDATE=`date +%Y%m%d`彭岁万工作周报
echo $SENDDATE
/usr/bin/python /root/peakmonkey/auto_report/doc.py
/bin/mail -s "邮件主题 - $SENDDATE" -c "pengsuiwan@daowoo.com" -a /root/peakmonkey/auto_report/彭岁万的工作周报.docx ued@daowoo.com < /root/peakmonkey/auto_report/content.txt
