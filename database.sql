-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:
  CREATE TABLE "favorites" (
  "id" serial PRIMARY KEY,
  "title" VARCHAR (120),
  "giphy_url" varchar(255) NOT NULL,
  "categories_id" int REFERENCES "categories");
  
  INSERT INTO "favorites"
  ("title","giphy_url", "categories_id")
  VALUES 
  ('Cray Thats Wild GIF by Originals', 'https://giphy.com/gifs/originals-dawnie-jefferson-thats-wild-that-is-UufAH7FSltoa7NzIKF', 1);

-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.
