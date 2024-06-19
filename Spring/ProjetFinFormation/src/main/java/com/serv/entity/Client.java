package com.serv.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idClient;
	private String nomClient;
	private String prenomClient;
	
	@OneToMany(mappedBy = "client")
	@JsonIgnore
	private List<Commande> commandes = new ArrayList<>();
}
