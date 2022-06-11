package com.bjhelper.service;

import java.sql.SQLException;

import com.bjhelper.dto.UserDTO;

public interface UserService {
	UserDTO login(String id, String password) throws Exception;
	public int addUser(UserDTO user) throws Exception;
	public int updateUser(UserDTO user) throws Exception;
	public int deleteUser(String id) throws Exception;
}
