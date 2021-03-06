package com.maroni.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import com.maroni.util.util.DimensoesImagem;

/**
 * The persistent class for the produto database table.
 */

@XmlType(name = "Produto", propOrder = { "id", "titulo", "descricao", "imagem", "status", "dataCadastro", "dimensoes" })
@XmlRootElement
@Entity
@Table(name = "produto")
public class Produto implements Serializable {
	private static final long serialVersionUID = 8907088963278721216L;

	@Id
	private int id;

	@Column(name = "data_cadastro")
	private Date dataCadastro;

	@Lob
	private String descricao;

	private String imagem;

	private String titulo;

	private byte status;

	@Transient
	private DimensoesImagem dimensoes;

	public Produto() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDataCadastro() {
		return this.dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public String getDescricao() {
		return this.descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getImagem() {
		return this.imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getTitulo() {
		return this.titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public byte getStatus() {
		return this.status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	/**
	 * @return the dimensoes
	 */
	public DimensoesImagem getDimensoes() {
		return dimensoes;
	}

	/**
	 * @param dimensoes the dimensoes to set
	 */
	public void setDimensoes(DimensoesImagem dimensoes) {
		this.dimensoes = dimensoes;
	}

	/*
	 * (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	/*
	 * (non-Javadoc)
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
		Produto other = (Produto) obj;
		if (id != other.id)
			return false;
		return true;
	}
}