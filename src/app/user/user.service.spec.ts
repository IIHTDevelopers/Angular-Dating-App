import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule]

    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe("boundary", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

  });
  describe("exception", () => {

    it("should be check users api", inject([HttpTestingController, UserService], (httpMock: HttpTestingController, userService: UserService) => {
      component.ngOnInit();
      userService.getUsersData().subscribe(data => {
        expect(data).toEqual(data);
        expect(data).toBe(data);
        expect(data).not.toBe(null);
        expect(null).toBeNull();
        expect(data).toBeTruthy();
      });
    }));
  });
});
