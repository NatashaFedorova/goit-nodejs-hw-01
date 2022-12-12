# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list" Photo - './result/list.png'

# Отримуємо контакт по id

node index.js --action="get" --id=5 Photo - './result/getContactById.png'

# Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22" Photo -
'./result/addContact.png'

# Видаляємо контакт

node index.js --action="remove" --id=3 Photo - './result/removeContact.png'
