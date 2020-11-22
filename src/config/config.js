module.exports = {
  port: process.env.PORT || 3000,
  db:
    process.env.MONGODB ||
    'mongodb+srv://admin:root@cluster0.rd0um.mongodb.net/DB_MovilidadAcademica?retryWrites=true&w=majority',
}
