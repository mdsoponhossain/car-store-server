import app from './app/app';
import colors from 'colors';
import configInfo from './app/config';
import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';

async function connectDB() {
  try {
    await mongoose.connect(configInfo.db_url as string, {
      dbName: 'car_store_DB',
    });
    await console.log(
      colors.green('Server connected with database successfully...'),
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(colors.red(error));
  }
}

connectDB();

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(
    `Your requested method [${req.method}]  & url [${req.url}] is not valid.`,
  );
  next(error);
});

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: (error as { message: string }).message });
});

app.listen(configInfo.port, () => {
  console.log(colors.green(`Example app listening on port ${configInfo.port}`));
});
