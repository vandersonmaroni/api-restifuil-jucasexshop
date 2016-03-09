package com.maroni.model;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlType(name = "Destaque")
@XmlRootElement
public class JsonTotal implements Serializable{
	private static final long serialVersionUID = -6624072655884924821L;

	private Long total;

	/**
	 * @return the total
	 */
	public Long getTotal() {
		return total;
	}

	/**
	 * @param total the total to set
	 */
	public void setTotal(Long total) {
		this.total = total;
	}
}
