package com.maroni;

public enum TiposDeClassesEnum {

	DESTAQUE(1, "Destaque", 0, 0), PRODUTO(2, "Produto", 397, 209), SERVICO(3, "Serviço", 606, 256);

	private final int id;
	private final String value;
	private final int width;
	private final int heigth;

	TiposDeClassesEnum(int id, String value, int width, int heigth) {
		this.id = id;
		this.value = value;
		this.width = width;
		this.heigth = heigth;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @return the value
	 */
	public String getValue() {
		return value;
	}

	/**
	 * @return the width
	 */
	public int getWidth() {
		return width;
	}

	/**
	 * @return the heigth
	 */
	public int getHeigth() {
		return heigth;
	}

	
	
}
