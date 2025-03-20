import { fail, redirect} from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  //delete cookies and redirect to home page

  // event.cookies.delete('AuthorizationToken', { path: '/' });
  throw redirect(300, '/')
}