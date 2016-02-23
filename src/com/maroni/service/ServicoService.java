package com.maroni.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;

import com.maroni.dao.ServicoDAO;
import com.maroni.model.Servico;

public class ServicoService implements Serializable{
	private static final long serialVersionUID = -8109356299590468053L;

	@Inject
	private ServicoDAO dao;
	
	public void save(Servico servico){
		dao.save(servico);
	}
	
	public void update(Servico servico){
		dao.update(servico);
	}
	
	public void delete(int id){
		dao.delete(id,Servico.class);
	}
	
	public Servico findById(int id){
		return dao.findById(id);
	}
	
	public List<Servico> findAll(){
		return dao.findAll();
	}
}
