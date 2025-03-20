import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { env } from '$env/dynamic/private'
import axios from 'axios';

export const load: PageServerLoad = async ({ params }) => {
  let batteryPassId = params.id;

  //getBatteryPassport details for given Id
  const url = env.BATTERYPASS_APP_SERVER + '/getbatterypass/' + batteryPassId;

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: url,
    headers: {
      'Authorization': 'Bearer {{AuthToken}}'
    }
  };

  const response = await axios.request(config);

  /**
   * Handle Failure response here and return error as per status code
  **/

  //data model creation for response
  const integrityRecordId = response.data.integrityRecordId;
  const level1Tags = response.data.level1Tags;
  const level2Tags = response.data.level2Tags;
  const level3Tags = response.data.level3Tags;
  const meta = response.data.meta;

  //return the battery passport data model for display
  return {
    post: {
      id: batteryPassId,
      meta: meta
    },
  };
};

export const actions = {
  default: async (event) => {


  }
} satisfies Actions;

