const emulateTimeout = (timeout = 300) => (req, res, next) => setTimeout(() => next(), timeout);

export default emulateTimeout;