package com.maroni.dao;

import javax.ejb.Stateless;
import javax.persistence.Query;
import com.maroni.model.Usuario;
import com.maroni.util.dao.DAO;

@Stateless
public class UsuarioDAO extends DAO<Usuario> {
	private static final long serialVersionUID = 8744469790784845738L;

	public UsuarioDAO() {
		super(Usuario.class);
	}

	public Usuario buscarPorLoginSenha(String login, String senha) {
		Usuario usuario = null;

		try {
			String hql = "SELECT u FROM Usuario u WHERE u.login = :login AND u.senha = :senha";
			Query query = entityManager.createQuery(hql);
			query.setParameter("login", login);
			query.setParameter("senha", senha);
			usuario = (Usuario) query.getSingleResult();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return usuario;
	}
}
