package com.maroni.util.util;

import java.io.Serializable;

public class DimensoesImagem implements Serializable {
	private static final long serialVersionUID = 1631872295227745456L;
	
	private double height;
	private double width;
	private double x1;
	private double x2;
	private double y1;
	private double y2;

	/**
	 * @return the height
	 */
	public double getHeight() {
		return height;
	}

	/**
	 * @param height the height to set
	 */
	public void setHeight(double height) {
		this.height = height;
	}

	/**
	 * @return the width
	 */
	public double getWidth() {
		return width;
	}

	/**
	 * @param width the width to set
	 */
	public void setWidth(double width) {
		this.width = width;
	}

	/**
	 * @return the x1
	 */
	public double getX1() {
		return x1;
	}

	/**
	 * @param x1 the x1 to set
	 */
	public void setX1(double x1) {
		this.x1 = x1;
	}

	/**
	 * @return the x2
	 */
	public double getX2() {
		return x2;
	}

	/**
	 * @param x2 the x2 to set
	 */
	public void setX2(double x2) {
		this.x2 = x2;
	}

	/**
	 * @return the y1
	 */
	public double getY1() {
		return y1;
	}

	/**
	 * @param y1 the y1 to set
	 */
	public void setY1(double y1) {
		this.y1 = y1;
	}

	/**
	 * @return the y2
	 */
	public double getY2() {
		return y2;
	}

	/**
	 * @param y2 the y2 to set
	 */
	public void setY2(double y2) {
		this.y2 = y2;
	}

	@Override
	public String toString() {
		return " [heigth] : " + this.height + " [width] : " + this.width + " [x1] : " + this.x1 + " [x2] : " + this.x2 + " [y1] : " + this.y1 + " [y2] : " + this.y2;
	}
}
