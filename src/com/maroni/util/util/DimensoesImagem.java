package com.maroni.util.util;

import java.io.Serializable;

public class DimensoesImagem implements Serializable {
	private static final long serialVersionUID = 1631872295227745456L;
	
	private int height;
	private int width;
	private int x1;
	private int x2;
	private int y1;
	private int y2;

	/**
	 * @return the height
	 */
	public int getHeight() {
		return height;
	}



	/**
	 * @param height the height to set
	 */
	public void setHeight(int height) {
		this.height = height;
	}



	/**
	 * @return the width
	 */
	public int getWidth() {
		return width;
	}



	/**
	 * @param width the width to set
	 */
	public void setWidth(int width) {
		this.width = width;
	}



	/**
	 * @return the x1
	 */
	public int getX1() {
		return x1;
	}



	/**
	 * @param x1 the x1 to set
	 */
	public void setX1(int x1) {
		this.x1 = x1;
	}



	/**
	 * @return the x2
	 */
	public int getX2() {
		return x2;
	}



	/**
	 * @param x2 the x2 to set
	 */
	public void setX2(int x2) {
		this.x2 = x2;
	}



	/**
	 * @return the y1
	 */
	public int getY1() {
		return y1;
	}



	/**
	 * @param y1 the y1 to set
	 */
	public void setY1(int y1) {
		this.y1 = y1;
	}



	/**
	 * @return the y2
	 */
	public int getY2() {
		return y2;
	}



	/**
	 * @param y2 the y2 to set
	 */
	public void setY2(int y2) {
		this.y2 = y2;
	}



	@Override
	public String toString() {
		return " [heigth] : " + this.height + " [width] : " + this.width + " [x1] : " + this.x1 + " [x2] : " + this.x2 + " [y1] : " + this.y1 + " [y2] : " + this.y2;
	}
}
