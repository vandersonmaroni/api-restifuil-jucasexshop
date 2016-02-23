package com.maroni.util.producer;

import java.io.Serializable;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.Disposes;
import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;

@ApplicationScoped
public class JPAProducer implements Serializable {
	
	private static final long serialVersionUID = -4912618139154051691L;
	@PersistenceUnit
	private EntityManagerFactory factory;
	
	@Produces
	@RequestScoped
	public EntityManager criarEntityManager() {
		return factory.createEntityManager();
	}
	
	public void fecharEntityManager(@Disposes EntityManager entityManager) {
		entityManager.close();
	}
}
