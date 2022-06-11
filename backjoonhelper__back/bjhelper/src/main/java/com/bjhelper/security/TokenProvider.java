package com.bjhelper.security;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import com.bjhelper.dto.UserDTO;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class TokenProvider {
	private static final String SERCRET_KEY ="NASDFASDFAS13123a";
	public String create(UserDTO userDTO) {
		Date expiryDate = Date.from(Instant.now().plus(1,ChronoUnit.DAYS));
		return Jwts.builder()
				.signWith(SignatureAlgorithm.HS512, SERCRET_KEY)
				.setSubject(userDTO.getId())
				.setIssuer("bjhelper")
				.setIssuedAt(new Date())
				.setExpiration(expiryDate)
				.compact();
	}
	public String validateAndGetUserId(String token) {
		Claims claims = Jwts.parser()
				.setSigningKey(SERCRET_KEY)
				.parseClaimsJws(token)
				.getBody();
		return claims.getSubject();
	}
}
