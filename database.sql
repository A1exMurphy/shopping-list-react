CREATE TABLE shopping_list (
    "id" SERIAL PRIMARY KEY,
    "Name" VARCHAR(80) NOT NULL,
    "Quantity" NUMERIC(6,2),
    "Unit" VARCHAR(20)
);

INSERT INTO shopping_list ("Name", "Quantity", "Unit")
    VALUES ('cumquats', 12, 'delicious');

DELETE FROM shopping_list 
    WHERE "id" = ($1)

UPDATE "shopping_list"
	SET "Unit" = 'Super delicious'
	WHERE "id" = ($1);