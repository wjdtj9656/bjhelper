package com.bjhelper.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bjhelper.dto.ProblemDTO;
import com.bjhelper.mapper.ProblemMapper;

@Service
public class ProblemServiceImpl implements ProblemService{
	ProblemMapper problemMapper;
	@Autowired
	public ProblemServiceImpl(ProblemMapper problemMapper){
		this.problemMapper = problemMapper;
	}
	@Override
	public int addProblem(ProblemDTO problemDTO) throws Exception {
		// TODO Auto-generated method stub
		return problemMapper.addProblem(problemDTO);
	}

	@Override
	public int updateProblem(ProblemDTO problemDTO) throws Exception {
		// TODO Auto-generated method stub
		return problemMapper.updateProblem(problemDTO);
	}

	@Override
	public int deleteProblem(int id) throws Exception {
		// TODO Auto-generated method stub
		return problemMapper.deleteProblem(id);
	}

	@Override
	public List<ProblemDTO> selectAllProblems(String user_id) throws Exception {
		// TODO Auto-generated method stub
		return problemMapper.selectAllProblems(user_id);
	}
}
