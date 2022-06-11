package com.bjhelper.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bjhelper.dto.UserDTO;
import com.bjhelper.security.TokenProvider;
import com.bjhelper.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {

	UserService userService;
	@Autowired
	private UserController(UserService userService) {
		this.userService = userService;
	}
	@Autowired
	TokenProvider tokenProvider;
	@PostMapping("/")
	public ResponseEntity<?> AddUser(@RequestBody UserDTO user) throws Exception{
		userService.addUser(user);
		return new ResponseEntity<UserDTO>(HttpStatus.OK);
	}
	@PutMapping("{id}")
	public ResponseEntity<?> updateUser(@RequestBody UserDTO user) throws Exception{
		userService.updateUser(user);
		return new ResponseEntity<UserDTO>(HttpStatus.OK);
	}
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteUser(@PathVariable String id) throws Exception{
		userService.deleteUser(id);
		return new ResponseEntity<UserDTO>(HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserDTO userDTO) throws Exception{
		String userId = userDTO.getId();
		String userPassword = userDTO.getPassword();
		UserDTO loginUser = userService.login(userDTO.getId(), userDTO.getPassword());
		if(loginUser != null) {
			final String token = tokenProvider.create(loginUser);
			final UserDTO responseUserDTO = UserDTO.builder()
					.email(loginUser.getEmail())
					.username(loginUser.getUsername())
					.token(token)
					.build();
			return ResponseEntity.ok().body(responseUserDTO);
		}
		else {
			return ResponseEntity.badRequest().body("");
		}
	}
}
