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

import com.serv.entity.Fournisseur;
import com.serv.entity.Produit;
import com.serv.service.FournisseurService;

@RestController
@RequestMapping("/fournisseurs")
@CrossOrigin(origins = "*")
public class FournisseurController {

	@Autowired
	 private FournisseurService fournisseurService;

	 @GetMapping("/findAll")
	 List<Fournisseur> findAll(){
		 return fournisseurService.getFournisseurs();
	 }
	 
	 @GetMapping("/findById/{id}")
	 Fournisseur findById(@PathVariable Long id){
		 return fournisseurService.getFournisseurById(id);
	 }
	    
	 @GetMapping("/delete/{id}")
	 public void delete(@PathVariable Long id){
		 fournisseurService.deleteFournisseur(id);
	 }

	 @PostMapping("/insert")
	 public Fournisseur insert(@RequestBody  Fournisseur fournisseur){
		 return fournisseurService.insertFournisseur(fournisseur);
	 }
	    
	 @PostMapping("/update/{id}")
	 public Fournisseur update(@RequestBody  Fournisseur fournisseur , @PathVariable Long id) {
		 return fournisseurService.updateFournisseur(fournisseur, id);
	 }
	 
	 @GetMapping("/produits/{id}")
	 public List<Produit> getProduitsByFournisseur(@PathVariable Long id){
		return fournisseurService.getProuduitsByFournisseur(id);
		 
	 }
}
