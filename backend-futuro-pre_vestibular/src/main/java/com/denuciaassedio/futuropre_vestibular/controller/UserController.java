package com.denuciaassedio.futuropre_vestibular.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denuciaassedio.futuropre_vestibular.service.UserService;


@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService service;

	
	
}
