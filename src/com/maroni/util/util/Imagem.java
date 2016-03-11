package com.maroni.util.util;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.UUID;

import org.apache.commons.codec.binary.Base64;

public class Imagem {

	private String nomeImagem;
	private static String baseImage = "";

	public String gerarNomeImagemComExtensao(String extensao) {
		return this.nomeImagem = UUID.randomUUID().toString() + extensao;
	}
	
	public InputStream converterBase64ParaImagem(String base64) throws FileNotFoundException{
		byte[] data = Base64.decodeBase64(base64.getBytes());
		try (OutputStream stream = new FileOutputStream("c:/decode/abc.bmp")) {
		    stream.write(data);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * @return the nomeImagem
	 */
	public String getNomeImagem() {
		return nomeImagem;
	}
}
