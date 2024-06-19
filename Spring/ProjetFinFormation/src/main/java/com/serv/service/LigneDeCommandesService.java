package com.serv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serv.entity.LigneDeCommandes;
import com.serv.repository.LigneDeCommandesRepository;

@Service
public class LigneDeCommandesService {

	@Autowired
    private LigneDeCommandesRepository ligneDeCommandesRepository;

    public LigneDeCommandes insertLigneDeCommande(LigneDeCommandes ligneDeCommandes) {
        return ligneDeCommandesRepository.save(ligneDeCommandes);
    }

    public LigneDeCommandes getLigneDeCommandeById(Long id) {
        return ligneDeCommandesRepository.findById(id).get();
    }
    

    public List<LigneDeCommandes> getLigneDeCommandes() {
        return ligneDeCommandesRepository.findAll();
    }

    public void deleteLigneDeCommande(Long id) {
    	ligneDeCommandesRepository.deleteById(id);
    }
    
    public LigneDeCommandes updateLigneDeCommande(LigneDeCommandes ligneDeCommandes, Long id) {
    	LigneDeCommandes ligneDeCommandes1  = ligneDeCommandesRepository.findById(id).get();
    	ligneDeCommandes1 = ligneDeCommandes;
    	ligneDeCommandes1.setIdLigneDeCommande(id);
        return ligneDeCommandesRepository.save(ligneDeCommandes1);
    }
}
