import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { env } from '$env/dynamic/private'
import axios from 'axios';

export const load: PageServerLoad = async ({ params }) => {
 
};

export const actions = {
  default: async (event) => {
    

  }
} satisfies Actions;

