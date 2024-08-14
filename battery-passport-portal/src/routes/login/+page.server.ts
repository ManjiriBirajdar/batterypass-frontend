import { fail, redirect} from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import axios from 'axios';
import { env } from '$env/dynamic/private'
export const load: PageServerLoad = async ({ params }) => {
 
}

export const actions = {
  default: async (event) => {

    const data = await event.request.formData();
    const response = await axios.post(env.INTEGRITY_RECORD_SERVICE + '/login', {     
        email: data.get('email') as string,
        password: data.get('password') as string
    });

    //Add check if the status has a error code
    // if (response.errors) {
    //   //display toast or popup
    //   return fail(401, response);
    // }

    event.cookies.set('AuthorizationToken', `Bearer ${response.data.token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 // 1 day
		});


		throw redirect(303, '/dashboard');
  }
} satisfies Actions;

