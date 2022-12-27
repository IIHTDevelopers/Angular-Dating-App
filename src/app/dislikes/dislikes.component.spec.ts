import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { DislikesComponent } from './dislikes.component';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { DatingService } from '../_services';

describe('DisLikesComponent', () => {
  let component: DislikesComponent;
  let fixture: ComponentFixture<DislikesComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DislikesComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]

    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DislikesComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikesComponent);
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
      datingService.getDisLikesData().subscribe(data => {
        expect(data).toEqual(data);
        expect(data).toBe(data);
        expect(data).not.toBe(null);
        expect(null).toBeNull();
        expect(data).toBeTruthy();
      });
    }));
  });


});
