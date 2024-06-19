package com.serv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.serv.entity.Produit;

@Repository
public interface ProduitRepository extends JpaRepository<Produit,Long>{

}
