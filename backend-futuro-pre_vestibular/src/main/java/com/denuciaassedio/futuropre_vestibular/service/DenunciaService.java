package com.denuciaassedio.futuropre_vestibular.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.denuciaassedio.futuropre_vestibular.entities.Denuncia;
import com.denuciaassedio.futuropre_vestibular.repository.DenunciaRepository;
import com.denuciaassedio.futuropre_vestibular.service.exception.ResourceNotFoundException;

@Service
public class DenunciaService {
	
	@Autowired
	private DenunciaRepository repository;
	
	public Denuncia findById(Integer id) {
		Optional<Denuncia> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

}