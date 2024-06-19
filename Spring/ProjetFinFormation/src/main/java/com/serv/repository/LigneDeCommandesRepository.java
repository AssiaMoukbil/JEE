package com.serv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serv.entity.LigneDeCommandes;

@Repository
public interface LigneDeCommandesRepository extends JpaRepository<LigneDeCommandes,Long>{

}
