import LoginController from '#controllers/login_controller'
import LogoutsController from '#controllers/logouts_controller'
import RegistersController from '#controllers/registers_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.group(() => {
  //Register
  router.get('/register', [RegistersController, 'show']).as('register.show')
  router.post('/register', [RegistersController, 'store']).as('register.store')

  //Login
  router.get('/login', [LoginController, 'show']).as('login.show')
  router.post('/login', [LoginController, 'store']).as('login.store')

  //Logout
  router.get('/logout', [LogoutsController, 'getOut']).as('logout')
}).as("auth")
