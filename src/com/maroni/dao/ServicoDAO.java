package com.maroni.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.Query;

import com.maroni.model.Servico;
import com.maroni.util.dao.DAO;

@Stateless
public class ServicoDAO extends DAO<Servico> {
	private static final long serialVersionUID = 4930929234935234811L;

	public ServicoDAO() {
		super(Servico.class);
	}
	
	@SuppressWarnings("unchecked")
	public List<Servico> buscarParaPaginacao(int quantidade, int quantidadeMaximaPorPagina) {
		String jpql = "select s from Servico s";
		Query query = entityManager.createQuery(jpql);
		query.setFirstResult(quantidade);
		query.setMaxResults(quantidadeMaximaPorPagina);
		return query.getResultList();
	}
	
	public Number quantidadeDestaque() {
		String jpql = "SELECT COUNT(s.id) FROM Servico s";
		Query query = entityManager.createQuery(jpql);
		return (Number) query.getSingleResult();
	}
}
