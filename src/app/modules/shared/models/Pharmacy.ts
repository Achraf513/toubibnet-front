import { EGovernorate } from "./enum/EGovernorate";
import {EStatus} from "./enum/EStatus";



export class Pharmacy{
  constructor(id?:number,
              name?:string,
              address?:string,
              phone?:string,
              status?:EStatus,
              governorate?:EGovernorate
              ) {
  }

}
