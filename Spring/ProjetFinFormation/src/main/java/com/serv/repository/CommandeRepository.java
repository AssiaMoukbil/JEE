package com.serv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serv.entity.Commande;

@Repository
public interface CommandeRepository extends JpaRepository<Commande,Long>{

}
