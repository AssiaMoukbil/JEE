package com.serv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serv.entity.Commande;
import com.serv.entity.LigneDeCommandes;
import com.serv.repository.CommandeRepository;

@Service
public class CommandeService {

	@Autowired
    private CommandeRepository commandeRepository;

    public Commande insertCommande(Commande commande) {
        return commandeRepository.save(commande);
    }

    public Commande getCommandeById(Long id) {
        return commandeRepository.findById(id).get();
    }
    

    public List<Commande> getCommandes() {
        return commandeRepository.findAll();
    }

    public void deleteCommande(Long id) {
    	commandeRepository.deleteById(id);
    }
    
    public Commande updateCommande(Commande commande, Long id) {
    	Commande commande1  = commandeRepository.findById(id).get();
    	commande1 = commande;
    	commande1.setIdCommande(id);
        return commandeRepository.save(commande1);
    }
    
    public List<LigneDeCommandes> getLigneDeCommandesByCommande(Long id){
		return this.getCommandeById(id).getLigneDeCommandes();
    	
    }
}
