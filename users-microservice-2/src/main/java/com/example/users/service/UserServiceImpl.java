package com.example.users.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.users.entities.Role;
import com.example.users.entities.User;
import com.example.users.repos.RoleRepository;
import com.example.users.repos.UserRepository;
import com.example.users.service.exceptions.EmailAlreadyExistsException;
import com.example.users.service.register.RegistrationRequest;



@Transactional
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	UserRepository userRep;
	
	@Autowired
	RoleRepository roleRep;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public User saveUser(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		return userRep.save(user);
	}
	
	@Override
	public User addRoleToUser(String username, String rolename) {
		User usr = userRep.findByUsername(username);
		Role r = roleRep.findByRole(rolename);
		
		usr.getRoles().add(r);
		return usr;
	}
	
	@Override
	public Role addRole(Role role) {
		return roleRep.save(role);
	}
	
	
	@Override
	public User findUserByUsername(String username) {
		return userRep.findByUsername(username);
	}
	
	@Override
	public List<User> findAllUsers() {
		return userRep.findAll();
	}

	@Override
	public User registerUser(RegistrationRequest request) throws EmailAlreadyExistsException {
		
		Optional<User> optionaluser = userRep.findByEmail(request.getEmail());
		
		if(optionaluser.isPresent())
			throw new EmailAlreadyExistsException("Email déjà existant!");
		
		User newUser = new User();
		newUser.setUsername(request.getUsername());
		newUser.setEmail(request.getEmail());

		newUser.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));
		newUser.setEnabled(false);
		userRep.save(newUser);
		
		//ajouter à newUser le role par défaut USER
		Role r = roleRep.findByRole("USER");
		List<Role> roles = new ArrayList<>();
		roles.add(r);
		
		newUser.setRoles(roles);

		 return userRep.save(newUser);
	}
	
	
}