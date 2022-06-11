package com.bjhelper.service;

import java.util.List;

import com.bjhelper.dto.ProblemDTO;

public interface ProblemService {
	public int addProblem(ProblemDTO problemDTO) throws Exception;
	public int updateProblem(ProblemDTO problemDTO) throws Exception;
	public int deleteProblem(int id) throws Exception;
	public List<ProblemDTO> selectAllProblems(String user_id) throws Exception;
}
