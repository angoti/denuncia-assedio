package com.denuciaassedio.futuropre_vestibular.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denuciaassedio.futuropre_vestibular.entities.Denuncia;
import com.denuciaassedio.futuropre_vestibular.service.DenunciaService;

@RestController
@RequestMapping("/denuncias")
public class DenunciaController {

	@Autowired
	private DenunciaService service;

	@GetMapping("/{id}")
	public Denuncia findById(@PathVariable Integer id) {
		Denuncia obj = service.findById(id);
		return obj;
	}

}
