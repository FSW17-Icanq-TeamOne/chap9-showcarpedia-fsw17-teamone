# chap9-showcarpedia-fsw17-teamone
Showcarpedia is Car Showroom Website by TeamOne FSW17 Binar Academy

# Showcarpedia DB Initialization 
1. First, install our package 'yarn install'
2. Jangan lupa untuk create database terlebih dahulu di postgre masing-masing
3. Silahkan login ke masing-masing postgre di cmd dengan cara ' psql -U "postgres" ' lalu sertakan dengan password masing-masing komputer kalian
4. Bikin database showcarpedia 'CREATE DATABASE "showcarpedia";'
5. Setelah database dibuat, silahkan migrate table table yang sudah disediakan 'npx sequelize-cli db:migrate'
6. Table sudah terbuat, silahkan di cek melalui cmd masing-masing dengan cara '\c showcarpedia' lalu 'SELECT * FROM "Users";'
7. Lalu silahkan isi table tersebut dengan fitur seeders satu per satu dulu karena terdapat relasi antar user dengan profile

    a. Isi seed pertama dengan 'npx sequelize-cli db:seed --seed user.js'
    
    b. Lalu seed kedua dengan 'npx sequelize-cli db:seed --seed profile.js'
    
    c. Lalu seed ketiga dengan 'npx sequelize-cli db:seed --seed about.js'
    
    d. Lalu seed kelima dengan 'npx sequelize-cli db:seed --seed category.js'
    
    e. Lalu seed keenam dengan 'npx sequelize-cli db:seed --seed product.js'
    
    f. Lalu seed ketujuh dengan 'npx sequelize-cli db:seed --seed wishlist.js'
    
    Jangan dulu pake 'db:seed:all' ya
Nanti akan diupdate kembali. Soon!
