import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;  // Formulario de inicio de sesión

  showLoaderFlag: boolean = false;

  loaderImages = [
    { src: 'assets/images/image1.png', text: 'Cargando datos, por favor espere...' },
    { src: 'assets/images/image2.png', text: 'Preparando la interfaz de usuario...' },
    { src: 'assets/images/image3.png', text: 'Optimizando la experiencia...' },
    { src: 'assets/images/image4.png', text: 'Cargando recursos adicionales...' },
    // Añadir más imágenes y textos según sea necesario
  ];

  showLoader() {
    this.showLoaderFlag = true;
    // Simula el ocultamiento del loader después de un tiempo
    setTimeout(() => {
      this.showLoaderFlag = false;
      this.navCtrl.navigateRoot('/home');
    }, 10000); // Duración de la simulación
  }

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) {
    // Inicializar el formulario con validaciones
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],  // Validación de correo electrónico
      password: ['', [Validators.required, Validators.minLength(6)]]  // Validación de contraseña
    });
  }

  // Función para manejar el envío del formulario
  onLogin() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar la lógica para la autenticación del usuario, como una llamada a un API
      console.log('Email:', this.loginForm.value.email);
      console.log('Password:', this.loginForm.value.password);
      // Simulamos la redirección a la página de inicio tras un inicio de sesión exitoso
      this.showLoader()
    } else {
      console.log('Formulario no válido');
    }
  }

}
