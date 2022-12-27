import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { InterestComponent } from './interest.component';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { DatingService } from '../_services';

describe('InterestComponent', () => {
  let component: InterestComponent;
  let fixture: ComponentFixture<InterestComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterestComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]

    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(InterestComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe("boundary", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    
    it("should show user header length", async() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        var rowHeaderLength = element.querySelectorAll("th").length;
        expect(rowHeaderLength).toBe(7);
      });
    });
  });

      
  describe("exception", () => {

    it("should be check interst api", inject([HttpTestingController, DatingService], (httpMock: HttpTestingController, datingService: DatingService) => {
      component.ngOnInit();
      datingService.getInterestsData().subscribe(data => {
        expect(data).toEqual(data);
        expect(data).toBe(data);
        expect(data).not.toBe(null);
        expect(null).toBeNull();
        expect(data).toBeTruthy();
      });
    }));
  });


});
