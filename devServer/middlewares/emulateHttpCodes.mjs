const EMULATE_HTTP_CODES = ['400', '403', '404', '405', '418', '500', '502', '504'];

const emulateHttpCodes = (req, res, next) => {
  for (let where of ['params', 'query']) {
    const httpCodeIn = Object.values(req[where]).find(value => EMULATE_HTTP_CODES.includes(value));

    if (httpCodeIn) {
      res.staus(httpCodeIn).send(JSON.stringify({
        message: `Сэмулирована ошибка ${httpCodeIn} прислана ${where} запроса`,
      }));

      return;
    }

    next();
  }
};

export default emulateHttpCodes;