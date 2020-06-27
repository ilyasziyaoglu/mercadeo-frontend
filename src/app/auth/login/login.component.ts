import {Component} from '@angular/core';
import {HttpMethod, HttpService} from '../../services/base/http.service';
import {Router} from '@angular/router';
import {StorageService} from '../../services/base/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username;
  password;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private storageService: StorageService,
  ) {
  }


  onLogin() {
    const data = {
      email: this.username,
      password: this.password,
    };
    this.httpService.doRequest(HttpMethod.POST, 'auth/login', data, (response) => {
      if ( response ) {
        window['storage'].setItem('token', response.token);
        window['storage'].setItem('user', response.userResponse);
        this.router.navigateByUrl('pages/home');
      } else {
        window['storage'].setItem('token', null);
        window['storage'].setItem('user', null);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Username or password incorrect!',
        });
      }
    });
  }
}
