package com.denuciaassedio.futuropre_vestibular.config;


import java.time.Instant;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.denuciaassedio.futuropre_vestibular.entities.Denuncia;
import com.denuciaassedio.futuropre_vestibular.entities.User;
import com.denuciaassedio.futuropre_vestibular.repository.DenunciaRepository;
import com.denuciaassedio.futuropre_vestibular.repository.UserRepository;



@Configuration
@Profile("test")
/*
 * Classe configuração para pefil de teste. Este perfil foi implementado no
 * aplication.properties
 */

public class TestConfig implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private DenunciaRepository denunciaRepository;

	@Override
	public void run(String... args) throws Exception {
		
		

		User u1 = new User(null, "Marjorie", "marjorie@gmail.com", "23456-7800", "E2023-1");
		User u2 = new User(null, "Clarisse", "clarisse@gmail.com" , "23456-7800", "E2023-2");

		User u3 = new User(null, "Capitu", "capitu@gmail.com" , "23456-7800", "E2023-3");

		// User u4 = new User(null, "Mr Nodody", "NOBODY@gmail.com",
		// "23456-7800","E2023-2");

		userRepository.saveAll(Arrays.asList(u1, u2, u3));

		Denuncia d1 = new Denuncia(null, "Refeitorio", Instant.parse("2023-02-20T19:53:07Z"), u3, "TEXT AREA PARA EXPOR DENUNCIA d1", "Author1");
		Denuncia d2 = new Denuncia(null, "Sala", Instant.parse("2023-01-12T18:12:07Z"), u1, "TEXT AREA PARA EXPOR DENUNCIA d2", "Author2");
		Denuncia d3 = new Denuncia(null, "Corredor", Instant.parse("2023-03-06T20:45:07Z"), u2, "TEXT AREA PARA EXPOR DENUNCIA d3", "Author3");


		denunciaRepository.saveAll(Arrays.asList(d1, d2, d3));

	}

}
