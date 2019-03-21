import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cat-information',
  templateUrl: './cat-information.component.html',
  styleUrls: ['./cat-information.component.css']
})
export class CatInformationComponent implements OnInit {

  petsData:any = [];
  catsWithMaleOwners: any = [];
  catsWithFemaleOwners: any= [];
  maleOwners:any = [];
  femaleOwners:any = [];

private data: any;
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCatInformation();
  }

  getCatInformation() {
    this.petsData = [];
    this.maleOwners = [];
    this.femaleOwners = [];

    this.catsWithMaleOwners = [];
    this.catsWithFemaleOwners = [];

    this.rest.getCatInformation().subscribe((data: {}) => {   
      this.petsData = data;
      console.log(data);
     
      this.arrangeCatsAccordingToOwners();
    
  });
}

arrangeCatsAccordingToOwners() 
{
  //loop through each value and separate pets with male and female owners
  this.petsData.forEach(pet => {
    if(pet.gender)
    {
      if(pet.gender == 'Male')
      {
        this.maleOwners.push(pet);
      }
      else
      {
        this.femaleOwners.push(pet);
      }
    }
  });

  //select cats with male owners
  this.maleOwners.forEach(element => {
    if(element.pets)
    {
      const cats = element.pets.filter(y=>y.type=='Cat')
      cats.forEach(element => {
      this.catsWithMaleOwners.push(element.name);
      });
    }
  });

  //select cats with female owners
  this.femaleOwners.forEach(element => {
    if(element.pets)
    {
      const cats = element.pets.filter(y=>y.type=='Cat')
      cats.forEach(element => {
        this.catsWithFemaleOwners.push(element.name);
      });
    }
  });

//sort the two lists
this.catsWithMaleOwners = this.catsWithMaleOwners.sort();
this.catsWithFemaleOwners = this.catsWithFemaleOwners.sort();

}
}