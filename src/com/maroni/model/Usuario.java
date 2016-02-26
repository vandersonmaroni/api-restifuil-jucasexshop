package com.maroni.model;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import org.json.JSONObject;


/**
 * The persistent class for the usuario database table.
 * 
 */
@XmlType(name = "Usuario", propOrder = { "id", "nome", "login", "senha", "token", "status", "dataCadastro" })
@XmlRootElement
@Entity
@Table(name="usuario")
public class Usuario implements Serializable {
	private static final long serialVersionUID = -1299322741559373520L;

	@Id
	private int id;

	@Column(name="data_cadastro")
	private Timestamp dataCadastro;

	private String login;

	private String nome;

	private String senha;

	private byte status;

	private String token;

	public Usuario() {
	}
	public Usuario(JSONObject usuarioJSON) {
		this.id = Integer.parseInt(String.valueOf(usuarioJSON.get("idUsuario")));
		this.login = String.valueOf(usuarioJSON.get("username"));
		this.senha = String.valueOf(usuarioJSON.get("password"));
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Timestamp getDataCadastro() {
		return this.dataCadastro;
	}

	public void setDataCadastro(Timestamp dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public String getLogin() {
		return this.login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getNome() {
		return this.nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return this.senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public byte getStatus() {
		return this.status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	public String getToken() {
		return this.token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	public String toJSON() {
		JSONObject usuario = new JSONObject();
		usuario.put("username", login);
		usuario.put("password", senha);
		return usuario.toString();
	}
}