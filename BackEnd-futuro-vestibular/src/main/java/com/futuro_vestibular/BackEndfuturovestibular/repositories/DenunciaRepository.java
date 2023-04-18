package com.futuro_vestibular.BackEndfuturovestibular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.futuro_vestibular.BackEndfuturovestibular.entities.Denuncia;

@Repository
public interface DenunciaRepository extends JpaRepository<Denuncia, Integer> {

}
