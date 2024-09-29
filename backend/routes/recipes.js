import express from 'express';
import { initDB } from '../db.js';

const router = express.Router();

// get all the recipes 
router.get('/', async (req, res) => {
    const db = await initDB();
    const recipes = await db.all('SELECT * FROM recipes');
    res.json(recipes);
});

router.post('/', async (req, res) => {
    const { title, servings, ingredients, instructions } = req.body;
    const db = await initDB();
    const result = await db.run(
        'INSERT INTO recipes (title, servings, ingredients, instructions) VALUES (?, ?, ?, ?)', 
        [title, servings, ingredients, instructions]
    );
    res.json({ id: result.lastID });
});

router.delete('/:id', async (req, res) => {
    const db = await initDB();
    const { id } = req.params;
    const result = await db.run('DELETE FROM recipes WHERE id = ?', [id]);
    res.json({ id: id, message: 'Recipe deleted' });
});

export default router;
