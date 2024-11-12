package com.example.users.restControllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.users.entities.User;
import com.example.users.service.UserService;
import com.example.users.service.exceptions.EmailAlreadyExistsException;
import com.example.users.service.register.RegistrationRequest;

@RestController
@CrossOrigin(origins = "*")
public class UserRestController {
@Autowired
UserService userService;
	
	@GetMapping("all")
	public List<User> getAllUsers() {
			return userService.findAllUsers();
	}
	
	@PostMapping("/register")
	public User register(@RequestBody RegistrationRequest request) throws EmailAlreadyExistsException
	{
		return userService.registerUser(request);
	}
	
	
}
