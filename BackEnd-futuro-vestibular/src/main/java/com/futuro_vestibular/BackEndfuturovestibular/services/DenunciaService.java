package com.futuro_vestibular.BackEndfuturovestibular.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.futuro_vestibular.BackEndfuturovestibular.entities.Denuncia;
import com.futuro_vestibular.BackEndfuturovestibular.repositories.DenunciaRepository;
import com.futuro_vestibular.BackEndfuturovestibular.services.exception.ResourceNotFoundException;


@Service
public class DenunciaService {
	
	@Autowired
	private DenunciaRepository repository;
	
	public List<Denuncia> findAll(){
		return repository.findAll();
	}
	
	public Denuncia findById(Integer id) {
		Optional<Denuncia> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Denuncia insert(Denuncia obj) {
		return repository.save(obj);
	}

	public void delete(Integer id) {
		Denuncia obj  =  repository.findById(id).get();
		repository.delete(obj);
	}

}
