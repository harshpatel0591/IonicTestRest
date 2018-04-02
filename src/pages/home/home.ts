import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountriesProvider } from '../../providers/countries/countries';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public countries : CountriesProvider) {
    this.getapi();  
  }

  getapi()
  {
    this.countries.getCountries().subscribe(cntry => console.log(cntry));
  }

}
