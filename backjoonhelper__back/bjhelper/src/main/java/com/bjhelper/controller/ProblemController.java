package com.bjhelper.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bjhelper.dto.ProblemDTO;
import com.bjhelper.dto.UserDTO;
import com.bjhelper.service.ProblemService;

@RestController
@RequestMapping("/problem")
public class ProblemController {

	ProblemService problemService;
	@Autowired
	private ProblemController(ProblemService problemService) {
		this.problemService = problemService;
	}
	@PostMapping("/")
	public ResponseEntity<?> AddProblem(@RequestBody ProblemDTO problem) throws Exception{
		problemService.addProblem(problem);
		return new ResponseEntity<UserDTO>(HttpStatus.OK);
	}
	@PutMapping("{id}")
	public ResponseEntity<?> updateProblem(@RequestBody ProblemDTO problem) throws Exception{
		problemService.updateProblem(problem);
		return new ResponseEntity<UserDTO>(HttpStatus.OK);
	}
	@DeleteMapping("{id}")
	public ResponseEntity<?> deleteProblem(@PathVariable int id) throws Exception{
		problemService.deleteProblem(id);
		return new ResponseEntity<UserDTO>(HttpStatus.OK);
	}
	@GetMapping("{user_id}")
	public ResponseEntity<?> selectAllProblems(@PathVariable String user_id) throws Exception{
		List<ProblemDTO> result = problemService.selectAllProblems(user_id);
		return new ResponseEntity<List<ProblemDTO>>(result,HttpStatus.OK);
	}
}
