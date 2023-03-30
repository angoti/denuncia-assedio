package com.denuciaassedio.futuropre_vestibular.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.denuciaassedio.futuropre_vestibular.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
