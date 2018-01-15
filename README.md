# WX-game2048
微信小程序-2048

# 思路

>  定义二维数组，初始化row[i][j]，并给初始颜色

>  判断数组中哪些是空的，依次保存在 cells.push({x: i,y: j})中

>  通过Math.random() < 0.5 ? 2 : 4随机生成2或4；

>  将不同数字的颜色存储在bg数组中

>  根据X轴和Y轴的正负判断向哪里滑动

>  滑动时，如果数字前面的位置是空的，则交换位置，若不是空的，则判断是否相同数字，相同相加，不同不执行等

# 截图

![](https://github.com/Ercyao/WX-game2048/blob/master/2048.jpg)


# 最后

2048游戏只实现大概的功能，还有一些bug未解决，等有空时在修改

