package com.bjhelper.dto;

import com.bjhelper.dto.UserDTO.UserDTOBuilder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProblemDTO {
	private int id;
	private String context;
	private String User_id;
	private String url;
}
