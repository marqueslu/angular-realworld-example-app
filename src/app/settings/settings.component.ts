import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User, UserService } from '../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User = new User();
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) { 
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    })
  }

  ngOnInit() {
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
    this.settingsForm.patchValue(this.user);
  }

  logout(){
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  submitForm(){
    this.isSubmitting = true;

    this.updateUser(this.settingsForm.value);

    this.userService
    .update(this.user)
    .subscribe(
      updateUser => this.router.navigateByUrl('/profile/' + updateUser.username),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateUser(values: Object){
    (<any>Object).assign(this.user, values);
  }
}
