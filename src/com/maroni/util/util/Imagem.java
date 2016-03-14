package com.maroni.util.util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.apache.commons.codec.binary.Base64;

public class Imagem {

	private String nomeImagem;
	private static String baseImage = System.getProperty("dir.imagens");

	private String gerarNomeImagemComExtensao(String extensao) {
		return this.nomeImagem = UUID.randomUUID().toString() + "." + extensao;
	}

	private static String getExtensaoForBase64(String base64) {
		String[] splitBase64 = base64.split("/");
		String[] split = splitBase64[1].split(";");
		return split[0];
	}
	
	private static byte[] getBytesForBase64(String base64){
		String[] splitBase64 = base64.split(",");
		return splitBase64[1].getBytes();
	}

	public String converterBase64ParaImagem(String base64) {
		String nomeDoArquivo = gerarNomeImagemComExtensao(getExtensaoForBase64(base64));
		String arquivo = baseImage+nomeDoArquivo;
		byte[] imgBytes = Base64.decodeBase64(getBytesForBase64(base64));
		InputStream in = new ByteArrayInputStream(imgBytes);
		try {
			BufferedImage bImageFromConvert = ImageIO.read(in);
			ImageIO.write(bImageFromConvert, getExtensaoForBase64(base64), new File(arquivo));
		} catch (IOException e) {
			e.printStackTrace();
		}
		return nomeDoArquivo;
	}

	/**
	 * @return the nomeImagem
	 */
	public String getNomeImagem() {
		return nomeImagem;
	}

	/**
	 * @return the baseImage
	 */
	public static String getBaseImage() {
		return baseImage;
	}
}