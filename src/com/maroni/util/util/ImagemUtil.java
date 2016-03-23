package com.maroni.util.util;

import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.apache.commons.codec.binary.Base64;

import com.maroni.TiposDeClassesEnum;

public class ImagemUtil {

	private String nomeImagem;
	private static final String BASE_DE_IMAGEM = System.getProperty("dir.imagens");

	/**
	 * @author Vanderson Maroni | 23/03/2016
	 * @param extensao
	 * @return
	 */
	private String gerarNomeImagemComExtensao(String extensao) {
		return this.nomeImagem = UUID.randomUUID().toString() + "." + extensao;
	}

	/**
	 * @author Vanderson Maroni | 23/03/2016
	 * @param base64
	 * @return
	 */
	private static String getExtensaoForBase64(String base64) {
		String[] splitBase64 = base64.split("/");
		String[] split = splitBase64[1].split(";");
		return split[0];
	}

	/**
	 * @author Vanderson Maroni | 23/03/2016
	 * @param base64
	 * @return
	 */
	private static byte[] getBytesForBase64(String base64) {
		String[] splitBase64 = base64.split(",");
		return splitBase64[1].getBytes();
	}

	public String geraImagem(String base64, DimensoesImagem dimensoesImagem, TiposDeClassesEnum tiposDeClassesEnum) {
		String nomeDoArquivo = gerarNomeImagemComExtensao(getExtensaoForBase64(base64));
		String arquivo = BASE_DE_IMAGEM + nomeDoArquivo;
		byte[] imgBytes = Base64.decodeBase64(getBytesForBase64(base64));
		InputStream in = new ByteArrayInputStream(imgBytes);
		try {
			criaERecortaImagem(base64, dimensoesImagem, arquivo, in, tiposDeClassesEnum);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return nomeDoArquivo;
	}

	/**
	 * @author Vanderson Maroni | 23/03/2016
	 * @param base64
	 * @param dimensoesImagem
	 * @param arquivo
	 * @param in
	 * @throws IOException
	 */
	private void criaERecortaImagem(String base64, DimensoesImagem dimensoesImagem, String arquivo, InputStream in, TiposDeClassesEnum tiposDeClassesEnum) throws IOException {
		BufferedImage imageConvert = ImageIO.read(in);
		BufferedImage imagemAux = new BufferedImage(tiposDeClassesEnum.getWidth(), tiposDeClassesEnum.getHeigth(), imageConvert.getType());
		Graphics2D g2d = imagemAux.createGraphics();
		g2d.drawImage(imageConvert, 0, 0, tiposDeClassesEnum.getWidth(), tiposDeClassesEnum.getHeigth(), dimensoesImagem.getX1(), dimensoesImagem.getY1(), dimensoesImagem.getX2(),
				dimensoesImagem.getY2(), null);
		g2d.dispose();
		ImageIO.write(imagemAux, getExtensaoForBase64(base64), new File(arquivo));
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
		return BASE_DE_IMAGEM;
	}

}