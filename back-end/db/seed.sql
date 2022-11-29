\c dev_smak;

INSERT INTO users (
  firstname, lastname, address, city, state, zip, phonenumber, username, password, gary_points, avatar, is_active, role
) 
VALUES 
(
  'Andres','Varon','777 Broadway Av Suite 7','New York','New York','11372',9179993311,'anvaron@gmail.com','051801',0,null,true,1
),
(
  'Veronica','Perez','231 Gary Street','Elmhurst','New York','11372',5164729482,'veroperez@gmail.com','123456',0,null,true,2
),
(
  'Mike','Perez','237 Gary Street','Elmhurst','New York','11372',5162229482,'mikeperez@gmail.com','429njs2k',0,null,true,2
);


INSERT INTO orders (restaurant_id, date, delivery_address, total_cost, userid) VALUES ('CaboRVC', '2022-11-11', '231 Gary Street Elmhurst New York 11372', 7500, 1),('CaboRVC', '2022-11-12', '231 Gary Street Elmhurst New York 11372', 10000, 2), ('PioPio', '2022-11-20', '200 West 44th Street, Hells Kitchen New York 10010', 100, 1);

INSERT INTO reviews (userid, orderid, rating, content, img_url, date) VALUES (1, 1, 5, 'Those enchiladas hit the spot so good, how did they know?  Im just blown away', 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/3/de/3de25464-fc61-11ea-bad1-4f7f5411be85/5f6935d287a6c.image.jpg', '2022-11-11'), (2, 2, 5, 'These tongue tacos are the best i never had. Wow wow wow', 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/3/de/3de25464-fc61-11ea-bad1-4f7f5411be85/5f6935d287a6c.image.jpg', '2022-11-12'),
(1,3,5, 'First time trying Peruvian food and I cannot wait to go back.', 'https://gradfood.com/wp-content/uploads/2022/04/Lomo-Saltado-2-scaled.jpg','2022-11-20');


INSERT INTO menus (cuisine) VALUES ('mediterranean'),('italian'),('spanish'),('french'),('vietnamese'),('american'),('korean'),('mexican'),('japanese'),('other'),('indian'),('greek'),('lebanese'),('turkish'),('thai'),('chinese');


INSERT INTO plates (menuid, dish_type, name) VALUES (1, 'entree', 'Baked Chicken Thighs'),(1, 'entree', 'Garlic Mushroom Pasta'),(1, 'entree', 'Shrimp Scampi'),(1,'entree', 'Roast Lamb Rack'),(1, 'entree', 'Mediterranean fish soup'),(1,'appetizers', 'Vegetarian Mezze Platter'),(1,'appetizers', '7-Layer Mediterranean Dip'),(1,'appetizers', 'Mediterranean Tomato Bites'),(1,'desserts', 'Crema Catalana'),(1,'desserts', 'Tiramisu'),(1,'desserts', 'Kremna Rezina'),

(2, 'entree', 'Mushroom Carbonara'),(2, 'entree', 'Spaghetti and Meatballs'),(2, 'entree', 'Margherita Pizza Beans'),(2,'entree', 'Sausage and Broccoli Rabe Frittata'),(2, 'entree', 'Eggplant Parmesan'),(2,'appetizers', 'Arancini'),(2,'appetizers', 'Herbed Chickpea Bruschetta'),(2,'appetizers', 'Focaccia col Formaggio'),(2,'desserts', 'Chocolate Ganache Tart'),(2,'desserts', 'Pizzettes'),(2,'desserts', 'Raspberry Jam Bomboloni'),

(3, 'entree', 'Bacalao'),(3, 'entree', 'Gazpacho'),(3, 'entree', 'Spanish Paella'),(3,'entree', 'Empanadas'),(3, 'entree', 'Migas'),(3,'appetizers', 'Spanish Potato Salad'),(3,'appetizers', 'Patatas Bravas'),(3,'appetizers', 'Spanish Tortilla'),(3,'desserts', 'Tarta De Santiago'),(3,'desserts', 'Panellets'),(3,'desserts', 'Buñuelos'),

