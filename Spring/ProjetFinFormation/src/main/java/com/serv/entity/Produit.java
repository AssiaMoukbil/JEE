package com.serv.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Produit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idProduit;
	private String nomProduit;
	private Integer quantiteStock;
	private double  prix;
	
	@ManyToOne
    private Fournisseur fournisseur;
	
	@OneToMany(mappedBy = "produit")
	@JsonIgnore
	private List<LigneDeCommandes> ligneDeCommandes = new ArrayList<>();
}
