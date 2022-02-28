import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/modules/shared/models/Pharmacy';
import { PharmacyService } from '../../pharmacy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EGovernorate } from 'src/app/modules/shared/models/enum/EGovernorate';

@Component({
  selector: 'updatePharmacy',
  templateUrl: './update-pharmacy.component.html',
  styleUrls: ['./update-pharmacy.component.css']
})
export class UpdatePharmacyComponent implements OnInit {
  // @ts-ignore
  id: number;
  // @ts-ignore
  pharmacy: Pharmacy
  governorates: String[];;
  constructor(private route: ActivatedRoute, private router: Router,
    private service: PharmacyService) {
    this.governorates = [EGovernorate.Tunis, EGovernorate.Bizerte]
  }

  ngOnInit(): void {
    this.pharmacy = new Pharmacy();

    this.id = this.route.snapshot.params['id'];

    this.service.getPharmacy(this.id)
      .subscribe(data => {
        console.log(data)
        this.pharmacy = data;
      }, error => console.log(error));
  }
  updatePharmacy() {
    this.service.updatePharmacy(this.id, this.pharmacy)
      .subscribe(data => {
        console.log(data);
        this.pharmacy = new Pharmacy();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updatePharmacy();
  }

  gotoList() {
    this.router.navigate(['/pharmacy/admin']);
  }
}



