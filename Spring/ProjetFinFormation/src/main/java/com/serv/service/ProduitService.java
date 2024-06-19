package com.serv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serv.entity.LigneDeCommandes;
import com.serv.entity.Produit;
import com.serv.repository.ProduitRepository;

@Service
public class ProduitService {

	@Autowired
    private ProduitRepository produitRepository;

    public Produit insertProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    public Produit getProduitById(Long id) {
        return produitRepository.findById(id).get();
    }
    

    public List<Produit> getProduits() {
        return produitRepository.findAll();
    }

    public void deleteProduit(Long id) {
    	List<LigneDeCommandes> LigneDeCommandes = this.getLigneDeCommandesByProduit(id);
        if (LigneDeCommandes.isEmpty()) {
            produitRepository.deleteById(id);
        } else {
            throw new RuntimeException("Cannot delete fournisseur with id :: " + id + " as it has associated products.");
        }
    }
    
    private List<LigneDeCommandes> getLigneDeCommandesByProduit(Long id) {
		return this.getProduitById(id).getLigneDeCommandes();
	}

	public Produit updateProduit(Produit produit, Long id) {
    	Produit produit1  = produitRepository.findById(id).get();
    	produit1 = produit;
    	produit1.setIdProduit(id);
        return produitRepository.save(produit1);
    }
}
