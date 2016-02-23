package com.maroni.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;

import com.maroni.dao.ProdutoDAO;
import com.maroni.model.Produto;

public class ProdutoService implements Serializable {
	private static final long serialVersionUID = 8113492430481466810L;

	@Inject
	private ProdutoDAO dao;
	
	public void save(Produto produto){
		dao.save(produto);
	}
	
	public void update(Produto produto){
		dao.update(produto);
	}
	
	public void delete(int id){
		dao.delete(id,Produto.class);
	}
	
	public Produto findById(int id){
		return dao.findById(id);
	}
	
	public List<Produto> findAll(){
		return dao.findAll();
	}
}