(4, 'entree', 'Chicken confit'),(4, 'entree', 'French onion soup'),(4, 'entree', 'Boeuf bourguignon'),(4,'entree', 'Salmon en papillote'),(4, 'entree', 'Quiche Lorraine'),(4,'appetizers', 'Shrimp Canapés'),(4,'appetizers', 'Ficelle Picarde'),(4,'appetizers', 'Escargots'),(4,'desserts', 'Chocolate Soufflés'),(4,'desserts', 'Crêpes'),(4,'desserts', 'Macarons'),

(5, 'entree', 'Phở'),(5, 'entree', 'Bánh mì'),(5, 'entree', 'Bánh cuốn'),(5,'entree', 'Bún chả'),(5, 'entree', 'Ga nuong'),(5,'appetizers', 'Spring Rolls'),(5,'appetizers', 'Scallion Pancakes'),(5,'appetizers', 'Canh Soup'),(5,'desserts', 'Vietnamese Sweet Corn Pudding'),(5,'desserts', 'Banana Tapioca'),(5,'desserts', 'Sesame Balls'),

(6, 'entree', 'Cheeseburger'),(6, 'entree', 'Buffalo wings'),(6, 'entree', 'Chicken fried steak'),(6,'entree', 'Macaroni and cheese'),(6, 'entree', 'Barbecue ribs'),(6,'appetizers', 'Nachos'),(6,'appetizers', 'Potato chips'),(6,'appetizers', 'Tater tots'),(6,'desserts', 'Chocolate-chip cookies'),(6,'desserts', 'Banana split'),(6,'desserts', 'Apple pie'),

(7, 'entree', 'Bibimbap'),(7, 'entree', 'Bulgogi'),(7, 'entree', 'Korean fried chicken'),(7,'entree', 'Manduguk'),(7, 'entree', 'Japchae'),(7,'appetizers', 'Pajeon (Korean Savory Pancakes)'),(7,'appetizers', 'Kimchi'),(7,'appetizers', 'Korean stew (jjigae)'),(7,'desserts', 'Red rice cakes'),(7,'desserts', 'Korean Shaved Ice'),(7,'desserts', 'Sponge Candy');

(8, 'entree', 'Fish Tacos with Lime Crema'),(8, 'entree', 'Chicken Enchiladas'),(8, 'entree', 'Skillet Chicken Fajitas'),(8,'entree', 'Quesadillas'),(8, 'entree', 'Beef and Bean Burritos'),(8,'appetizers', 'Chips and Guacamole'),(8,'appetizers', 'Salsa'),(8,'appetizers', 'Taquitos'),(8,'desserts', 'Churros'),(8,'desserts', 'Fried Ice Cream'),(8,'desserts', 'Sopapillas')

(9, 'entree', 'Sushi'),(9, 'entree', 'Ramen'),(9, 'entree', 'Unagi - Grilled Eel'),(9,'entree', 'Shrimp Tempura'),(9, 'entree', 'Soba'),(9,'appetizers', 'Onigiri'),(9,'appetizers', 'Yakitori'),(9,'appetizers', 'Miso Soup'),(9,'desserts', 'Dorayaki (Japanese Red Bean Pancake)'),(9,'desserts', 'Mochi'),(9,'desserts', 'Dango')

(10, 'entree', 'Chicken parmigiana'),(10, 'entree', 'Barramundi'),(10, 'entree', 'Aussie Burger'),(10,'entree', 'Aussie Steak Sandwich'),(10, 'entree', 'Meatloaf'),(10,'appetizers', 'Meat pies'),(10,'appetizers', 'Bruschetta'),(10,'appetizers', 'French Fries'),(10,'desserts', 'Lamingtons'),(10,'desserts', 'Milo Balls'),(10,'desserts', 'Pavlova');