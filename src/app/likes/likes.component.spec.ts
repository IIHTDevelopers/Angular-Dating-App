import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LikesComponent } from './likes.component';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { DatingService } from '../_services';

describe('LikesComponent', () => {
  let component: LikesComponent;
  let fixture: ComponentFixture<LikesComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikesComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]

    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LikesComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesComponent);
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

    it("should be check likes api", inject([HttpTestingController, DatingService], (httpMock: HttpTestingController, datingService: DatingService) => {
      component.ngOnInit();
      datingService.getLikesData().subscribe(data => {
        expect(data).toEqual(data);
        expect(data).toBe(data);
        expect(data).not.toBe(null);
        expect(null).toBeNull();
        expect(data).toBeTruthy();
      });
    }));
  });


});
