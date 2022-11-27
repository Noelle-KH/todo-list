# Todo List
一個簡單的代辦事項清單(網站佈署於[Heroku](https://sleepy-brook-95156.herokuapp.com/))

<img src="./public/images/preview.png">

## 功能
* 可以新增、瀏覽、修改及刪除代辦事項
* 可由修改頁面勾選完成事項，並於頁面同步更新
* 點擊刪除會跳出提示小視窗

## 開始使用
1. 請先確認已安裝 node.js 與 npm (版本請見下方開發工具)
2. 經由終端機clone或下載本專案至本地資料夾
  ```
  https://github.com/Noelle-KH/todo-list.git
  ```
3. 於終端機進入存放本專案的資料夾
  ```
  cd todo-list
  ```
4. 安裝 npm 套件
  ```
  npm install
  ```

5. 新增```.env```檔案，並設置資料庫連線字串
  ```
  MONGODB_URL=mongodb+srv://<account>:<password>@cluster0.<xxxxx>.mongodb.net/<table>?retryWrites=true&w=majority
  ```
6. 啟動專案前，可以建立種子資料，如在終端機中成功看到done，即表示種子資料建立成功(可略過步驟)
  ```
  npm run seed
  ```
7. 欲啟動專案，請繼續輸入
  ```
  npm run dev
  ```
8. 若在終端機看到下方訊息代表順利運行，於瀏覽器中輸入該網址([http://localhost:3000](http://localhost:3000))即可開始使用本網站
  ```
  Listening on http://localhost:3000
  ```
9. 如需暫停使用，請於終端機內按下ctrl + c，即可結束


## 開發工具
* Node.js 16.17.1
* Express 4.18.2
* Express-Handlebars 6.0.6
* Mongoose 6.7.2
* dotenv 16.0.3
* Bootstrap 5.1.3