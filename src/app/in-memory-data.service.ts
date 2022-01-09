import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  // tunnus jolla voidaan kirjautua sisään
  createDb() {
    const credentials = [
      {username: 'qwerty', password: 'qwerty'}
    ];
    return {credentials};
  }
  constructor() { }
}
