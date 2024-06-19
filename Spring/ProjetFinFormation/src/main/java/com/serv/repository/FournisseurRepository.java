package com.serv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serv.entity.Fournisseur;

@Repository
public interface FournisseurRepository extends JpaRepository<Fournisseur,Long>{

}
