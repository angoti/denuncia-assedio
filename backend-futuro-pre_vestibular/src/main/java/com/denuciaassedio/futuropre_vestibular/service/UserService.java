package com.denuciaassedio.futuropre_vestibular.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.denuciaassedio.futuropre_vestibular.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository  repository;
	
	

}
