import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { formsJson } from '../data/forms-json';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // No initial value since we don't know the controls
  dynamicForm!: FormGroup;
  formsJson: any; 

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.formsJson = this.dataService.getFormsJsonData();
    const group : any  = {};

    // loop through the JSON file and add each of them as control inside the formGroup
    formsJson.forEach((field: any) => {
      if (!field.hidden) {
        group[field.name] = [field.value ? field.value : '', field.required ? [Validators.required]: []];  
      }
    });
    
    // bind to the actual form group
    this.dynamicForm = this.fb.group(group);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
