const session = require('express-session')

const startSession = req => (user) => {

  req.session.user = {
    id: user.id,
    name: user.name,
    email: user.email,
    admin: user.admin
  }
  req.session.save()
}

const validateSession = (req, res, next) => {
  res.locals.isLogged = (req.session && !!req.session.user)
  res.locals.isLoggedAdmin = (res.locals.isLogged && (req.session.user.admin == 1))
  res.locals.user = req.session && req.session.user
  req.startSession = startSession(req)

  next()
}

const configureSession = app => {
  app.set('trust proxy', 1) // trust first proxy
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      name: 'api-session-key',
      saveUninitialized: false
    })
  )

  app.use(validateSession)
}

module.exports = {
  configureSession
}
