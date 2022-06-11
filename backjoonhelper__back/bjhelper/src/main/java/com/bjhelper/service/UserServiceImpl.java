package com.bjhelper.service;

import org.springframework.stereotype.Service;

import com.bjhelper.dto.UserDTO;
import com.bjhelper.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {
	UserMapper userMapper;
	
	public UserServiceImpl(UserMapper userMapper) {
		this.userMapper = userMapper;
	}
	@Override
	public int addUser(UserDTO user) throws Exception {
		// TODO Auto-generated method stub
		return userMapper.addUser(user);
	}

	@Override
	public int updateUser(UserDTO user) throws Exception {
		// TODO Auto-generated method stub
		return userMapper.updateUser(user);
	}

	@Override
	public int deleteUser(String id) throws Exception {
		// TODO Auto-generated method stub
		return userMapper.deleteUser(id);
	}
	@Override
	public UserDTO login(String id, String password) throws Exception {
		// TODO Auto-generated method stub
		return userMapper.login(id, password);
	}

}
