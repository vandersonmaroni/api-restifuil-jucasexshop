package com.maroni.dao;

import javax.ejb.Stateless;

import com.maroni.model.Servico;
import com.maroni.util.dao.DAO;

@Stateless
public class ServicoDAO extends DAO<Servico> {
	private static final long serialVersionUID = 4930929234935234811L;

	public ServicoDAO() {
		super(Servico.class);
	}
}
