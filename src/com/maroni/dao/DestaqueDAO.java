package com.maroni.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.Query;

import com.maroni.model.Destaque;
import com.maroni.util.dao.DAO;

@Stateless
public class DestaqueDAO extends DAO<Destaque> {
	private static final long serialVersionUID = -6925534192437090234L;

	public DestaqueDAO() {
		super(Destaque.class);
		// TODO Auto-generated constructor stub
	}

	@SuppressWarnings("unchecked")
	public List<Destaque> buscarParaPaginacao(int quantidade, int quantidadeMaximaPorPagina) {
		String jpql = "select d from Destaque d";
		Query query = entityManager.createQuery(jpql);
		query.setFirstResult(quantidade);
		query.setMaxResults(quantidadeMaximaPorPagina);
		return query.getResultList();
	}

	public Number quantidadeDestaque() {
		String jpql = "SELECT COUNT(d.id) FROM Destaque d";
		Query query = entityManager.createQuery(jpql);
		return (Number) query.getSingleResult();
	}
}