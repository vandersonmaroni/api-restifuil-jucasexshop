package com.maroni.util.dao;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaQuery;

import com.maroni.util.annotation.Transacional;

/**
 * DAO genérico com JPA utilizando CMT e interceptador
 * @author Marcos Toledo | 06/11/2015
 * @param <T> entidade modelo
 */
public class DAO<T> implements Serializable {
	private static final long serialVersionUID = -1346304670895222289L;

	private final Class<T> classe;
	@Inject
	protected EntityManager entityManager;

	public DAO(Class<T> classe) {
		this.classe = classe;
	}

	@Transacional
	public void save(T entity) {
		entityManager.persist(entity);
	}

	@Transacional
	public T update(T entity) {
		return entityManager.merge(entity);
	}

	@Transacional
	public void delete(Object id, Class<T> classe) {
		T entityToBeRemoved = entityManager.getReference(classe, id);
		entityManager.remove(entityToBeRemoved);
	}

	public T findById(int id) {
		return entityManager.find(classe, id);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<T> findAll() {
		CriteriaQuery criteriaQuery = entityManager.getCriteriaBuilder().createQuery();
		criteriaQuery.select(criteriaQuery.from(classe));
		return entityManager.createQuery(criteriaQuery).getResultList();
	}
}
