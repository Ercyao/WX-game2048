//index.js
//获取应用实例
const app = getApp()
var bg = ['#b6a99b', '#eee4da', '#f0e0c9', '#f2b179', '#f69463', '#f57c5f', '#f85e3c', '#edce71']; 

Page({
  data: {
    curnum:'0',
    color:'',
    numdata:[],
    cells: [],
    userInfo: {},
    hasUserInfo: false,
    // 游戏触摸控制
    gameTouchInfo: {
      pointOrigin: {
        x: 0,
        y: 0
      },
      pointTarget: {
        x: 0,
        y: 0
      },
      isValid: false
    },
    touchStartClienX: 0,
    touchStartClientY: 0,
    touchEndClientX: 0,
    touchEndClientY: 0,
    isMultiple: false, 
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  startGame: function(){
    wx.navigateTo({
      url: '../game/game'
    })
  },
  touchStart: function (events) {
    // 多指操作
    this.isMultiple = events.touches.length > 1;
    if (this.isMultiple) {
      return;
    }
    var touch = events.touches[0];
    this.touchStartClientX = touch.clientX;
    this.touchStartClientY = touch.clientY;
  },

  touchMove: function (events) {
    var touch = events.touches[0];
    this.touchEndClientX = touch.clientX;
    this.touchEndClientY = touch.clientY;
  },

  touchEnd: function (events) {
 
    var tx = this.touchStartClientX - this.touchEndClientX ; 
    var ty = this.touchStartClientY - this.touchEndClientY;

    var cells = this.data.cells;
    var row = this.data.numdata;
    var color;
    var n = 4;
    var move = 135 ;
    var curnum, moveLeft;
    console.log(66,move)
    //向左滑动
    if (Math.abs(tx) > Math.abs(ty)) {
    if (tx > 0){
    for (var i = 0; i < n; i++){
      for (var j = 0; j < n; j++) {       
        if (row[i][j].num != 0) {
          for (var k = 0; k < j; k++ ) {
              if (row[i][k].num == 0) {
              row[i][k].num = row[i][j].num;
              row[i][j].num = 0;
            }
              else if (row[i][k].num == row[i][j].num ) {
                if(j-k==1){
                  row[i][k].num += row[i][j].num;
                  row[i][j].num = 0;
                  curnum = row[i][k].id;
                } else {
                  for (var z = k + 1; z < j; z++) {
                    if (row[i][z].num == 0){
                      row[i][z].num = row[i][j].num;
                      row[i][j].num = 0;
                      // curnum = row[i][z].id;
                    }
                  }
                }
              }
            }
        }
      }
    }
  }else if (tx < 0){
      //向右滑动
    for (var i = 0; i < n; i++){
      for (var j = 0; j < n; j++) {    
          if (row[i][j].num != 0) {
            for (var k = (n-1); k > j; k--) {
              if (row[i][k].num == 0) {
                row[i][k].num = row[i][j].num;
                row[i][j].num = 0;
                console.log(12, k)
              }
              else if (row[i][k].num == row[i][j].num) {
                if (j - k == -1) {
                  row[i][k].num += row[i][j].num;
                  row[i][j].num = 0;
                  curnum = row[i][k].id;
                } else {
                  for (var z = k - 1; z > j; z--) {
                    if (row[i][z].num == 0) {
                      row[i][z].num = row[i][j].num;
                      row[i][j].num = 0;
                      console.log(56, z)
                    }
                  }
                }
              }
              }
            }
          }
        }
    }
    } else {
      if (ty > 0){ 
      //向上滑动
      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          if (row[i][j].num != 0) {
            for (var k = 0; k < i; k++) {
              if (row[k][j].num == 0) {
                row[k][j].num = row[i][j].num;
                row[i][j].num = 0;
                
                console.log(11, k, i, j)
              }
              else if (row[k][j].num == row[i][j].num) {
                if (i - k == 1) {
                  row[k][j].num += row[i][j].num;
                  row[i][j].num = 0;
                  curnum = row[k][j].id;
                  
                } else {
                  for (var z = k + 1; z < i; z++) {
                    if (row[z][j].num == 0) {
                      row[z][j].num = row[i][j].num;
                      row[i][j].num = 0;
                      curnum = row[z][j].id;
                      console.log(56, z)
                    }
                  }
                }
                console.log(22, k, i, j)
              }
            }
          }
          }
        }
      } else if (ty < 0){
        //向下滑动
        for (var i = 0; i < n; i++) {
          for (var j = 0; j < n; j++) {
            if (row[i][j].num != 0) {
              for (var k = (n-1); k > i; k--) {
                if (row[k][j].num == 0) {
                  row[k][j].num = row[i][j].num;
                  row[i][j].num = 0;

                  console.log(11, k, i, j)
                }
                else if (row[k][j].num == row[i][j].num) {
                  if (i - k == -1) {
                    row[k][j].num += row[i][j].num;
                    row[i][j].num = 0;
                    curnum = row[k][j].id;
                  } else {
                    for (var z = k - 1; z > i; z--) {
                      if (row[z][j].num == 0) {
                        row[z][j].num = row[i][j].num;
                        row[i][j].num = 0;
                        curnum = row[z][j].id;
                        console.log(56, z)
                      }
                    }
                  }
                  console.log(22, k, i, j)
                }
              }
            }
          }
        }

      }
    }
    cells = [];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        // 当前格子无内容
        // cells = [];
        if (row[i][j].num == 0) {
          cells.push({ x: i, y: j });
        }
      }
    }
    // console.log(44, row, cells)
    // 随机填充2或4
    if (cells.length) {
      if (cells) {
        var value = Math.random() < 0.5 ? 2 : 4;
        var cell = cells[Math.floor(Math.random() * cells.length)];
        var x = cell.x;
        var y = cell.y;
        row[x][y].num = value
      }
    }else{
      console.log("game over!")
    }
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
    if (row[i][j].num == 2) {
      row[i][j].color = bg[1];
    } else if (row[i][j].num == 4) {
      row[i][j].color = bg[2];
    } else if (row[i][j].num == 8) {
      row[i][j].color = bg[3];
    } else if (row[i][j].num == 16) {
      row[i][j].color = bg[4];
    } else if (row[i][j].num == 32) {
      row[i][j].color = bg[5];
    } else if (row[i][j].num == 64) {
      row[i][j].color = bg[6];
    }else {
      row[i][j].color = bg[0];
    }
    }
  }
    this.setData({
      "numdata": row,
      "color":color,
      "curnum": curnum,
      "moveLeft": moveLeft
    })

  },
  onLoad: function () {
    var row = [], cells = [], color;
    for (var i = 0; i < 4; i++) {
      row[i] = [];
      for (var j = 0; j < 4; j++) {
        row[i][j] = ({id:i+"-"+j, num: 0, color:'#b6a99b'});
        // 当前格子无内容
        if (row[i][j].num == 0) {
          cells.push({x: i,y: j});
        }
      }
    } 
    console.log(33, row)
    for(var k=0;k<3;k++){
      if (cells.length) {
        if (cells) {
          var value = Math.random() < 0.9 ? 2 : 4;
          var cell = cells[Math.floor(Math.random() * cells.length)];
          var x = cell.x;
          var y = cell.y;
          row[x][y].num = value
          if (value == 2) {
            row[x][y].color = bg[1];
          } else if (value == 4){
            row[x][y].color = bg[2];
          }else{
            row[x][y].color = bg[0]
          }
        }
      }
    }
    this.setData({
      "numdata": row,
      "cells": cells,
      "color": color
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
