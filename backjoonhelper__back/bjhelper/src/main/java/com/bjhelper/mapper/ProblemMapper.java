package com.bjhelper.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.bjhelper.dto.ProblemDTO;

@Mapper
public interface ProblemMapper {
	public int addProblem(ProblemDTO problemDTO) throws SQLException;
	public int updateProblem(ProblemDTO problemDTO) throws SQLException;
	public int deleteProblem(int id) throws SQLException;
	public List<ProblemDTO> selectAllProblems(String user_id) throws SQLException;
	
	
}
