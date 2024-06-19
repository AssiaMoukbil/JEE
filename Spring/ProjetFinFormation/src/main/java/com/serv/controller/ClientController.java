package com.serv.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.serv.entity.Client;
import com.serv.entity.Commande;
import com.serv.service.ClientService;

@RestController
@RequestMapping("/clients")
@CrossOrigin(origins = "*")
public class ClientController {

	 @Autowired
	 private ClientService clientService;

	 @GetMapping("/findAll")
	 List<Client> findAll(){
		 return clientService.getClients();
	 }
	 
	 @GetMapping("/findById/{id}")
	 Client findById(@PathVariable Long id){
		 return clientService.getClientById(id);
	 }
	    
	 @GetMapping("/delete/{id}")
	 public void delete(@PathVariable Long id){
		 clientService.deleteClient(id);
	 }

	 @PostMapping("/insert")
	 public Client insert(@RequestBody  Client client){
		 return clientService.insertClient(client);
	 }
	    
	 @PostMapping("/update/{id}")
	 public Client update(@RequestBody  Client client , @PathVariable Long id) {
		 return clientService.updateClient(client, id);
	 }
	 
	 @GetMapping("/commandes/{id}")
	 public List<Commande> getCommandes(@PathVariable Long id){
		return clientService.getCommandesByClient(id);
		 
	 }
	 
	 @GetMapping("/search")
	 public List<Client> searchClients(@RequestParam String keyword) {
		 return clientService.searchClients(keyword);
	 }
}
