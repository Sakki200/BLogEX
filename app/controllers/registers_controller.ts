import type { HttpContext } from '@adonisjs/core/http'

export default class RegistersController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }
  async store({ view }: HttpContext) {}
}
