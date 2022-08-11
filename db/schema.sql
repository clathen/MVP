DROP DATABASE IF EXISTS calorietracker;

CREATE DATABASE calorietracker;

\c calorietracker

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name TEXT,
  calories INT DEFAULT 0,
  protein INT DEFAULT 0
);