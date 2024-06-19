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

import com.serv.entity.LigneDeCommandes;
import com.serv.service.LigneDeCommandesService;

@RestController
@RequestMapping("/LDC")
@CrossOrigin(origins = "*")
public class LigneDeCommandesController {

	@Autowired
	 private LigneDeCommandesService ligneDeCommandesService;

	 @GetMapping("/findAll")
	 List<LigneDeCommandes> findAll(){
		 return ligneDeCommandesService.getLigneDeCommandes();
	 }
	 
	 @GetMapping("/findById/{id}")
	 LigneDeCommandes findById(@PathVariable Long id){
		 return ligneDeCommandesService.getLigneDeCommandeById(id);
	 }
	    
	 @GetMapping("/delete/{id}")
	 public void delete(@PathVariable Long id){
		 ligneDeCommandesService.deleteLigneDeCommande(id);
	 }

	 @PostMapping("/insert")
	 public LigneDeCommandes insert(@RequestBody  LigneDeCommandes ligneDeCommande){
		 return ligneDeCommandesService.insertLigneDeCommande(ligneDeCommande);
	 }
	    
	 @PostMapping("/update/{id}")
	 public LigneDeCommandes update(@RequestBody  LigneDeCommandes ligneDeCommande , @PathVariable Long id) {
		 return ligneDeCommandesService.updateLigneDeCommande(ligneDeCommande, id);
	 }
}
