package com.serv.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.serv.entity.Client;
import com.serv.entity.Commande;
import com.serv.repository.ClientRepository;

@Service
public class ClientService {
	
	@Autowired
    private ClientRepository clientRepository;

    public Client insertClient(Client client) {
        return clientRepository.save(client);
    }

    public Client getClientById(Long id) {
        return clientRepository.findById(id).get();
    }
    

    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    public void deleteClient(Long id) {
    	clientRepository.deleteById(id);
    }
    
    public Client updateClient(Client client, Long id) {
    	Client client1  = clientRepository.findById(id).get();
    	client1 = client;
    	client1.setIdClient(id);
        return clientRepository.save(client1);
    }
    
    public List<Commande> getCommandesByClient(Long id){
		return this.getClientById(id).getCommandes();
    }
    
    public List<Client> searchClients(String keyword) {
        return clientRepository.findByNomClientContainingOrPrenomClientContaining(keyword, keyword);
    }

}
