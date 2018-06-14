## 第一次開發

### 確認已安裝 node.js


### 安裝 react開發工具
打開命令提示字元
```
npm install -g create-react-app
```

### 建立版本管理到github建立一個新的倉庫
到github建立一個新的倉庫
作 init, 或直接 clone 空白的倉庫
```
git clone 倉庫路徑 目的資料夾
```
例如：
```
git clone https://github.com/FilitovDemo/test2018react.git
```

### 產生 react 程式
```
create-react-app 程式名稱(資料夾名字)
```
例如：
```
create-react-app test2018react
```

### 開發測試
進入剛剛建立的資料夾
```
cd test2018react
```
啟動開發畫面
```
npm start
```

### 開發

### 推回github版本管理

```
git config user.name "編輯者名稱"
git config user.email "電子郵件"
git status
git add .
git commit -m "修改內容"
git push
```

## 第二次以後開發

### 取回前次開發版本
```
git clone 倉庫路徑 目的資料夾
```
例如：
```
git clone https://github.com/FilitovDemo/test2018react.git
```

### 安裝必要套件

打開命令提示字元，進入剛剛建立的資料夾
```
cd test2018react
```

如果沒有安裝 react, 安裝他
```
npm install -g create-react-app
```

安裝必要套件
```
npm install
```

### 開發測試

啟動開發畫面
```
npm start
```

### 開發

### 推回github版本管理

```
git config user.name "編輯者名稱"
git config user.email "電子郵件"
git status
git add .
git commit -m "修改內容"
git push
```

