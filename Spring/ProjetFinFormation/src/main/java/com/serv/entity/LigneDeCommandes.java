package com.serv.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LigneDeCommandes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idLigneDeCommande;
	private Integer quantite;
	
	@ManyToOne
	private Commande commande;
	
	@ManyToOne
	private Produit produit;
}
