package com.serv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serv.entity.Fournisseur;
import com.serv.entity.Produit;
import com.serv.repository.FournisseurRepository;

@Service
public class FournisseurService {

	@Autowired
    private FournisseurRepository fournisseurRepository;

    public Fournisseur insertFournisseur(Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur);
    }

    public Fournisseur getFournisseurById(Long id) {
        return fournisseurRepository.findById(id).get();
    }
    

    public List<Fournisseur> getFournisseurs() {
        return fournisseurRepository.findAll();
    }

    public void deleteFournisseur(Long id) {
    	List<Produit> produits = this.getProuduitsByFournisseur(id);
        if (produits.isEmpty()) {
            fournisseurRepository.deleteById(id);
        } else {
            throw new RuntimeException("Cannot delete fournisseur with id :: " + id + " as it has associated products.");
        }
    }
    
    public Fournisseur updateFournisseur(Fournisseur fournisseur, Long id) {
    	Fournisseur fournisseur1  = fournisseurRepository.findById(id).get();
    	fournisseur1 = fournisseur;
    	fournisseur1.setIdFournisseurr(id);
        return fournisseurRepository.save(fournisseur1);
    }
    
    public List<Produit> getProuduitsByFournisseur(Long id){
		return this.getFournisseurById(id).getProduits();
    	
    }
}
