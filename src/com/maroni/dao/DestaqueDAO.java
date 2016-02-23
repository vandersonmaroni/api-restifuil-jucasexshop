package com.maroni.dao;

import javax.ejb.Stateless;

import com.maroni.model.Destaque;
import com.maroni.util.dao.DAO;

@Stateless
public class DestaqueDAO extends DAO<Destaque> {
	private static final long serialVersionUID = -6925534192437090234L;

	public DestaqueDAO() {
		super(Destaque.class);
		// TODO Auto-generated constructor stub
	}
}