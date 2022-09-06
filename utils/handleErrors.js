const handleHttpError = (res, msg = 'ERROR', code = 400) => {
  res.status(code)
  res.send({ error: msg })
}

module.exports = { handleHttpError }