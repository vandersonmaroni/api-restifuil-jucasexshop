package com.maroni.dao;

import javax.ejb.Stateless;

import com.maroni.model.Usuario;
import com.maroni.util.dao.DAO;

@Stateless
public class UsuarioDAO extends DAO<Usuario> {
	private static final long serialVersionUID = 8744469790784845738L;

	public UsuarioDAO() {
		super(Usuario.class);
	}
}
