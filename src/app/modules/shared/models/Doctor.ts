import { EGovernorate } from "./enum/EGovernorate";
import { ESpecialty } from "./enum/ESpecialty";
import { User } from "./User";

export interface Doctor extends User {
    specialty:ESpecialty,
    governorate:EGovernorate,
}
