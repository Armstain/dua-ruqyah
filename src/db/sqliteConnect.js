const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { OPEN_READWRITE } = require('sqlite3');

let db = null;

function getDatabase() {
  if (!db) {
    const dbPath = path.join(process.cwd(), 'src', 'db', 'dua_main.sqlite');
    db = new sqlite3.Database(dbPath, OPEN_READWRITE, (err) => {
      if (err) {
        console.error('Error opening database:', err.message);
        console.error('Database path:', dbPath);
      } else {
        console.log('Connected to the SQLite database.');
        console.log('Database path:', dbPath);
      }
    });
  }
  return db;
}

async function getCategories() {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const results = {
      categories: [],
      subCategories: [],
      duas: []
    };

    db.serialize(() => {
      db.all(`SELECT * FROM category`, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          results.categories = rows;
        }
      });

      db.all(`SELECT * FROM sub_category`, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          results.subCategories = rows;
        }
      });

      db.all(`SELECT * FROM dua`, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          results.duas = rows;
          resolve(results);
        }
      });
    });
  });
}

async function getDuasBySubcategory(subcategoryId) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    db.all(`SELECT * FROM dua WHERE subcat_id = ?`, [subcategoryId], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

module.exports = {
  getCategories,
  getDuasBySubcategory,
  getDatabase
};