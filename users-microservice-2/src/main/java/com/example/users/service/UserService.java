package com.example.users.service;

import java.util.*;

import com.example.users.entities.Role;
import com.example.users.entities.User;
import com.example.users.service.exceptions.EmailAlreadyExistsException;
import com.example.users.service.register.RegistrationRequest;


public interface UserService {
	User saveUser(User user);
	User findUserByUsername (String username);
	Role addRole(Role role);
	User addRoleToUser(String username, String rolename);
	
	List<User> findAllUsers();
	
	User registerUser(RegistrationRequest request) throws EmailAlreadyExistsException;
}	