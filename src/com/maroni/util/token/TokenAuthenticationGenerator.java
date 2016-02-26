package com.maroni.util.token;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.InvalidKeySpecException;

import org.jose4j.jws.AlgorithmIdentifiers;
import org.jose4j.jws.JsonWebSignature;
import org.jose4j.jwt.JwtClaims;
import org.jose4j.jwt.consumer.InvalidJwtException;
import org.jose4j.jwt.consumer.JwtConsumer;
import org.jose4j.jwt.consumer.JwtConsumerBuilder;
import org.jose4j.lang.JoseException;
import org.json.JSONObject;

import com.maroni.model.Usuario;

/**
 * Encode e Decode do JSON Web Token
 * @author Nicolas Ibanheiz | 11/09/2015
 */
public class TokenAuthenticationGenerator {

	/**
	 * Idenfiticador de quem está criando o token
	 * @author Nicolas Ibanheiz | 11/09/2015
	 */
	private static final String ISSUER = "API-RESTFUL";

	/**
	 * Identificador do destino do token
	 * @author Nicolas Ibanheiz | 11/09/2015
	 */
	private static final String AUDIENCE = "SEX-SHOP-JUCA";

	/**
	 * Para que o Token serve
	 * @author Nicolas Ibanheiz | 11/09/2015
	 */
	private static final String SUBJECT = "User Authentication";

	/**
	 * Tempo de expiração do token
	 * @author Nicolas Ibanheiz | 11/09/2015
	 */
	private static final int ONE_MONTH_IN_MINUTES = 43800;

	private static ApiRestKeyLoader keyLoader = new ApiRestKeyLoader();

	/**
	 * Gera um Json Web Token com os dados do usuário recebido
	 * @author Nicolas Ibanheiz | 11/09/2015
	 * @param usuario com username e password
	 * @return token
	 * @throws JoseException
	 * @throws IOException
	 * @throws InvalidKeySpecException
	 * @throws NoSuchAlgorithmException
	 */
	public static String createToken(JSONObject usuario) throws JoseException, NoSuchAlgorithmException, InvalidKeySpecException, IOException {
		PrivateKey privateKey = keyLoader.loadPrivateKey();

		JwtClaims claims = new JwtClaims();
		claims.setIssuer(ISSUER);
		claims.setAudience(AUDIENCE);
		claims.setExpirationTimeMinutesInTheFuture(ONE_MONTH_IN_MINUTES);
		claims.setGeneratedJwtId();
		claims.setIssuedAtToNow();
		claims.setNotBeforeMinutesInThePast(2);
		claims.setSubject(SUBJECT);
		claims.setStringListClaim("user", usuario.toString());

		JsonWebSignature jws = new JsonWebSignature();
		jws.setPayload(claims.toJson());
		jws.setKey(privateKey);
		jws.setKeyIdHeaderValue(keyLoader.getJWTId());
		jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);

		return jws.getCompactSerialization();
	}

	/**
	 * Recupera as informações do usuário do Token recebido
	 * @author Nicolas Ibanheiz | 11/09/2015
	 * @param token
	 * @return JSON value do usuário
	 * @throws IOException 
	 * @throws InvalidKeySpecException 
	 * @throws NoSuchAlgorithmException 
	 * @throws InvalidJwtException 
	 */
	public static String getUserJsonFromToken(String token) throws NoSuchAlgorithmException, InvalidKeySpecException, IOException, InvalidJwtException {
		PublicKey publicKey = keyLoader.loadPublicKey();

		JwtConsumer jwtConsumer = new JwtConsumerBuilder()
				.setRequireExpirationTime()
				.setAllowedClockSkewInSeconds(30)
				.setRequireSubject()
				.setExpectedIssuer(ISSUER)
				.setExpectedAudience(AUDIENCE)
				.setVerificationKey(publicKey)
				.build();

		JwtClaims jwtClaims = jwtConsumer.processToClaims(token);

		return jwtClaims.getClaimValue("user").toString().replace("[", "").replace("]", "");
	}
	
	/**
	 * @author Nicolas Ibanheiz | 14/09/2015
	 * @return JSONObject com as informações necessárias do Usuário
	 */
	public static JSONObject getJsonFromUsuario(Usuario usuario) {
		JSONObject usuarioJSON = new JSONObject();
		usuarioJSON.put("idUsuario", usuario.getId());
		usuarioJSON.put("username", usuario.getLogin());
		usuarioJSON.put("password", usuario.getSenha());
		return usuarioJSON;
	}
}
