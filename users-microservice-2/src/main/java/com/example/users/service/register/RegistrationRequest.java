package com.example.users.service.register;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class RegistrationRequest {

	private String username;
	private String email;
	private String password;
}
