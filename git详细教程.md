## git详细教程

> workSpace 工作区
>
> index/Stage 暂存区
>
> repository 本地仓库
>
> remote 远程仓库



> git add .  -->从工作区 ---> 暂存区

> git commit -m ''   --->从暂存区---->本地仓库

> git push  ---> 从本地仓库  --- > 远程仓库

> git pull --->从远程仓库--->工作区(下拉)

>1.git status  查看当前状态 
>
>> 出现    **modified:   aaa.txt** 说明 为提交到本地仓库
>
>2.git diff readme.txt  查看文件具体修改了哪些内容
>
>3.git log 查看提交的历史记录
>
>4.git log --pretty=oneline 查看提交的历史记录
>
>5.git reset --hard HEAD^ 回退上一个版本
>
>6.git reset --hard HEAD^^ 回退上两个版本
>
>7.git reset --hard HEAD^^^ 回退上三个版本
>
>8.git reset --hard HEAD~100 回退100个版本(两种方式都行)
>
>9.cat 文件名   进入文件  
>
>10. git checkout -- aaa.txt     把aaa.txt文件在工作区做的修改全部撤销
>
>    **注意:** 
>
>    ​		区分: git checkout --    撤销
>
>    ​					git checkout   创建分支
>
>11. rm aaa.txt  删除文件-------慎重使用
>
>12. 合并分支  
>
>    > 在master分支合并   git merge dev
>
>13. git push origin dev(指定分支) 
>
>    ​	若有冲突,先git pull 再提交 ,若还有冲突,手动解决再提交
>
>14. git pull 

> 1. 安装git
>
> 2. 配密钥 //因为Git是分布式版本控制系统，所以需要填写用户名和邮箱作为一个标识
>
>    > git config --global user.name  'myname'
>    >
>    > git config --global user.email  '12346@qq.com'
>    >
>    > git config --list 查看配置
>
>    > cd ~/.ssh
>    >
>    > ssh-keygen -t rsa -C '123456@qq.com'
>    >
>    > 按几次回车
>    >
>    > 在C盘/用户/cy/.ssh 下找到刚生成的id_rsa_pub(公钥),打开并复制
>    >
>    > 打开github,找到New SSH key    放进去即可
>
>    > 测试是否链接成功:
>    >
>    > ​	在bash命令下输入: ssh -T git@github.com 
>    >
>    > ​	yes
>    >
>    > 如果成功了,在刚刚的目录下会多一个known_hosts文件

