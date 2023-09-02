import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-folk',
  templateUrl: './add-folk.component.html',
  styleUrls: ['./add-folk.component.css']
})

export class AddFolkComponent {
  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

  clearName() {
    this.name.setValue('');
  }
}