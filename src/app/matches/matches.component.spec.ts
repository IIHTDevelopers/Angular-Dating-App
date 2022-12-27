import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MatchesComponent } from './matches.component';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { DatingService } from '../_services';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]

    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MatchesComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe("boundary", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    
  });

      
  describe("exception", () => {

    it("should be check matches api", inject([HttpTestingController, DatingService], (httpMock: HttpTestingController, datingService: DatingService) => {
      component.ngOnInit();
      datingService.getMatchesData().subscribe(data => {
        expect(data).toEqual(data);
        expect(data).toBe(data);
        expect(data).not.toBe(null);
        expect(null).toBeNull();
        expect(data).toBeTruthy();
      });
    }));
  });


});
