package com.futuro_vestibular.BackEndfuturovestibular.controller;



import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.futuro_vestibular.BackEndfuturovestibular.entities.User;
import com.futuro_vestibular.BackEndfuturovestibular.services.UserService;


@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping
	public ResponseEntity<List <User>> findAll() {
		List<User> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	
	@GetMapping("/{id}")
	public ResponseEntity<User> findById(@PathVariable Integer id) {
		User obj =  service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@PostMapping 
	public ResponseEntity<User> insert(@RequestBody User obj){
		User newObj = service.insert(obj);
		return ResponseEntity.created(URI.create("/users"+ newObj.getId())).body(newObj);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<User> update (@PathVariable Integer id, @RequestBody User obj){
		obj = service.update(id, obj);
		return ResponseEntity.ok().body(obj);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}