const sqlite3 = require('sqlite3').verbose();
const connectToDatabase = require('../db/connect');

const db = new sqlite3.Database('../dua_main.sqlite');

async function migrateData() {
  const database = await connectToDatabase();
  const categories = database.collection('categories');
  const subcategories = database.collection('subcategories');
  const duas = database.collection('duas');

  db.serialize(() => {
    db.each(`SELECT * FROM category`, async (err, row) => {
      if (err) throw err;
      console.log(row);
      await categories.insertOne({ _id: row.id, name: row.name, subcategoryCount: row.subcategoryCount });
    });

    db.each(`SELECT * FROM sub_category`, async (err, row) => {
      if (err) throw err;
      await subcategories.insertOne({ _id: row.id, name: row.name, categoryId: row.categoryId });
    });

    db.each(`SELECT * FROM dua`, async (err, row) => {
      if (err) throw err;
      await duas.insertOne({
        _id: row.id,
        title: row.title,
        arabicText: row.arabicText,
        transliteration: row.transliteration,
        translation: row.translation,
        reference: row.reference,
        subcategoryId: row.subcategoryId,
      });
    });
  });
}

migrateData().catch(console.error);