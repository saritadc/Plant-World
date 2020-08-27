import http from './httpService';
import { PLANT_LISTS } from './../constants/endpoints';


export function getPlants() {
  return http.get(
    "https://907b20be-1b6f-4aaa-a975-58deb9315aef.mock.pstmn.io/plants"
  );
}