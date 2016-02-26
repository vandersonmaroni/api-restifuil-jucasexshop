package com.maroni.util.token;
import java.io.File;


public class KeyConstants {

	/**
	 * Diretório das chaves da API REST
	 * @author Nicolas Ibanheiz | 11/09/2015
	 */
	protected static final String PATH = File.separator + "opt" + File.separator + "getlog" + File.separator;
	
	/**
	 * Nome do arquivo da chave públic
	 * @author Nicolas Ibanheiz | 11/09/2015
	 */
	protected static final String PUBLIC_KEY = "rest_public.key";
	
	/**
	 * Nome do arquivo da chave privada
	 * @author Nicolas Ibanheiz | 11/09/2015
	 */
	protected static final String PRIVATE_KEY = "rest_private.key";
	
	/**
	 * ID da chave para os Tokens da plataforma
	 * @author Nicolas Ibanheiz | 11/09/2015
	 */
	protected static final String JWK_ID = "jovegetlog";
	
}
