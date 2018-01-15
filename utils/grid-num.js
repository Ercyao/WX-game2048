

var n=4;
var bg = ['#b6a99b', '#eee4da', '#f0e0c9', '#f2b179', '#f69463', '#f57c5f', '#f85e3c', '#edce71']; 

function AllGrid() {      // 全部格子
  var row = [];
  for (var i = 0; i < n; i++) {
    row[i] = [];
    for (var j = 0; j < n; j++) {
      row[i][j] = ({id:i+"-"+j, num: 0, color: '#b6a99b' });
    }
  }
}
function EmptyGrid() {    // 空白格子
  var cells = [];
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (row[i][j].num == 0) {
        cells.push({ x: i, y: j });
      }
    }
  }
}
function RandomGrid() {     // 随机
  if (cells.length) {
    if (cells) {
      var cell = cells[Math.floor(Math.random() * cells.length)];  //随机格子
      var x = cell.x, y = cell.y;
      var value = Math.random() < 0.5 ? 2 : 4;                 //随机数
      row[x][y].num = value;                      //在随机位置显示随机数字
    }
  }
}
function AddColor() {     // 添加颜色
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var num = row[i][j].num;
      var color = row[i][j].color;
      if (num == Math.pow(2, 1)) {
        color = bg[1];
      } else if (num == 4) {
        color = bg[2];
      } else if (num == 8) {
        color = bg[3];
      } else if (num == 16) {
        color = bg[4];
      } else if (num == 32) {
        color = bg[5];
      } else if (num == 64) {
        color = bg[6];
      } else if (num == 128) {
        color = bg[7];
      }else {
        color = bg[0]
      }
    }
  }
}

function LeftNum() {       // 左移
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (row[i][j].num != 0) {
        for (var k = 0; k < j; k++) {
          if (row[i][k].num == 0) {
            row[i][k].num = row[i][j].num;
            row[i][j].num = 0;
          } else if (row[i][k].num == row[i][j].num) {
            if (j - k == 1) {
            row[i][k].num += row[i][j].num;
            row[i][j].num = 0;
            } else {
              for (var z = k + 1; z < j; z++) {
                if (row[i][z].num == 0) {
                  row[i][z].num = row[i][j].num;
                  row[i][j].num = 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
function RightNum() {       // 右移
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (row[i][j].num != 0) {
        for (var k = (n - 1); k > j; k--) {
          if (row[i][k].num == 0) {
            row[i][k].num = row[i][j].num;
            row[i][j].num = 0;
          } else if (row[i][k].num == row[i][j].num) {
            if (j - k == -1) {
              row[i][k].num += row[i][j].num;
              row[i][j].num = 0;
            } else {
              for (var z = k - 1; z > j; z--) {
                if (row[i][z].num == 0) {
                  row[i][z].num = row[i][j].num;
                  row[i][j].num = 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
function TopNum() {       // 上移
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (row[i][j].num != 0) {
        for (var k = 0; k < i; k++) {
          if (row[k][j].num == 0) {
            row[k][j].num = row[i][j].num;
            row[i][j].num = 0;
          }
          else if (row[k][j].num == row[i][j].num) {
            if (i - k == 1) {
              row[k][j].num += row[i][j].num;
              row[i][j].num = 0;
            } else {
              for (var z = k + 1; z < i; z++) {
                if (row[z][j].num == 0) {
                  row[z][j].num = row[i][j].num;
                  row[i][j].num = 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
function BottomNum() {       // 下移
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (row[i][j].num != 0) {
        for (var k = (n - 1); k > i; k--) {
          if (row[k][j].num == 0) {
            row[k][j].num = row[i][j].num;
            row[i][j].num = 0;
          }
          else if (row[k][j].num == row[i][j].num) {
            if (i - k == -1) {
              row[k][j].num += row[i][j].num;
              row[i][j].num = 0;
            } else {
              for (var z = k - 1; z > i; z--) {
                if (row[z][j].num == 0) {
                  row[z][j].num = row[i][j].num;
                  row[i][j].num = 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
