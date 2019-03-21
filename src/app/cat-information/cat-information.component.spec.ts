import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { CatInformationComponent } from './cat-information.component';
import { RouterModule, Routes } from '@angular/router';

describe('CatInformationComponent', () => {
  let component: CatInformationComponent;
  let fixture: ComponentFixture<CatInformationComponent>;

  const appRoutes: Routes = [
    {
      path: 'cat-information',
      component: CatInformationComponent,
      data: { title: 'Cat Information' }
    },
    { path: '',
      redirectTo: '/cat-information',
      pathMatch: 'full'
    }
  ];
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatInformationComponent ],
      imports: [RouterModule.forRoot(appRoutes),
        HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check whether owners with no pets are omitted and lists have correct number of data', () => {
    component.petsData = [];
    component.petsData = [
      {
        age: 21,
        gender: 'Male',
        name: 'George',
        pets: [{name: "Bruno", type: "Dog"},{name: "Kitty", type: "Cat"}]
      },
      {
        age: 28,
        gender: 'Female',
        name: 'Dora',
        pets: null
      },
      {
        age: 23,
        gender: 'Male',
        name: 'Gert',
        pets: [{name: "Bella", type: "Cat"},{name: "Rony", type: "Cat"}]
      },
      {
        age: 33,
        gender: 'Female',
        name: 'Sera',
        pets: [{name: "Tod", type: "Cat"},{name: "Charlie", type: "Dog"}]
      }
    ];

    component.arrangeCatsAccordingToOwners();
    expect(component.catsWithFemaleOwners.length).toBe(1);
    expect(component.catsWithMaleOwners.length).toBe(3);
  });
});
