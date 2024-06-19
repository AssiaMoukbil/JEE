package com.serv.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.serv.entity.Commande;
import com.serv.entity.LigneDeCommandes;
import com.serv.service.CommandeService;

@RestController
@RequestMapping("/commandes")
@CrossOrigin(origins = "*")
public class CommandeController {

	@Autowired
	 private CommandeService commandeService;

	 @GetMapping("/findAll")
	 public List<Commande> findAll(){
		 return commandeService.getCommandes();
	 }
	 
	 @GetMapping("/findById/{id}")
	 public Commande findById(@PathVariable Long id){
		 return commandeService.getCommandeById(id);
	 }
	    
	 @GetMapping("/delete/{id}")
	 public void delete(@PathVariable Long id){
		 commandeService.deleteCommande(id);
	 }

	 @PostMapping("/insert")
	 public Commande insert(@RequestBody  Commande commande){
		 return commandeService.insertCommande(commande);
	 }
	    
	 @PostMapping("/update/{id}")
	 public Commande update(@RequestBody  Commande commande , @PathVariable Long id) {
		 return commandeService.updateCommande(commande, id);
	 }
	 
	 @GetMapping("/LDC/{id}")
	 public List<LigneDeCommandes> getLigneDeCommandes(@PathVariable Long id){
		return commandeService.getLigneDeCommandesByCommande(id);
		 
	 }
}
