package com.futuro_vestibular.BackEndfuturovestibular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.futuro_vestibular.BackEndfuturovestibular.entities.User;



@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}