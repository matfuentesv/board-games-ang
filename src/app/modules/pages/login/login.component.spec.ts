import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule, // Añade RouterTestingModule a imports
        LoginComponent
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener el formulario inválido cuando esté vacío', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('debería validar el campo de correo electrónico', () => {
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('test');
    expect(email.hasError('email')).toBeTruthy();

    email.setValue('test@example.com');
    expect(email.hasError('email')).toBeFalsy();
  });

  it('debería validar el campo de contraseña', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('Test1');
    expect(password.hasError('pattern')).toBeTruthy();

    password.setValue('Test123');
    expect(password.hasError('pattern')).toBeFalsy();
  });

  it('debería limpiar el formulario cuando se llame a onClear', () => {
    component.loginForm.controls['email'].setValue('test@example.com');
    component.loginForm.controls['password'].setValue('Test123');
    component.onClear();
    expect(component.loginForm.controls['email'].value).toBeNull();
    expect(component.loginForm.controls['password'].value).toBeNull();
  });
});
