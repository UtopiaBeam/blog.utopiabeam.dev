---
title: Wow!
description: Such doge!
date: "2000-04-30"
banner: ./banner.jpg
featured: false
---

Wow! such doge!

| test | test |
|------|------|
| test | test |

```python
# 10_P11
def same_row(i, j) :     return (i//9 == j//9)
def same_col(i, j) :     return (i-j) % 9 == 0
def same_block(i, j) :   return (i//27 == j//27 and i%9//3 == j%9//3)
def show(board) :
    for i in range(3) :
        print('+---+---+---+')
        for j in range(3) :
            k = 9*(3*i+j)
            print('|' + board[k:k+3] + '|' + board[k+3:k+6] + '|' + board[k+6:k+9] + '|')
    print('+---+---+---+')
def solve(board) :
    idx = board.find('.')
    if idx < 0 :        return board
    T = set('123456789') - set(board[i] for i in range(len(board)) \
        if same_block(idx, i) or same_row(idx, i) or same_col(idx, i))
    for e in T :
        newboard = board[:idx] + e + board[idx+1:]
        sol = solve(newboard)
        if sol :        return sol
    return ''
sol = solve(input().strip())
show(sol)
```