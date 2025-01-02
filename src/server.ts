import app from './app/app';
import colors from 'colors';
import configInfo from './app/config';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(configInfo.port, () => {
  console.log(colors.green(`Example app listening on port ${configInfo.port}`));
});
