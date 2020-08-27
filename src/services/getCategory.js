import http from './httpService';
import { PLANT_CATEGORY } from './../constants/endpoints';

export function getCategories(){

  return http.get(
    "https://907b20be-1b6f-4aaa-a975-58deb9315aef.mock.pstmn.io/category"
  );
}