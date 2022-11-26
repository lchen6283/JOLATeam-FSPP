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


INSERT INTO orders (restaurant_id, date, delivery_address, total_cost, userid) VALUES ('CaboRVC', '2022-11-11', '231 Gary Street Elmhurst New York 11372', 7500, 1),('CaboRVC', '2022-11-12', '231 Gary Street Elmhurst New York 11372', 10000, 2);

INSERT INTO reviews (userid, orderid, rating, content, img_url, date) VALUES (1, 1, 5, 'Those enchiladas hit the spot so good, how did they know?  Im just blown away', 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/3/de/3de25464-fc61-11ea-bad1-4f7f5411be85/5f6935d287a6c.image.jpg', '2022-11-11'), (2, 2, 5, 'These tongue tacos are the best i never had. Wow wow wow', 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/3/de/3de25464-fc61-11ea-bad1-4f7f5411be85/5f6935d287a6c.image.jpg', '2022-11-12');


INSERT INTO menus (cuisine) VALUES ('mexican'),('chinese'),('american');


INSERT INTO plates (menuid, dish_type, name) VALUES (1, 'entree', 'Chicken Fajitas'),(2,'entree', 'Spicy Noodles'),(1,'entree', 'Lengua Tacos');