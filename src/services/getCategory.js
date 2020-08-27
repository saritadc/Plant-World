import http from './httpService';
import { PLANT_CATEGORY, baseURL } from './../constants/endpoints';

export function getCategories(){

  return http.get(
    "https://23862365-4d04-4616-b6d6-6a312f0b252b.mock.pstmn.io/category"
  );
}