package com.maroni.dao;

import javax.ejb.Stateless;

import com.maroni.model.Produto;
import com.maroni.util.dao.DAO;

@Stateless
public class ProdutoDAO extends DAO<Produto> {
	private static final long serialVersionUID = -5403512126330726149L;

	public ProdutoDAO() {
		super(Produto.class);
	}
}
