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

import com.serv.entity.Produit;
import com.serv.service.ProduitService;

@RestController
@RequestMapping("/produits")
@CrossOrigin(origins = "*")
public class ProduitController {

	@Autowired
	 private ProduitService produitService;

	 @GetMapping("/findAll")
	 List<Produit> findAll(){
		 return produitService.getProduits();
	 }
	 
	 @GetMapping("/findById/{id}")
	 Produit findById(@PathVariable Long id){
		 return produitService.getProduitById(id);
	 }
	    
	 @GetMapping("/delete/{id}")
	 public void delete(@PathVariable Long id){
		 produitService.deleteProduit(id);
	 }

	 @PostMapping("/insert")
	 public Produit insert(@RequestBody  Produit produit){
		 return produitService.insertProduit(produit);
	 }
	    
	 @PostMapping("/update/{id}")
	 public Produit update(@RequestBody  Produit produit , @PathVariable Long id) {
		 return produitService.updateProduit(produit, id);
	 }
}
