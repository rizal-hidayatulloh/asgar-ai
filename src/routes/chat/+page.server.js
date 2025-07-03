import { redirect } from '@sveltejs/kit'

export const load = async (event) => {
  const session = await event.locals.auth()
  
  // Redirect ke login jika tidak ada session
  if (!session) {
    throw redirect(302, '/login')
  }
  
  return {
    session
  }
}