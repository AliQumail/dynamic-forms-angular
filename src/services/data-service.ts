// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { formsJson } from '../data/forms-json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  getFormsJsonData(): any {
    return formsJson;
  }
}