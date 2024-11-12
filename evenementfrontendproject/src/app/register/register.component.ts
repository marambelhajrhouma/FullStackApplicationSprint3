import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  
  public user = new User();

  confirmPassword?:string;

  myForm!: FormGroup;

  err: any;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

    ngOnInit(): void {
    
      this.myForm = this.formBuilder.group({
      
            username : ['', [Validators.required]],
            email : ['', [Validators.required, Validators.email]],
            password : ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword : ['', [Validators.required]]
        } 
      );
  }
  
  onRegister() {
    this.authService.registerUser(this.user).subscribe({
      next: (res) => {
        alert("Veuillez confirmer votre email");
        // Optionally, navigate to the email verification page (uncomment the line below if needed):
        // this.router.navigate(["/verifEmail", this.user.email]);
      },
      error: (err: any) => {
        if (err.status === 400) {
          // Assuming the backend sends an error message in `err.error.message`
          this.err = err.error.message || "An error occurred during registration.";
        } else {
          // Handle other errors (e.g., 500, 404, etc.)
          this.err = "Une erreur inconnue est survenue. Veuillez réessayer.";
        }
      }
    });
  }
  


}