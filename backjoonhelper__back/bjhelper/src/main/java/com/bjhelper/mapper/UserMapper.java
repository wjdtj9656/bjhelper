package com.bjhelper.mapper;

import java.sql.SQLException;

import org.apache.ibatis.annotations.Mapper;

import com.bjhelper.dto.UserDTO;
@Mapper
public interface UserMapper {
	UserDTO login(String id, String password) throws SQLException;
	public int addUser(UserDTO user) throws SQLException;
	public int updateUser(UserDTO user) throws SQLException;
	public int deleteUser(String id) throws SQLException;
	
}
