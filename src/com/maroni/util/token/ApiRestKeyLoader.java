package com.maroni.util.token;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;

/**
 * Algorítimo da criptografia da chave
 * @author Nicolas Ibanheiz | 11/09/2015
 */
public class ApiRestKeyLoader {

	private static final String KEY_ALGORITHM = "RSA";

	/**
	 * Importa a chave pública utilizada no token da API REST
	 * @author Nicolas Ibanheiz | 11/09/2015
	 * @return secutiry public key
	 * @throws IOException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeySpecException
	 */
	public PublicKey loadPublicKey() throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
		File filePublicKey = new File(KeyConstants.PATH + File.separator + KeyConstants.PUBLIC_KEY);
		FileInputStream fis = new FileInputStream(KeyConstants.PATH + File.separator + KeyConstants.PUBLIC_KEY);
		byte[] encodedPublicKey = new byte[(int) filePublicKey.length()];
		fis.read(encodedPublicKey);
		fis.close();

		KeyFactory keyFactory = KeyFactory.getInstance(KEY_ALGORITHM);
		X509EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(encodedPublicKey);
		return keyFactory.generatePublic(publicKeySpec);
	}

	/**
	 * Importa a chave private utilizada no token da API REST
	 * @author Nicolas Ibanheiz | 11/09/2015
	 * @return secutiry public key
	 * @throws IOException
	 * @throws NoSuchAlgorithmException
	 * @throws InvalidKeySpecException
	 */
	public PrivateKey loadPrivateKey() throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
		File filePrivateKey = new File(KeyConstants.PATH + File.separator + KeyConstants.PRIVATE_KEY);
		FileInputStream fis = new FileInputStream(KeyConstants.PATH + File.separator + KeyConstants.PRIVATE_KEY);
		byte[] encodedPrivateKey = new byte[(int) filePrivateKey.length()];
		fis.read(encodedPrivateKey);
		fis.close();

		KeyFactory keyFactory = KeyFactory.getInstance(KEY_ALGORITHM);
		PKCS8EncodedKeySpec privateKeySpec = new PKCS8EncodedKeySpec(encodedPrivateKey);
		return keyFactory.generatePrivate(privateKeySpec);
	}
	
	/**
	 * @author Nicolas Ibanheiz | 11/09/2015
	 * @return String ID da geração do JWT
	 */
	public String getJWTId() {
		return KeyConstants.JWK_ID;
	}
}
