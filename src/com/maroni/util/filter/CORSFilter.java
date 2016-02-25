package com.maroni.util.filter;

import java.io.Serializable;

import javax.inject.Singleton;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;

@Singleton
public class CORSFilter implements ContainerRequestFilter, Serializable {
	private static final long serialVersionUID = -1234848483487540236L;

	private String authorization = "vanderson";
	
	@Override	
	public ContainerRequest filter(ContainerRequest request) {
		if (!authorization.equals(request.getHeaderValue(HttpHeaders.AUTHORIZATION))) {
			throw new WebApplicationException(Response.Status.UNAUTHORIZED);
		}
		return request;
	}

}