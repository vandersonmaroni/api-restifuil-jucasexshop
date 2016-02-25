package com.maroni.service;

import java.io.Serializable;
import java.util.List;

import javax.inject.Inject;

import com.maroni.dao.UsuarioDAO;
import com.maroni.model.Usuario;

public class UsuarioService implements Serializable{
	private static final long serialVersionUID = 6270168608293379934L;

	@Inject
	private UsuarioDAO dao;
	
	public void save(Usuario usuario){
		dao.save(usuario);
	}
	
	public void update(Usuario usuario){
		dao.update(usuario);
	}
	
	public void delete(int id){
		dao.delete(id,Usuario.class);
	}
	
	public Usuario findById(int id){
		return dao.findById(id);
	}
	
	public List<Usuario> findAll(){
		return dao.findAll();
	}
}
