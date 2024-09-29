import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const initDB = async () => {
    return open({
        filename: './recipes.db',
        driver: sqlite3.Database
    });
};

const setupTable = async (db) => {
    await db.exec(`
        CREATE TABLE IF NOT EXISTS recipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            servings INTEGER,
            ingredients TEXT,
            instructions TEXT
        );
    `);
};

export { initDB, setupTable };
