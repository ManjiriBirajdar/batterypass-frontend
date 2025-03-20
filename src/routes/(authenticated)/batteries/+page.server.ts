import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { env } from '$env/dynamic/private'
import axios from 'axios';

export const load: PageServerLoad = async ({ params }) => {
  const url = env.BATTERYPASS_APP_SERVER + '/getallbatterypasss/';

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: url,
    headers: {
      'Authorization': 'Bearer {{AuthToken}}'
    }
  };

  const response = await axios.request(config);

  const listOfRecords = response.data
  var listOfPassports = [];
  for (let w in listOfRecords) {
    listOfPassports.push({
      id: listOfRecords[w].integrityRecordId,
      oem: listOfRecords[w].level2Tags[0],
      details: `<a class='text-blue-600 hover:underline' href='/${listOfRecords[w].integrityRecordId}'>View</a>`
    });
  }
  return { listOfPassports: listOfPassports }
}

export const actions = {
  default: async (event) => {


  }
} satisfies Actions;

