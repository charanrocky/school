backend env PORT=5000
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=rocky
DB_NAME=schooldb


backend : npm install 
node server.js

frontend :

npm install
npm run dev
