package com.futuro_vestibular.BackEndfuturovestibular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.futuro_vestibular.BackEndfuturovestibular.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}