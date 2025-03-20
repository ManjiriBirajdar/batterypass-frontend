import { fail, redirect} from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
 
}

export const actions = {
  default: async (event) => {


  }
} satisfies Actions;

