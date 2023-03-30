package com.denuciaassedio.futuropre_vestibular.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.denuciaassedio.futuropre_vestibular.repository.DenunciaRepository;

@Service
public class DenunciaService {
	
	@Autowired
	private DenunciaRepository repository;

}
