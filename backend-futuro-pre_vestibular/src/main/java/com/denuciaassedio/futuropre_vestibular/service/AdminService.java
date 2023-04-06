package com.denuciaassedio.futuropre_vestibular.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.denuciaassedio.futuropre_vestibular.entities.Denuncia;
import com.denuciaassedio.futuropre_vestibular.entities.User;
import com.denuciaassedio.futuropre_vestibular.repository.AdminRepository;
import com.denuciaassedio.futuropre_vestibular.repository.DenunciaRepository;
import com.denuciaassedio.futuropre_vestibular.repository.UserRepository;
import com.denuciaassedio.futuropre_vestibular.service.exception.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private DenunciaRepository denunciaRepositorio;
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> findAll_user(){
		return userRepository.findAll();
	}

	public User findById_user(Integer id) {
		Optional<User> obj = userRepository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public User insert(User obj) {
		return userRepository.save(obj);
	}
	
	public User update(Integer id, User obj) {
		try {
			User aux = userRepository.getReferenceById(id);
			updateData(aux, obj);
			return userRepository.save(aux);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		}
	}

	private void updateData(User aux, User obj) {
		aux.setName(obj.getName());		
	}
	
	public void delete_user(Integer id) {
		 userRepository.findById(id).get();
	}
	
	
	
	public List<Denuncia> findAll_denuncia(){
		return denunciaRepositorio.findAll();
	}
	
	public Denuncia findById_denuncia(Integer id) {
		Optional<Denuncia> obj = denunciaRepositorio.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Denuncia insert_denuncia(Denuncia obj) {
		return denunciaRepositorio.save(obj);
	}

	public void delete_denuncia(Integer id) {
		Denuncia obj  =  denunciaRepositorio.findById(id).get();
		denunciaRepositorio.delete(obj);
	}

}
