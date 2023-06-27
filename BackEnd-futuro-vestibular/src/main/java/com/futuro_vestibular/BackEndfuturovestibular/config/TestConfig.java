package com.futuro_vestibular.BackEndfuturovestibular.config;

// import java.time.Instant;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.futuro_vestibular.BackEndfuturovestibular.entities.Denuncia;
import com.futuro_vestibular.BackEndfuturovestibular.entities.User;
import com.futuro_vestibular.BackEndfuturovestibular.repositories.DenunciaRepository;
import com.futuro_vestibular.BackEndfuturovestibular.repositories.UserRepository;

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

		// DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");

		User u1 = new User(null, "Marjorie", "marjorie@gmail.com", "27/04/1991", "23456-7800", "E2023-1");
		User u2 = new User(null, "Clarisse", "clarisse@gmail.com", "07/09/1999", "23456-7800", "E2023-2");

		User u3 = new User(null, "Capitu", "capitu@gmail.com", "15/12/2017", "23456-7800", "E2023-3");

		// User u4 = new User(null, "Mr Nodody", "NOBODY@gmail.com",
		// "23456-7800","E2023-2");

		userRepository.saveAll(Arrays.asList(u1, u2, u3));

		Denuncia d1 = new Denuncia(null, "Refeitorio", "07/05/2021 17:23", "ALO ALO MARCIANO AQUI QUEM FALA É DA TERRA", "cARLOS DA SILVA");

		// Denuncia d2 = new Denuncia(null, "Sala", "07/06/2021 17:23", u1, "TEXT AREA
		// PARA EXPOR DENUNCIA d2", "Author2");
		// Denuncia d3 = new Denuncia(null, "Corredor", "04/03/2020 17:23", u2, "TEXT
		// AREA PARA EXPOR DENUNCIA d3", "Author3");

		// denunciaRepository.saveAll(Arrays.asList(d1, d2, d3));

	}

}
/*
 * public User(Integer id, String name, String email, String dtBirthday, String
 * numberPhone, String class_studant) {
 */