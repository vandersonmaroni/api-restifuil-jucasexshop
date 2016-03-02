package com.maroni.model;

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * The persistent class for the destaque database table.
 * 
 */

@XmlType(name = "Destaque", propOrder = { "id", "titulo", "descricao", "imagem", "status", "dataCadastro" })
@XmlRootElement
@Entity
@Table(name="destaque")
public class Destaque implements Serializable {
	private static final long serialVersionUID = -2009479346562431055L;

	@Id
	private int id;

	@Column(name="data_cadastro")
	
	private Date dataCadastro;

	@Lob
	private String descricao;

	private String imagem;

	private byte status;

	private String titulo;

	public Destaque() {
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

	public void setDataCadastro(String dataCadastro) {
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
        format.setLenient(false);
        try {
        	this.dataCadastro = format.parse(dataCadastro);
        } catch (ParseException ex) {
            ex.printStackTrace();
        }
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

	public byte getStatus() {
		return this.status;
	}

	public void setStatus(byte status) {
		this.status = status;
	}

	public String getTitulo() {
		return this.titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
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
		Destaque other = (Destaque) obj;
		if (id != other.id)
			return false;
		return true;
	}
}