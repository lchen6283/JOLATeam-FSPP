\c dev_smak;

INSERT INTO users (firstname, lastname, address, city, state, zip, phonenumber, username, token, gary_points, avatar, is_active) VALUES ('Veronica', 'Perez','231 Gary Street', 'Elmhurst', 'New York', '11372', 5164729482, 'VerPerez', '489njs2k', 0, null, false),
('Mike', 'Perez','231 Gary Street', 'Elmhurst', 'New York', '11372', 5162229482, 'MikePerez', '429njs2k', 0, null, false);

INSERT INTO orders (restaurant_ID, date, delivery_address, total_cost, userid) VALUES ('CaboRVC', '2022-11-11', '231 Gary Street Elmhurst New York 11372', 7500, 1),('CaboRVC', '2022-11-12', '231 Gary Street Elmhurst New York 11372', 10000, 2);

INSERT INTO reviews (userid, orderid, rating, content, img_url, date) VALUES (1, 1, 5, 'Those enchiladas hit the spot so good, how did they know?  Im just blown away', 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/3/de/3de25464-fc61-11ea-bad1-4f7f5411be85/5f6935d287a6c.image.jpg', '2022-11-11'), (2, 2, 5, 'These tongue tacos are the best i never had. Wow wow wow', 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/3/de/3de25464-fc61-11ea-bad1-4f7f5411be85/5f6935d287a6c.image.jpg', '2022-11-12');
