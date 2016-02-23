package com.maroni.util.interception;

import javax.inject.Inject;
import javax.interceptor.AroundInvoke;
import javax.interceptor.Interceptor;
import javax.interceptor.InvocationContext;
import javax.persistence.EntityManager;

import com.maroni.util.annotation.Transacional;

/**
 * Interceptor transacional
 * @author Marcos Toledo | 06/11/2015
 */
@Interceptor
@Transacional
public class TransacionalInterceptor {
	
	@Inject
	private EntityManager entityManager;
	
	@AroundInvoke
	public Object intercept(InvocationContext ctx) {
		Object resultado = null;
		try {
			entityManager.joinTransaction();
			resultado = ctx.proceed();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resultado;
	}
}
