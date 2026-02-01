import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TenantFormComponent } from './tenant-form/tenant-form.component';
@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss'],
  imports:[IonicModule,TenantFormComponent]
})
export class TenantsComponent implements OnInit {

  // tenants: any[] = [];

  // isModalOpen = false;
  // selectedTenant:any  = null;

  constructor() {}

  ngOnInit() {
    //this.loadTenants();
  }

  // loadTenants() {
  //   this.tenantService.getTenants().subscribe(res => {
  //     this.tenants = res;
  //   });
  // }

  // openAddModal() {
  //   this.selectedTenant = null;
  //   this.isModalOpen = true;
  // }

  // openEditModal(event: any) {
  //   this.selectedTenant = { ...event };
  //   this.isModalOpen = true;
  // }

  // closeModal() {
  //   this.isModalOpen = false;
  // }

  // saveTenant(data: any) {
  //   if (data.id) {
  //     // this.tenantService.updateTenant(data.id, data).subscribe(updated => {
  //     //   const index = this.tenants.findIndex(t => t.id === updated.id);
  //     //   this.tenants[index] = updated;
  //     //   this.closeModal();
  //     // });
  //   } else {
  //     // this.tenantService.addTenant(data).subscribe(newTenant => {
  //     //   this.tenants.push(newTenant);
  //     //   this.closeModal();
  //     // });
  //   }
  // }

}
