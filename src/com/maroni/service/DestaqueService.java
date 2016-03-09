package com.maroni.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;

import com.maroni.dao.DestaqueDAO;
import com.maroni.model.Destaque;

public class DestaqueService implements Serializable {
	private static final long serialVersionUID = -6796482394996254972L;

	@Inject
	private DestaqueDAO dao;

	public void save(Destaque destaque) {
		dao.save(destaque);
	}

	public void update(Destaque destaque) {
		dao.update(destaque);
	}

	public void delete(int id) {
		dao.delete(id, Destaque.class);
	}

	public Destaque findById(int id) {
		return dao.findById(id);
	}

	public List<Destaque> findAll() {
		return dao.findAll();
	}

	public List<Destaque> buscarParaPaginacao(int quantidade, int quantidadeMaximaPorPagina) {
		return dao.buscarParaPaginacao(quantidade,quantidadeMaximaPorPagina);
	}
	
	public Number quantidadeDestaque(){
		return dao.quantidadeDestaque();
	}
}
