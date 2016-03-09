package com.maroni.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.Query;

import com.maroni.model.Produto;
import com.maroni.util.dao.DAO;

@Stateless
public class ProdutoDAO extends DAO<Produto> {
	private static final long serialVersionUID = -5403512126330726149L;

	public ProdutoDAO() {
		super(Produto.class);
	}
	
	@SuppressWarnings("unchecked")
	public List<Produto> buscarParaPaginacao(int quantidade, int quantidadeMaximaPorPagina) {
		String jpql = "select p from Produto p";
		Query query = entityManager.createQuery(jpql);
		query.setFirstResult(quantidade);
		query.setMaxResults(quantidadeMaximaPorPagina);
		return query.getResultList();
	}
	
	public Number quantidadeDestaque() {
		String jpql = "SELECT COUNT(p.id) FROM Produto p";
		Query query = entityManager.createQuery(jpql);
		return (Number) query.getSingleResult();
	}
}
