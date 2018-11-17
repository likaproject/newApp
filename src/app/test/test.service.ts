import { Injectable } from '@angular/core';
import { Color } from '../color';
import { COLORS } from '../mock-colors';

@Injectable({
  providedIn: 'root'
})

export class TestService {

    getColors(): Color[] {
        return COLORS;
        }
        
    constructor() { }
}
