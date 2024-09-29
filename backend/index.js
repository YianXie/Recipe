import express from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipes.js';
import { initDB, setupTable } from './db.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);

const startServer = async () => {
    // Setup the database table on startup
  const db = await initDB();
  await setupTable(db); 
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
