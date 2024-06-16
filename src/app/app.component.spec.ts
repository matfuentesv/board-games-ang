import { TestBed,  } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: []
    })
      .compileComponents();
  })

  it('debería crear el componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`debería tener el título 'board-games-ang'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('board-games-ang');
  });

  it('debería renderizar el título', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('board-games-ang');
  });
});
