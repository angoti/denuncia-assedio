package com.denuciaassedio.futuropre_vestibular.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.denuciaassedio.futuropre_vestibular.entities.User;
import com.denuciaassedio.futuropre_vestibular.repository.UserRepository;
import com.denuciaassedio.futuropre_vestibular.service.exception.ResourceNotFoundException;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public List<User> findAll(){
		return repository.findAll();
	}

	public User findById(Integer id) {
		Optional<User> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	

}
