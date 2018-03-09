INSERT INTO users (username, password) VALUES ('Jaime', '12345');
INSERT INTO users (username, password) VALUES ('Jenny', '12345');
INSERT INTO users (username, password) VALUES ('Bryan', '12345');
INSERT INTO users (username, password) VALUES ('Josh', '12345');

INSERT INTO items (name, owner_id, type, is_borrowed) VALUES ('$5',1 ,'money', true);
INSERT INTO items (name, owner_id, type, is_borrowed) VALUES ('help with moving' ,3 ,'favor',false);
INSERT INTO items (name, owner_id, type, is_borrowed) VALUES ('lawnmower',2 ,'item', true);
INSERT INTO items (name, owner_id, type, is_borrowed) VALUES ('$100',4 , 'money', false);
INSERT INTO items (name, owner_id, type, is_borrowed) VALUES ('The Notebook DVD',3 ,'item', true);

INSERT INTO transactions (owner_id, borrower_id, item_id, due_date, is_returned) VALUES (1,3,1,'2018-03-30',true);
INSERT INTO transactions (owner_id, borrower_id, item_id, due_date, is_returned) VALUES (3,4,3,'2018-03-30',false);
INSERT INTO transactions (owner_id, borrower_id, item_id, due_date, is_returned) VALUES (2,1,2,'2018-03-30',false);
INSERT INTO transactions (owner_id, borrower_id, item_id, due_date, is_returned) VALUES (4,2,5,'2018-03-30',true);
INSERT INTO transactions (owner_id, borrower_id, item_id, due_date, is_returned) VALUES (2,3,4,'2018-03-30',false);

