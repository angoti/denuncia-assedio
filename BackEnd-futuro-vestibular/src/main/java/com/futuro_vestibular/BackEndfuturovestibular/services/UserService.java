package com.futuro_vestibular.BackEndfuturovestibular.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futuro_vestibular.BackEndfuturovestibular.entities.User;
import com.futuro_vestibular.BackEndfuturovestibular.repositories.UserRepository;
import com.futuro_vestibular.BackEndfuturovestibular.services.exception.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

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
	
	public User insert(User obj) {
		return repository.save(obj);
	}
	
	public User update(Integer id, User obj) {
		try {
			User aux = repository.getReferenceById(id);
			updateData(aux, obj);
			return repository.save(aux);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		}
	}

	private void updateData(User aux, User obj) {
		aux.setName(obj.getName());		
	}
	
	public void delete(Integer id) {	//verificar se esta ok
		User obj  =  repository.findById(id).get();
		repository.delete(obj);
	}
	

}